// import { AnimatePresence, motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { useDrag, useDrop } from 'react-dnd';
// import { useRef } from 'react';

// const ItemTypes = {
//   INGREDIENT: 'ingredient',
// };

// const IngredientItem = ({ ingredient, index, onRemove }) => {
//   const ref = useRef(null);
//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.INGREDIENT,
//     item: { index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   drag(ref);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 20 }}
//       transition={{ duration: 0.3 }}
//       className={`flex items-center gap-4 p-3 bg-gray-50 rounded-lg mb-2 transition-transform transform hover:scale-105 ${
//         isDragging ? 'opacity-50' : ''
//       }`}
//     >
//       <img
//         src={`/src/assets/ingredient-${ingredient.name.toLowerCase().replace(' ', '-')}.jpg`}
//         alt={ingredient.name}
//         className="w-12 h-12 object-cover rounded"
//         onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
//       />
//       <span className="flex-1 text-gray-700 font-medium">{ingredient.name}</span>
//       <span className="text-gray-500">${ingredient.price.toFixed(2)}</span>
//       <button
//         onClick={() => onRemove(index)}
//         className="text-red-600 hover:text-red-800 transition-colors"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </motion.div>
//   );
// };

// const DraggableIngredient = ({ ingredient, index, onMove }) => {
//   const ref = useRef(null);

//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.INGREDIENT,
//     item: { index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [{ isOver }, drop] = useDrop({
//     accept: ItemTypes.INGREDIENT,
//     hover(item) {
//       if (item.index !== index) {
//         onMove(item.index, index);
//         item.index = index; // Update the dragged item's index
//       }
//     },
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   });

//   drag(drop(ref));

//   return (
//     <motion.div
//       ref={ref}
//       layout
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ type: 'spring', stiffness: 100, damping: 20 }}
//       className={`relative flex items-center gap-4 p-2 bg-white bg-opacity-90 rounded-lg shadow-md w-full max-w-[400px] transition-transform transform ${
//         isDragging ? 'opacity-50 scale-105 shadow-xl' : 'hover:scale-102'
//       } ${isOver ? 'border-2 border-green-500' : 'border border-gray-200'}`}
//     >
//       <img
//         src={`/src/assets/ingredient-${ingredient.name.toLowerCase().replace(' ', '-')}.jpg`}
//         alt={ingredient.name}
//         className="w-16 h-16 object-cover rounded"
//         onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
//       />
//       <span className="text-gray-700 font-medium">{ingredient.name}</span>
//     </motion.div>
//   );
// };

// const BurgerBuilder = ({ selectedIngredients, onRemoveIngredient, onMoveIngredient }) => {
//   return (
//     <Card className="bg-white shadow-lg">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-gray-800">Your Burger Preview</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-col items-center">
//           <div className="relative w-full max-w-[450px] md:w-96 lg:w-[450px] min-h-[200px] bg-gradient-to-b from-red-50 to-yellow-50 rounded-lg p-4 space-y-2">
//             {selectedIngredients.length === 0 ? (
//               <div className="flex flex-col items-center justify-center min-h-[200px]">
//                 <img
//                   src="/src/assets/ingredient-bun-bottom.jpg"
//                   alt="Placeholder Bun"
//                   className="w-64 h-20 object-contain"
//                   onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
//                 />
//                 <p className="text-gray-500 text-center mt-4">Start adding ingredients!</p>
//               </div>
//             ) : (
//               <AnimatePresence>
//                 {selectedIngredients.map((ingredient, index) => (
//                   <DraggableIngredient
//                     key={`${ingredient.id}-${index}`}
//                     ingredient={ingredient}
//                     index={index}
//                     onMove={onMoveIngredient}
//                   />
//                 ))}
//               </AnimatePresence>
//             )}
//           </div>
//           <div className="w-full max-w-[450px] mt-4 border-t border-gray-200 pt-4">
//             <h3 className="text-lg font-semibold text-gray-700 mb-2">Selected Ingredients</h3>
//             <AnimatePresence>
//               {selectedIngredients.map((ingredient, index) => (
//                 <IngredientItem
//                   key={`${ingredient.id}-${index}`}
//                   ingredient={ingredient}
//                   index={index}
//                   onRemove={onRemoveIngredient}
//                 />
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BurgerBuilder;






import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

const ItemTypes = {
  INGREDIENT: 'ingredient',
};

const DraggableIngredient = ({ ingredient, index, onMove }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.INGREDIENT,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.INGREDIENT,
    hover(item) {
      if (item.index !== index) {
        onMove(item.index, index);
        item.index = index; // Update the dragged item's index
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drag(drop(ref));

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`relative flex items-center gap-4 p-2 bg-white bg-opacity-90 rounded-lg shadow-md w-full max-w-[400px] transition-transform transform ${
        isDragging ? 'opacity-50 scale-105 shadow-xl' : 'hover:scale-102'
      } ${isOver ? 'border-2 border-green-500' : 'border border-gray-200'}`}
    >
      <img
        src={`/src/assets/ingredient-${ingredient.name.toLowerCase().replace(' ', '-')}.jpg`}
        alt={ingredient.name}
        className="w-16 h-16 object-cover rounded"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
      />
      <span className="text-gray-700 font-medium">{ingredient.name}</span>
    </motion.div>
  );
};

const BurgerBuilder = ({ selectedIngredients, onRemoveIngredient, onMoveIngredient }) => {
  const categories = ['bun', 'patty', 'topping', 'sauce'];

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Your Burger Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[450px] md:w-96 lg:w-[450px] min-h-[200px] bg-gradient-to-b from-red-50 to-yellow-50 rounded-lg p-4 space-y-2">
            {selectedIngredients.length === 0 ? (
              <div className="flex flex-col items-center justify-center min-h-[200px]">
                <img
                  src="/src/assets/ingredient-bun-bottom.jpg"
                  alt="Placeholder Bun"
                  className="w-64 h-20 object-contain"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/64')}
                />
                <p className="text-gray-500 text-center mt-4">Start adding ingredients!</p>
              </div>
            ) : (
              <AnimatePresence>
                {selectedIngredients.map((ingredient, index) => (
                  <DraggableIngredient
                    key={`${ingredient.id}-${index}`}
                    ingredient={ingredient}
                    index={index}
                    onMove={onMoveIngredient}
                  />
                ))}
              </AnimatePresence>
            )}
          </div>
          <div className="w-full max-w-[450px] mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Selected Ingredients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full capitalize text-left justify-start bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        {category}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96">
                      <DropdownMenuLabel>Selected {category}s</DropdownMenuLabel>
                      {selectedIngredients
                        .filter((item) => item.category === category)
                        .length === 0 ? (
                        <DropdownMenuItem className="text-gray-500">
                          No {category}s selected
                        </DropdownMenuItem>
                      ) : (
                        selectedIngredients
                          .map((item, idx) => ({ ...item, originalIndex: idx }))
                          .filter((item) => item.category === category)
                          .map((item) => (
                            <DropdownMenuItem
                              key={`${item.id}-${item.originalIndex}`}
                              className="flex items-center gap-4 p-3 hover:bg-gray-50"
                              onSelect={(e) => e.preventDefault()}
                            >
                              <img
                                src={`/src/assets/ingredient-${item.name
                                  .toLowerCase()
                                  .replace(' ', '-')}.jpg`}
                                alt={item.name}
                                className="w-10 h-10 object-cover rounded"
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                              />
                              <span className="flex-1 font-medium">{item.name}</span>
                              <span className="text-gray-500">${item.price.toFixed(2)}</span>
                              <Button
                                size="sm"
                                variant="destructive"
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => onRemoveIngredient(item.originalIndex)}
                              >
                                Remove
                              </Button>
                            </DropdownMenuItem>
                          ))
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BurgerBuilder;
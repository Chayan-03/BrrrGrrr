import React from 'react';
import { ingredients } from '../lib/ingredients';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  INGREDIENT: 'ingredient',
};

const IngredientItem = ({ ingredient, onAdd }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.INGREDIENT,
    item: { ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <motion.div
      ref={drag}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-4 p-3 bg-gray-50 rounded-lg mb-2 transition-opacity ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <img
        src={`/src/assets/ingredient-${ingredient.name.toLowerCase().replace(' ', '-')}.jpg`}
        alt={ingredient.name}
        className="w-12 h-12 object-cover rounded"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
      />
      <div className="flex-1">
        <span className="text-gray-700 font-medium">{ingredient.name}</span>
        <p className="text-sm text-gray-500">
          {ingredient.description || 'A delicious addition to your burger.'}
        </p>
      </div>
      <span className="text-gray-500">${ingredient.price.toFixed(2)}</span>
      <Button
        onClick={() => onAdd(ingredient)}
        className="bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105"
      >
        Add
      </Button>
    </motion.div>
  );
};

const IngredientList = ({ onAddIngredient }) => {
  const categories = ['bun', 'patty', 'topping', 'sauce'];
  const ingredientDescriptions = {
    'Bun Top': 'Golden, toasted bun to crown your masterpiece.',
    'Bun Bottom': 'Soft, sturdy base for all your toppings.',
    'Sesame Bun': 'Classic bun sprinkled with nutty sesame seeds.',
    'Brioche Bun': 'Rich, buttery bun for a luxurious bite.',
    'Pretzel Bun': 'Chewy, salty bun with a unique twist.',
    'Beef Patty': '100% Angus beef, grilled to perfection.',
    'Chicken Patty': 'Tender, juicy chicken with a crispy edge.',
    'Veggie Patty': 'Flavorful plant-based patty for a fresh choice.',
    'Turkey Patty': 'Lean, savory turkey grilled just right.',
    'Pork Patty': 'Juicy pork with a hint of smokiness.',
    'Lettuce': 'Crisp, fresh lettuce for a cool crunch.',
    'Tomato': 'Ripe, juicy tomato slices for vibrant flavor.',
    'Cheese': 'Melted cheddar for creamy richness.',
    'Bacon': 'Crispy, smoky bacon to elevate every bite.',
    'Onion Rings': 'Golden, crispy rings for a satisfying crunch.',
    'Ketchup': 'Classic tangy ketchup to tie it all together.',
    'Mayo': 'Creamy mayo for a smooth finish.',
    'BBQ Sauce': 'Smoky, sweet sauce for a bold kick.',
    'Spicy Mustard': 'Tangy mustard with a spicy zing.',
    'Garlic Aioli': 'Creamy, garlicky sauce for a gourmet touch.',
  };

  const enrichedIngredients = ingredients.map((item) => ({
    ...item,
    description: ingredientDescriptions[item.name],
  }));

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Choose Your Ingredients</CardTitle>
      </CardHeader>
      <CardContent>
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-lg font-semibold capitalize text-gray-700 mb-3">{category}</h3>
            {enrichedIngredients
              .filter((item) => item.category === category)
              .map((item) => (
                <IngredientItem
                  key={item.id}
                  ingredient={item}
                  onAdd={onAddIngredient}
                />
              ))}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default IngredientList;
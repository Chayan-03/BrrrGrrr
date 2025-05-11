import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import BurgerBuilder from './components/BurgerBuilder';
import IngredientList from './components/IngredientList';
import OrderSummary from './components/OrderSummary';
import './App.css';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const removeIngredient = (index) => {
    setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
  };

  const moveIngredient = (fromIndex, toIndex) => {
    const updatedIngredients = [...selectedIngredients];
    const [movedIngredient] = updatedIngredients.splice(fromIndex, 1);
    updatedIngredients.splice(toIndex, 0, movedIngredient);
    setSelectedIngredients(updatedIngredients);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/builder"
            element={
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <IngredientList onAddIngredient={addIngredient} />
                  <div>
                    <BurgerBuilder
                      selectedIngredients={selectedIngredients}
                      onRemoveIngredient={removeIngredient}
                      onMoveIngredient={moveIngredient}
                    />
                    <OrderSummary selectedIngredients={selectedIngredients} />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;








// // // import React from 'react';
// // // import { useState } from 'react';
// // // import { Routes, Route, NavLink } from 'react-router-dom';
// // // import { DndProvider } from 'react-dnd';
// // // import { HTML5Backend } from 'react-dnd-html5-backend';
// // // import IngredientList from './components/IngredientList';
// // // import BurgerBuilder from './components/BurgerBuilder';
// // // import OrderSummary from './components/OrderSummary';
// // // import Home from './components/Home';
// // // import Menu from './components/Menu';
// // // import Contact from './components/Contact';
// // // import { motion } from 'framer-motion';
// // // import './App.css';

// // // const App = () => {
// // //   const [selectedIngredients, setSelectedIngredients] = useState([]);

// // //   const addIngredient = (ingredient) => {
// // //     setSelectedIngredients((prev) => [...prev, ingredient]);
// // //   };

// // //   const removeIngredient = (index) => {
// // //     setSelectedIngredients((prev) => prev.filter((_, i) => i !== index));
// // //   };

// // //   const moveIngredient = (fromIndex, toIndex) => {
// // //     setSelectedIngredients((prev) => {
// // //       const updated = [...prev];
// // //       const [moved] = updated.splice(fromIndex, 1);
// // //       updated.splice(toIndex, 0, moved);
// // //       return updated;
// // //     });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 font-poppins">
// // //       <header className="bg-red-600 text-white py-4 shadow-md">
// // //         <div className="container mx-auto px-4 flex items-center justify-between">
// // //           <div className="flex items-center gap-3">
// // //             <img src="/src/assets/burger-logo.png" alt="Brrrgrrr Logo" className="w-12 h-12" />
// // //             <h1 className="text-3xl font-bold">Brrrgrrr</h1>
// // //           </div>
// // //           <nav>
// // //             <ul className="flex gap-6">
// // //               <li>
// // //                 <NavLink
// // //                   to="/"
// // //                   className={({ isActive }) =>
// // //                     isActive ? 'underline font-semibold' : 'hover:underline'
// // //                   }
// // //                 >
// // //                   Home
// // //                 </NavLink>
// // //               </li>
// // //               <li>
// // //                 <NavLink
// // //                   to="/menu"
// // //                   className={({ isActive }) =>
// // //                     isActive ? 'underline font-semibold' : 'hover:underline'
// // //                   }
// // //                 >
// // //                   Menu
// // //                 </NavLink>
// // //               </li>
// // //               <li>
// // //                 <NavLink
// // //                   to="/builder"
// // //                   className={({ isActive }) =>
// // //                     isActive ? 'underline font-semibold' : 'hover:underline'
// // //                   }
// // //                 >
// // //                   Craft Your Crave
// // //                 </NavLink>
// // //               </li>
// // //               <li>
// // //                 <NavLink
// // //                   to="/contact"
// // //                   className={({ isActive }) =>
// // //                     isActive ? 'underline font-semibold' : 'hover:underline'
// // //                   }
// // //                 >
// // //                   Contact
// // //                 </NavLink>
// // //               </li>
              
// // //             </ul>
// // //           </nav>
// // //         </div>
// // //       </header>
// // //       <motion.main
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //         className="container mx-auto px-4 py-8"
// // //       >
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/menu" element={<Menu />} />
// // //           <Route path="/contact" element={<Contact />} />
// // //           <Route
// // //             path="/builder"
// // //             element={
// // //               <DndProvider backend={HTML5Backend}>
// // //                 <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
// // //                   Craft Your Perfect Burger
// // //                 </h2>
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                   <IngredientList onAddIngredient={addIngredient} />
// // //                   <BurgerBuilder
// // //                     selectedIngredients={selectedIngredients}
// // //                     onRemoveIngredient={removeIngredient}
// // //                     onMoveIngredient={moveIngredient}
// // //                   />
// // //                   <OrderSummary selectedIngredients={selectedIngredients} />
// // //                 </div>
// // //               </DndProvider>
// // //             }
// // //           />
// // //         </Routes>
// // //       </motion.main>
// // //     </div>
// // //   );
// // // };

// // // export default App;











// import { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Routes, Route } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import Contact from './components/Contact';
// import BurgerBuilder from './components/BurgerBuilder';
// import IngredientList from './components/IngredientList';
// import OrderSummary from './components/OrderSummary';
// import './App.css';

// function App() {
//   const [selectedIngredients, setSelectedIngredients] = useState([]);

//   const addIngredient = (ingredient) => {
//     setSelectedIngredients([...selectedIngredients, ingredient]);
//   };

//   const removeIngredient = (index) => {
//     setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
//   };

//   const moveIngredient = (fromIndex, toIndex) => {
//     const updatedIngredients = [...selectedIngredients];
//     const [movedIngredient] = updatedIngredients.splice(fromIndex, 1);
//     updatedIngredients.splice(toIndex, 0, movedIngredient);
//     setSelectedIngredients(updatedIngredients);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="min-h-screen bg-gray-50">
//         <Helmet>
//           <title>Brrrgrrr</title>
//         </Helmet>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/builder"
//             element={
//               <div className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <IngredientList onAddIngredient={addIngredient} />
//                   <div>
//                     <BurgerBuilder
//                       selectedIngredients={selectedIngredients}
//                       onRemoveIngredient={removeIngredient}
//                       onMoveIngredient={moveIngredient}
//                     />
//                     <OrderSummary selectedIngredients={selectedIngredients} />
//                   </div>
//                 </div>
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </DndProvider>
//   );
// }

// export default App;
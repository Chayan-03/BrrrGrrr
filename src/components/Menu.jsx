import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ingredients } from '../lib/ingredients';

const Menu = () => {
  const categories = ['bun', 'patty', 'topping', 'sauce'];

  const signatureBurgers = [
    {
      name: 'Classic Brrrgrrr',
      description: 'Juicy beef patty, cheese, lettuce, tomato, ketchup, mayo, on a sesame bun.',
      price: 8.99,
      image: '/src/assets/classic-burger.jpg',
    },
    {
      name: 'Spicy Inferno',
      description: 'Spicy chicken patty, cheese, lettuce, tomato, spicy mustard, on a pretzel bun.',
      price: 9.49,
      image: '/src/assets/spicy-burger.jpg',
    },
    {
      name: 'Veggie Delight',
      description: 'Grilled veggie patty, lettuce, tomato, garlic aioli, on a brioche bun.',
      price: 7.99,
      image: '/src/assets/veggie-burger.jpg',
    },
  ];

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

  return (
    <div className="bg-gradient-to-b from-red-50 to-yellow-50 py-16">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center mb-16"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
        >
          Our Mouth-Watering Menu
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          From signature burgers to custom creations, explore our delicious offerings and satisfy your cravings!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 transition-transform transform hover:scale-105"
          >
            <Link to="/builder">Build Your Own</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Signature Burgers Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Signature Burgers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureBurgers.map((burger, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-50 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    {burger.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{burger.description}</p>
                  <p className="text-lg font-semibold text-red-600">${burger.price.toFixed(2)}</p>
                  <Button
                    className="mt-4 w-full bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105"
                    onClick={() => alert(`Ordered ${burger.name}!`)}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Customize with Fresh Ingredients
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold capitalize text-gray-800">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {ingredients
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <li key={item.id} className="text-gray-600">
                          <span className="font-medium">{item.name}</span> - ${item.price.toFixed(2)}
                          <p className="text-sm text-gray-500">
                            {ingredientDescriptions[item.name] || 'A delicious addition to your burger.'}
                          </p>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Ready to Create Your Own?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
        >
          Mix and match ingredients to build a burger that’s uniquely yours!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 transition-transform transform hover:scale-105"
          >
            <Link to="/builder">Start Building</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Menu;
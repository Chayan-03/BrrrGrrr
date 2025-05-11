import React from 'react';
import { ingredients } from '../lib/ingredients';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

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
        <div className="flex flex-col gap-4">
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
                    className="w-full capitalize text-left justify-start bg-gradient-to-r from-red-50 to-yellow-50 hover:bg-gray-100 transition-colors border-red-200"
                  >
                    {category}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-96 bg-white shadow-lg rounded-lg">
                  <DropdownMenuLabel className="text-lg font-semibold text-gray-700">
                    Select {category}
                  </DropdownMenuLabel>
                  {enrichedIngredients
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <DropdownMenuItem
                        key={item.id}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 focus:bg-gray-50"
                        onSelect={(e) => e.preventDefault()}
                      >
                        <img
                          src={`/ingredient-${item.name.toLowerCase().replace(' ', '-')}.jpg`}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
                        />
                        <div className="flex-1">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <span className="text-gray-600 font-medium">${item.price.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-white"
                          onClick={() => onAddIngredient(item)}
                        >
                          Add
                        </Button>
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IngredientList;

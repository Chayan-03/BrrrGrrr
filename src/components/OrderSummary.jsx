import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const OrderSummary = ({ selectedIngredients }) => {
  const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);
  const total = calculateTotal(selectedIngredients);

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-2">
            Ingredients: <span className="font-semibold">{selectedIngredients.length}</span>
          </p>
          <p className="text-lg font-medium text-gray-800 mb-4">
            Total: <span className="text-red-600">${total.toFixed(2)}</span>
          </p>
          <Input
            type="text"
            placeholder="Name your burger (e.g., Mega Munch)"
            className="mb-4"
          />
          <Button
            onClick={() => alert('Order placed!')}
            className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 transition-transform transform hover:scale-105"
            disabled={selectedIngredients.length === 0}
          >
            Place Order Now
          </Button>
          <Button
            variant="outline"
            className="w-full mt-2 border-red-600 text-red-600 hover:bg-red-50 text-lg py-3 transition-transform transform hover:scale-105"
            disabled={selectedIngredients.length === 0}
            onClick={() => alert('Added to cart!')}
          >
            Add to Cart
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? Reach out to us, and we’ll get back to you!
          </p>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="text" placeholder="Your Message" className="h-24" />
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition-colors"
              onClick={() => alert('Message sent!')}
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Contact;
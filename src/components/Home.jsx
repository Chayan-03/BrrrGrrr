import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      quote: 'The juiciest burger I’ve ever had! Customizing it was so fun!',
      rating: 5,
    },
    {
      name: 'Jake T.',
      quote: 'Fresh ingredients and endless options. Brrrgrrr is my go-to!',
      rating: 5,
    },
    {
      name: 'Emily R.',
      quote: 'Fast, delicious, and exactly how I wanted it. Amazing!',
      rating: 4,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-yellow-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/src/assets/burger-hero.jpg)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Build Your Dream Burger
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto"
          >
            Sizzling, fresh, and made just for you. Customize every bite or create a masterpiece
            from scratch!
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
              <Link to="/builder">Start Building Now</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Why Choose Brrrgrrr?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Endless Customization',
              description: 'Choose from premium ingredients to craft your perfect burger.',
              icon: '🍔',
            },
            {
              title: 'Fresh Ingredients',
              description: 'Sourced daily for maximum flavor and quality.',
              icon: '🥬',
            },
            {
              title: 'Fast & Easy',
              description: 'Build and order in minutes, delivered hot and fresh.',
              icon: '🚀',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">{feature.icon}</span> {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 text-center mb-12"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="bg-white shadow-lg">
                  <CardContent className="pt-6">
                    <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-800">{testimonial.name}</span>
                      <div className="flex">
                        {Array(testimonial.rating)
                          .fill()
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
          Hungry Yet?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
        >
          Don’t wait—build your perfect burger or explore our menu now!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 transition-transform transform hover:scale-105"
          >
            <Link to="/builder">Build Your Burger</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-50 text-lg px-8 py-3 transition-transform transform hover:scale-105"
          >
            <Link to="/menu">View Menu</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
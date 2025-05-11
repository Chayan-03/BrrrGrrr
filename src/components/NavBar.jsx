import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import react from 'react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-red-50 to-yellow-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src="/burger-logo.png"
          alt="Brrrgrrr Logo"
          className="h-12"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/48')}
        />
        <ul className="flex space-x-6">
          {[
            { to: '/', label: 'Home' },
            { to: '/menu', label: 'Menu' },
            { to: '/builder', label: 'Craft Your Crave' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-red-600 transition-colors ${
                    isActive ? 'font-bold text-red-600' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              place<span className="text-gray-900">Bo</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <Button variant="ghost" onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <Button variant="ghost" className="justify-start" onClick={() => navigate("/login")}>Login</Button>
              <Button className="justify-start" onClick={() => navigate("/signup")}>Sign Up</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
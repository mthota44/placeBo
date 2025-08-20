import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-collaborationv5.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Turn Problems into{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              – Instantly
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Connect with skilled professionals who can solve your business challenges. 
              AI-powered matching ensures you find the perfect expert for your project.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => navigate("/post-problem")}
              >
                Post a Problem
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/find-projects")}
              >
                Find Projects
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-6 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-600">Instant Matching</span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-success mb-2" />
                <span className="text-sm font-medium text-gray-600">Verified Experts</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-medium text-gray-600">Secure Payments</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Professionals collaborating on projects"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full" />
                <span className="text-sm font-medium">AI Match Found</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-medium"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-sm">
                <div className="font-medium">95% Success Rate</div>
                <div className="text-gray-500">Project Completion</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
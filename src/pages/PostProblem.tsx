import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Web Development",
  "Mobile Apps", 
  "UI/UX Design",
  "Data Analysis",
  "Digital Marketing",
  "E-commerce",
  "DevOps",
  "Content Creation",
  "Business Strategy",
  "Other"
];

const PostProblem = () => {
  const navigate = useNavigate();
  const [problem, setProblem] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim() || !category) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      navigate("/matching-results", { 
        state: { problem, category } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">Post Your Problem</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Challenge Can We Help You Solve?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Describe your problem in detail. Our AI will analyze your needs and match you with the perfect experts.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 shadow-large">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Problem Description */}
              <div>
                <label htmlFor="problem" className="block text-lg font-semibold text-gray-900 mb-4">
                  Describe Your Problem
                </label>
                <Textarea
                  id="problem"
                  placeholder="Example: I want customers to book tables via WhatsApp. Need a chatbot that integrates with my restaurant's booking system and handles reservations automatically."
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="min-h-[200px] text-base resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  Be specific about your requirements, timeline, and expected outcomes.
                </p>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Project Category
                </label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select the category that best fits your problem" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat} className="text-base">
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={!problem.trim() || !category || isLoading}
                  className="min-w-[200px] group"
                >
                  {isLoading ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                      Finding Matches...
                    </>
                  ) : (
                    <>
                      Find Expert Matches
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-0">
            <h3 className="font-semibold text-gray-900 mb-4">💡 Tips for Better Matches</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Include specific technologies, platforms, or tools you prefer</li>
              <li>• Mention your budget range and timeline expectations</li>
              <li>• Describe your target audience or business context</li>
              <li>• Include any existing systems that need integration</li>
            </ul>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default PostProblem; 
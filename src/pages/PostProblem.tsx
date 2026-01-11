import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, Sparkles, Mic, Wand2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

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
  "Legal Services",
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
    // Simulate complex AI analysis
    setTimeout(() => {
      navigate("/matching-results", {
        state: { problem, category }
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />

      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr,300px] gap-8">

          {/* Main Form Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-4">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs">1</span>
                <span>Describe Problem</span>
                <div className="w-12 h-px bg-gray-200" />
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs">2</span>
                <span className="text-gray-400">AI Analysis</span>
                <div className="w-12 h-px bg-gray-200" />
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 text-xs">3</span>
                <span className="text-gray-400">Get Solvers</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
                What do you need solved?
              </h1>
              <p className="text-lg text-gray-600">
                Our AI analyzes your request to match you with top-tier experts who have solved similar problems before.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-300 bg-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Problem Description */}
                  <div className="relative">
                    <label htmlFor="problem" className="flex items-center justify-between text-base font-semibold text-gray-900 mb-3">
                      <span>Problem Details</span>
                      <Button variant="ghost" size="sm" type="button" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8">
                        <Mic className="w-4 h-4 mr-1.5" />
                        Voice Input
                      </Button>
                    </label>
                    <div className="relative group">
                      <Textarea
                        id="problem"
                        placeholder="E.g., I need a mobile app for my flower delivery business that tracks drivers in real-time..."
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        className="min-h-[240px] text-lg leading-relaxed p-6 resize-none focus:ring-2 focus:ring-blue-500/20 border-gray-200 bg-gray-50/50 focus:bg-white transition-all"
                        required
                      />
                      <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-medium">
                        {problem.length} chars
                      </div>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-3">
                        Category
                      </label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger className="h-12 text-base border-gray-200 bg-gray-50/50 focus:bg-white">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Budget (Optional Placeholder for now) */}
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-3">
                        Estimated Budget <span className="text-gray-400 font-normal text-sm ml-1">(Optional)</span>
                      </label>
                      <Select>
                        <SelectTrigger className="h-12 text-base border-gray-200 bg-gray-50/50 focus:bg-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Under $500</SelectItem>
                          <SelectItem value="med">$500 - $2,000</SelectItem>
                          <SelectItem value="high">$2,000 - $10,000</SelectItem>
                          <SelectItem value="ent">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => navigate("/")}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!problem.trim() || !category || isLoading}
                      className="min-w-[200px] bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Sparkles className="w-4 h-4 mr-2 animate-spin text-yellow-400" />
                          AI Matching...
                        </>
                      ) : (
                        <>
                          Find Expert Matches
                          <Wand2 className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0 shadow-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  AI Pro Tip
                </h3>
                <p className="text-blue-50 text-sm leading-relaxed mb-4">
                  "The more specific you are about your *business goal*, the better our AI can match you. Don't just ask for 'code', ask for 'user growth' or 'automation'."
                </p>
                <div className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                  95% Match Rate
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Python", "Marketing", "SEO", "Logo Design", "Shopify"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PostProblem; 
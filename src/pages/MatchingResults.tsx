import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MessageCircle, Briefcase, MapPin, Clock, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";

const experts = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Full-Stack Developer & ChatBot Specialist",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "WhatsApp API", "Bot Framework", "MongoDB"],
    experience: "5 years",
    description: "Specialized in building WhatsApp business integrations and restaurant booking systems. Recently delivered 3 similar projects.",
    matchScore: 98,
    matchReason: "Direct experience with restaurant booking bots and WhatsApp API.",
    availability: "Available Now"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Restaurant Tech Solutions Expert",
    avatar: "/placeholder.svg",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 75,
    location: "Austin, TX",
    skills: ["WhatsApp Business", "Reservation Systems", "API Integration", "Python", "PostgreSQL"],
    experience: "4 years",
    description: "Built booking systems for 15+ restaurants. Expert in WhatsApp Business API and POS system integrations.",
    matchScore: 95,
    matchReason: "Strong domain knowledge in restaurant tech stacks.",
    availability: "Available in 2 days"
  },
  {
    id: 3,
    name: "Emma Thompson",
    title: "Conversational AI & Automation Expert",
    avatar: "/placeholder.svg",
    rating: 5.0,
    reviews: 203,
    hourlyRate: 95,
    location: "London, UK",
    skills: ["Dialogflow", "WhatsApp API", "Natural Language Processing", "React", "Firebase"],
    experience: "6 years",
    description: "AI chatbot specialist with focus on hospitality sector. Created award-winning booking bots for major restaurant chains.",
    matchScore: 94,
    matchReason: "High expertise in Conversational AI flows.",
    availability: "Available Now"
  }
];

const MatchingResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { problem, category } = location.state || { problem: "Restaurant booking via WhatsApp", category: "Web Development" };

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />

      {/* Decorative background */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10" />

      {/* Internal Navigation / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mb-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/post-problem")}
          className="text-gray-500 hover:text-gray-900 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Problem
        </Button>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-[1fr,350px] gap-8">

          {/* Left Column: Results */}
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-end justify-between mb-8"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Top Matches Found</h1>
                <p className="text-gray-600 mt-1">
                  Based on your need for <span className="font-semibold text-gray-900">{category}</span>
                </p>
              </div>
              <Badge variant="secondary" className="hidden sm:flex bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1.5" />
                AI Analysis Complete
              </Badge>
            </motion.div>

            {/* Problem Recap */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-8"
            >
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 text-blue-900 text-sm leading-relaxed flex gap-3">
                <div className="shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>
                <p>
                  <span className="font-semibold">Context:</span> "{problem}"
                </p>
              </div>
            </motion.div>

            {/* Expert Cards */}
            <div className="space-y-6">
              {experts.map((expert, index) => (
                <motion.div
                  key={expert.id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 transition-all duration-300 hover:shadow-md border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Profile Section */}
                      <div className="flex items-start gap-4 min-w-[200px]">
                        <Avatar className="w-16 h-16 border-2 border-white shadow-sm">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div className="sm:hidden flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                          <p className="text-sm text-gray-500 mb-1">{expert.title}</p>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                            {expert.matchScore}% Match
                          </Badge>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="hidden sm:flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">{expert.name}</h3>
                            <p className="text-gray-500 text-sm">{expert.title}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">${expert.hourlyRate}</div>
                            <div className="text-xs text-gray-400">/hour</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-900">{expert.rating}</span>
                            <span className="text-xs">({expert.reviews})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{expert.location}</span>
                          </div>
                        </div>

                        {/* AI Reason */}
                        <div className="mb-4">
                          <div className="text-xs font-semibold text-indigo-600 mb-1 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Why they're a match
                          </div>
                          <p className="text-sm text-gray-600 italic border-l-2 border-indigo-100 pl-3">
                            "{expert.matchReason}"
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {expert.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="bg-white hover:bg-gray-50 font-normal text-gray-600">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            className="flex-1 bg-black text-white hover:bg-gray-800"
                            onClick={() => navigate("/chat", { state: { expert, problem } })}
                          >
                            Hire Now
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => navigate("/chat", { state: { expert } })}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Filters & Upsell */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Filter Results</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Hourly Rate</label>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-blue-500 rounded-full" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$10</span>
                    <span>$200+</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    Available Now
                  </label>
                </div>
                <div className="pt-2">
                  <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                    Verified Pro Only
                  </label>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MatchingResults;
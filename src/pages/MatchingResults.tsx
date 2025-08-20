import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MessageCircle, Briefcase, MapPin, Clock, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

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
    availability: "Available Now"
  }
];

const MatchingResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { problem, category } = location.state || { problem: "Restaurant booking via WhatsApp", category: "Web Development" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/post-problem")}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Expert Matches Found</h1>
              <p className="text-sm text-gray-600">{category} • {experts.length} matches</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Problem Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-success/10 border-primary/20">
            <h2 className="font-semibold text-gray-900 mb-2">Your Problem:</h2>
            <p className="text-gray-700">{problem}</p>
          </Card>
        </motion.div>

        {/* Expert Cards */}
        <div className="grid gap-6">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4 lg:min-w-[300px]">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={expert.avatar} alt={expert.name} />
                      <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                          {expert.matchScore}% Match
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{expert.title}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{expert.rating}</span>
                          <span>({expert.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{expert.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          <span>{expert.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{expert.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4">{expert.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {expert.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${expert.hourlyRate}</span>
                        <span className="text-gray-500">/hour</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          variant="outline"
                          onClick={() => navigate("/chat", { state: { expert } })}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat
                        </Button>
                        <Button 
                          variant="success"
                          onClick={() => navigate("/chat", { state: { expert, problem } })}
                        >
                          Hire Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Experts CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-success/5">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Can't find the perfect match?
            </h3>
            <p className="text-gray-600 mb-6">
              We'll notify you when new experts join who match your requirements.
            </p>
            <Button variant="outline">
              Set Up Alerts
            </Button>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default MatchingResults;
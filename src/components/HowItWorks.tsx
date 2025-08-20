import { motion } from "framer-motion";
import { MessageSquare, Users, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Problem",
    description: "Tell us what challenge you're facing. Our AI analyzes your requirements and identifies the skills needed.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Get AI-Matched Experts",
    description: "Receive instant matches with verified professionals who have the exact skills for your project.",
    color: "text-success"
  },
  {
    icon: CreditCard,
    title: "Pay Securely & Track Progress",
    description: "Set milestones, communicate safely, and pay through our secure escrow system as goals are achieved.",
    color: "text-primary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From problem to solution in three simple steps. Our platform makes it easy to connect with the right talent for your project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group relative"
              >
                <div className="relative mb-8">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-gradient-primary transition-all duration-300 group-hover:shadow-medium">
                    <Icon className={`w-10 h-10 ${step.color} group-hover:text-white transition-colors`} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item and only visible on md+ screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
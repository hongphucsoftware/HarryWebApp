import { motion } from "framer-motion";
import { 
  Search, 
  Share2, 
  CalendarCheck, 
  Target, 
  TrendingUp, 
  BarChart3 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const features = [
  {
    icon: Search,
    title: "Verified Lead Sourcing",
    description: "Hand-picked prospects that match your ideal customer profile",
  },
  {
    icon: Share2,
    title: "Multi-Channel Outreach",
    description: "Email, LinkedIn, phone calls - we reach prospects where they are",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Setting",
    description: "Qualified meetings directly in your calendar",
  },
  {
    icon: Target,
    title: "Signal & Trigger Tracking",
    description: "Time your outreach with buying signals and triggers",
  },
  {
    icon: TrendingUp,
    title: "Campaign Optimisation",
    description: "Continuous testing and improvement for better results",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Real-time insights into campaign performance and ROI",
  },
];

export default function Features() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="features-title"
          >
            Features That Build Predictable Pipeline
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }
                }
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                className="text-center group cursor-pointer"
                data-testid={`feature-${index + 1}`}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/20 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-primary h-10 w-10" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

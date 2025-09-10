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
                initial={{ opacity: 0, y: 20 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-testid={`feature-${index + 1}`}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion, useAnimationControls } from "framer-motion";
import { 
  Search, 
  Share2, 
  CalendarCheck, 
  Target, 
  TrendingUp, 
  BarChart3 
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect } from "react";

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

  const titleControls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      titleControls.start({
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      });
    }
  }, [inView, titleControls]);

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h2
            animate={titleControls}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 100%" }}
            data-testid="features-title"
          >
            Features That Build Predictable Pipeline
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: "200px", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMiddleColumn = index % 3 === 1;
            const isLeftColumn = index % 3 === 0;
            const isRightColumn = index % 3 === 2;

            return (
              <motion.div
                key={feature.title}
                initial={{ 
                  opacity: 0, 
                  x: isLeftColumn ? -100 : isRightColumn ? 100 : 0,
                  y: isMiddleColumn ? -50 : 50,
                  rotateX: 30,
                  scale: 0.8
                }}
                animate={
                  inView ? { 
                    opacity: 1, 
                    x: 0,
                    y: 0, 
                    rotateX: 0,
                    scale: 1 
                  } : { 
                    opacity: 0, 
                    x: isLeftColumn ? -100 : isRightColumn ? 100 : 0,
                    y: isMiddleColumn ? -50 : 50,
                    rotateX: 30,
                    scale: 0.8
                  }
                }
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 15
                }}
                className="text-center group cursor-pointer perspective-1000"
                data-testid={`feature-${index + 1}`}
                whileHover={{ 
                  y: -10,
                  rotateX: -5,
                  rotateY: isLeftColumn ? 5 : isRightColumn ? -5 : 0,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Floating background effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-3xl -z-10 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                
                <motion.div 
                  className="relative bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/20 shadow-lg"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, 360],
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ 
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.6, ease: "easeInOut" },
                    boxShadow: { duration: 0.3 }
                  }}
                  animate={{
                    boxShadow: [
                      "0 10px 20px rgba(139, 69, 19, 0.1)",
                      "0 15px 30px rgba(147, 51, 234, 0.15)",
                      "0 10px 20px rgba(139, 69, 19, 0.1)"
                    ],
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  >
                    <Icon className="text-primary h-10 w-10" />
                  </motion.div>
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 10px rgba(139, 69, 19, 0.3)",
                  }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {feature.description}
                </motion.p>

                {/* Hover effect particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  whileHover={{
                    opacity: 1,
                  }}
                  initial={{ opacity: 0 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                      }}
                      whileHover={{
                        x: `${20 + Math.random() * 60}%`,
                        y: `${20 + Math.random() * 60}%`,
                        scale: [0, 1, 0],
                        transition: {
                          duration: 1,
                          delay: i * 0.1,
                        }
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

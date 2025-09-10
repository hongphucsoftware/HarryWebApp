import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const stats = [
  {
    value: 114,
    suffix: "+",
    title: "Meetings Booked",
    description: "High-quality appointments with decision makers",
  },
  {
    value: 50,
    prefix: "$",
    suffix: "M+",
    title: "Pipeline Generated",
    description: "Total revenue pipeline created for clients",
  },
  {
    value: 50,
    suffix: "+",
    title: "Satisfied Clients",
    description: "Companies trusting us with their growth",
  },
  {
    value: 112,
    suffix: "%",
    title: "Average ROI",
    description: "Return on investment for our clients",
  },
];

export default function Results() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
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
            data-testid="results-title"
          >
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
              data-testid={`stat-${index + 1}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {stat.title}
              </div>
              <div className="text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

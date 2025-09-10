import { motion } from "framer-motion";
import NumberBadge from "@/components/ui/number-badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Initial Strategy Session",
    description:
      "We dive deep into your business goals, target market, and current challenges to craft a tailored approach.",
  },
  {
    number: "02",
    title: "ICP Deep Dive & Data Build",
    description:
      "Research and identify your ideal customer profile, then build a comprehensive database of qualified prospects.",
  },
  {
    number: "03",
    title: "Weeks 1–4: Warm-up Campaigns",
    description:
      "Launch initial outreach campaigns to test messaging and establish sender reputation.",
  },
  {
    number: "04",
    title: "Weeks 4–8: Optimise Scripts",
    description:
      "Analyze performance data and refine messaging for maximum response rates and conversions.",
  },
  {
    number: "05",
    title: "Week 8+: Scale Volume",
    description:
      "Increase outreach volume with proven messaging to generate consistent, predictable results.",
  },
];

export default function Process() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="process" ref={ref} className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="process-title"
          >
            Our Proven Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line rounded-full hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start md:items-center"
                data-testid={`process-step-${step.number}`}
              >
                <div className="flex-shrink-0">
                  <NumberBadge number={step.number} size="lg" />
                </div>
                <div className="ml-8 md:ml-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

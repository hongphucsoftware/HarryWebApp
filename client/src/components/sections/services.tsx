import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import NumberBadge from "@/components/ui/number-badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    number: "01",
    title: "Lead Generation",
    description:
      "AI-driven campaigns that attract the right prospects and spark engagement.",
  },
  {
    number: "02",
    title: "Appointment Setting",
    description:
      "Intelligent outreach and follow-ups that secure meetings with decision-makers.",
  },
  {
    number: "03",
    title: "Sales Development",
    description:
      "Automating repetitive tasks to boost efficiency, reduce errors, and free your team to focus on selling.",
  },
  {
    number: "04",
    title: "Campaign Management",
    description:
      "Data-driven strategies powered by large language models — turning insight into revenue.",
  },
];

export default function Services() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="services" ref={ref} className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="services-title"
          >
            Outbound Sales Solutions Built for Growth
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="h-full card-hover border border-border"
                data-testid={`service-card-${service.number}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <NumberBadge number={service.number} />
                    <h3 className="text-2xl font-bold text-card-foreground ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

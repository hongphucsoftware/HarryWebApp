import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import NumberBadge from "@/components/ui/number-badge";
import ServiceMockup from "@/components/ui/service-mockup";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    number: "01",
    title: "Lead Generation",
    description:
      "Our AI-driven solutions generate high-quality, brand-aligned content to engage your audience effortlessly.",
    mockupType: "lead-generation" as const,
  },
  {
    number: "02", 
    title: "Appointment Setting",
    description:
      "We create intelligent chatbots powered by advanced NLP to grow customer interactions & operations.",
    mockupType: "appointment-setting" as const,
  },
  {
    number: "03",
    title: "Sales Development", 
    description:
      "We automate repetitive tasks to improve operational efficiency, grow productivity, errors, and save time.",
    mockupType: "sales-development" as const,
  },
  {
    number: "04",
    title: "Campaign Management",
    description:
      "We build Large Language Models to revolutionize business processes data & interacts with customers.",
    mockupType: "campaign-management" as const,
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
                className="h-full card-hover border border-border overflow-hidden"
                data-testid={`service-card-${service.number}`}
              >
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <NumberBadge number={service.number} />
                      <h3 className="text-2xl font-bold text-card-foreground ml-4">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="px-8 pb-8">
                    <ServiceMockup type={service.mockupType} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

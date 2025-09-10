import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ServiceMockup from "@/components/ui/service-mockup";
import TypewriterEffect from "@/components/ui/typewriter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const services = [
  {
    id: "meetings",
    title: "We book meetings for SaaS",
    description: "Get meetings booked for your SaaS business with our proven outbound strategies and qualified leads.",
    mockupType: "lead-generation" as const,
    hasTyping: true,
  },
  {
    id: "lead-gen",
    title: "Agentic by design",
    description: "Birdie doesn't just take notes, it proactively takes action.",
    mockupType: "lead-generation" as const,
  },
  {
    id: "sales-method",
    title: "Sales methodology at its core", 
    description: "Trained on proven sales strategies, Birdie knows what closes deals.",
    mockupType: "appointment-setting" as const,
  },
  {
    id: "workflow",
    title: "Works where you work",
    description: "Slack, WhatsApp, Gmail, LinkedIn, SMS, or directly inside meetings.",
    mockupType: "sales-development" as const,
  },
  {
    id: "security",
    title: "Best in class security certifications",
    description: "Best in class security certifications.",
    mockupType: "security" as const,
    comingSoon: true,
  },
  {
    id: "funnel",
    title: "Beyond the sales funnel", 
    description: "Chirp slots into your existing workflow with ease",
    mockupType: "funnel" as const,
    comingSoon: true,
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nousu is purpose-built to solve the real-world challenges faced by modern sales teams — no fluff, just impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="h-full card-hover border border-border/50 shadow-sm bg-background/60 backdrop-blur-sm rounded-2xl overflow-hidden relative"
                data-testid={`service-card-${service.id}`}
              >
                <CardContent className="p-6">
                  {/* Mockup at top */}
                  <div className="mb-6 h-40 flex items-center justify-center">
                    <ServiceMockup type={service.mockupType} />
                  </div>
                  
                  {/* Title with typing animation if specified */}
                  <div className="mb-3">
                    {service.hasTyping ? (
                      <TypewriterEffect
                        staticText=""
                        words={[service.title]}
                        className="text-xl font-semibold text-foreground"
                        speed={100}
                        delay={1000}
                      />
                    ) : (
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Coming Soon Badge */}
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 text-green-700 hover:bg-green-100 text-xs px-2 py-1"
                      >
                        Coming soon
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

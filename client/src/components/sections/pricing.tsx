import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const plans = [
  {
    name: "Starter Plan",
    description: "Perfect for small businesses starting their outbound journey",
    features: [
      "SDR support",
      "Cold calling", 
      "Targeted campaigns",
      "Verified lead sourcing",
      "Appointment setting",
      "Bi-weekly reporting",
      "Slack channel",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Plan",
    description: "Ideal for growing companies ready to scale",
    features: [
      "Expanded SDR coverage",
      "Multi-channel outreach",
      "Advanced testing",
      "Trigger-based engagement",
      "Bi-weekly reviews",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Professional Plan",
    description: "Enterprise-grade solution for maximum results",
    features: [
      "Tailored outbound teams",
      "Multi-region campaigns",
      "Account manager",
      "Advanced intent tracking",
      "Custom dashboards",
      "Strategic consulting",
    ],
    cta: "Talk to Support",
    popular: false,
  },
];

export default function Pricing() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" ref={ref} className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="pricing-title"
          >
            Flexible Options for Every Stage of Growth
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full card-hover relative ${
                  plan.popular
                    ? "border-2 border-primary"
                    : "border border-border"
                }`}
                data-testid={`pricing-plan-${index + 1}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <Button
                      onClick={scrollToContact}
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-${plan.name.toLowerCase().replace(" ", "-")}`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center"
                        data-testid={`feature-${index + 1}-${featureIndex + 1}`}
                      >
                        <Check className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

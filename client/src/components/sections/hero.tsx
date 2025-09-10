import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-gradient pt-24 pb-16 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            data-testid="hero-headline"
          >
            Scale Faster with
            <br />
            <span className="text-primary">Predictable Outbound</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto"
            data-testid="hero-subheadline"
          >
            Outbound that delivers results — we book CEO-level meetings, fill
            your pipeline, and help you close more deals without extra
            headcount.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-lg font-semibold px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300"
              data-testid="button-cta-hero"
            >
              <span className="mr-2">👉</span>
              Get a custom quote today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex justify-center items-center space-x-8 opacity-60"
            data-testid="trust-indicators"
          >
            <div className="text-sm text-muted-foreground">
              Trusted by 50+ companies
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

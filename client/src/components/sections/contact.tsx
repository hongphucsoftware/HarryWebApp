import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Contact() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >
            Ready to Scale Your Outbound?
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Join our waitlist to be the first to experience our revolutionary outbound sales platform
          </p>
          
          {/* Free Ebook Offer */}
          <div className="bg-gradient-to-r from-primary/5 to-purple-600/5 border border-primary/10 rounded-lg p-4 mb-8 inline-block">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🎁</span>
              <div className="text-left">
                <p className="font-semibold text-foreground">FREE Bonus: Ultimate Outbound Sales Guide</p>
                <p className="text-sm text-muted-foreground">40-page ebook with proven templates & strategies</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={() => window.location.href = '/joinwaitlist'}
              size="lg"
              className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-join-waitlist"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

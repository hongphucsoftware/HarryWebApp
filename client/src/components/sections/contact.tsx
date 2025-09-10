import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
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
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >
            Ready to Scale Your Outbound?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            By tailoring our approach to each client's needs, we ensure maximum results in filling your sales pipeline 
            with qualified leads. Schedule your free consultation today and let Nousu transform your business 
            growth with our renowned b2b lead generation services.
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
              Join Waitlist & Get Free Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Address</h4>
              <p className="text-muted-foreground text-sm">
                1 Sussex Street<br />Sydney, 2000
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Phone</h4>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+61483942889" className="hover:text-primary transition-colors">
                  +61 483 942 889
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:harry@nousucollective.com" className="hover:text-primary transition-colors">
                  harry@nousucollective.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

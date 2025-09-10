import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import nousuTeamVideo from "@/assets/nousu-team-video.mp4";

export default function About() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover aspect-[4/3]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={nousuTeamVideo} type="video/mp4" />
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center relative">
                    <div className="text-center z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl">
                        <span className="text-white font-bold text-2xl">N</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Nousu Collective Team
                      </p>
                    </div>
                  </div>
                </div>
              </video>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full opacity-60"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              About us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Learn More About Our{" "}
              <span className="text-primary">Journey and Mission</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nousu was built to solve one of the hardest problems founders and sales leaders face: generating predictable 
              pipeline. We've helped SaaS, finance, startups, and SMEs book thousands of meetings and generate millions in 
              pipeline through premium outbound campaigns. Our approach is simple — act as your sales team, not a vendor, 
              and deliver measurable growth you can rely on.
            </p>

            <div className="grid md:grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">50+ Companies Served</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Millions in Pipeline</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Predictable Results</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium">Premium Campaigns</span>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={() => window.location.href = '/joinwaitlist'}
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold px-8 py-6 rounded-xl group"
                data-testid="button-strategy-call"
              >
                Book a Strategy Call
                <motion.div
                  className="inline-block ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
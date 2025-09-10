import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiSlack, SiZoom, SiHubspot, SiSalesforce, SiLinkedin } from "react-icons/si";

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

          {/* Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
            data-testid="workflow-animation"
          >
            <div className="text-sm text-muted-foreground text-center mb-12">
              See how our system works
            </div>
            
            <div className="relative max-w-4xl mx-auto h-96">
              {/* Step 1: Lead Generation */}
              <motion.div
                className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white text-xs font-bold">Lead<br/>Gen</span>
              </motion.div>

              {/* Animated arrow 1 */}
              <motion.div
                className="absolute top-12 left-32 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              >
                <motion.div
                  className="absolute right-0 top-0 w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ delay: 2.1, duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Step 2: AI Processing */}
              <motion.div
                className="absolute top-8 left-60 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="text-white text-xs font-bold">AI<br/>Process</span>
              </motion.div>

              {/* Animated arrow 2 */}
              <motion.div
                className="absolute top-12 left-84 w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              >
                <motion.div
                  className="absolute right-0 top-0 w-2 h-2 bg-green-500 rounded-full"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ delay: 2.8, duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

              {/* Step 3: Outreach */}
              <motion.div
                className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              >
                <span className="text-white text-xs font-bold">Out<br/>reach</span>
              </motion.div>

              {/* Bottom row - Step 4: Analytics */}
              <motion.div
                className="absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.7, duration: 0.5 }}
              >
                <span className="text-white text-xs font-bold">Analy<br/>tics</span>
              </motion.div>

              {/* Curved arrow down */}
              <motion.svg
                className="absolute top-28 right-16 w-12 h-32"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 2.9, duration: 1.2 }}
              >
                <path
                  d="M 6 0 Q 24 16 6 32"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="2,2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Step 5: Results */}
              <motion.div
                className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.4, duration: 0.5 }}
              >
                <span className="text-white text-xs font-bold">Results</span>
              </motion.div>

              {/* Curved arrow left */}
              <motion.svg
                className="absolute bottom-16 left-32 w-32 h-12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 3.9, duration: 1.2 }}
              >
                <path
                  d="M 0 6 Q 16 -6 32 6"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="2,2"
                />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Center data flow animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
              </motion.div>

              {/* Floating data points */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${30 + i * 8}%`
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

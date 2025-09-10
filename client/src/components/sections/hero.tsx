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

          {/* Trust indicators with circular animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
            data-testid="trust-indicators"
          >
            <div className="text-sm text-muted-foreground text-center mb-12">
              Trusted by 50+ companies worldwide
            </div>
            
            <div className="relative w-80 h-80 mx-auto">
              {/* Circular container for logos */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Slack */}
                <motion.div
                  className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }}
                >
                  <SiSlack className="w-8 h-8 text-[#4A154B]" />
                </motion.div>

                {/* Zoom */}
                <motion.div
                  className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "30%",
                    right: "15%"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }}
                >
                  <SiZoom className="w-8 h-8 text-[#2D8CFF]" />
                </motion.div>

                {/* HubSpot */}
                <motion.div
                  className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    bottom: "30%",
                    right: "15%"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }}
                >
                  <SiHubspot className="w-8 h-8 text-[#FF7A59]" />
                </motion.div>

                {/* Salesforce */}
                <motion.div
                  className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    bottom: "10%",
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }}
                >
                  <SiSalesforce className="w-8 h-8 text-[#00A1E0]" />
                </motion.div>

                {/* LinkedIn */}
                <motion.div
                  className="absolute w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "30%",
                    left: "15%"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  animate={{ rotate: -360 }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                  }}
                >
                  <SiLinkedin className="w-8 h-8 text-[#0077B5]" />
                </motion.div>
              </motion.div>

              {/* Center logo/text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-xl">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    Nousu Partners
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SiSlack, SiZoom, SiHubspot, SiSalesforce, SiLinkedin } from "react-icons/si";
import TypewriterEffect from "@/components/ui/typewriter";
import Logo from "@/components/ui/logo";
import nousuPartnersLogo from "@/assets/nousu-partners-logo.png";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
            data-testid="hero-headline"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Scale Faster with
            </h1>
            <TypewriterEffect
              staticText="Predictable"
              words={["Outbound", "Lead Generation", "Sales Automation", "Growth"]}
              className="text-5xl md:text-7xl font-bold"
              speed={120}
              delay={2000}
            />
          </motion.div>

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
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="text-lg font-semibold px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 group overflow-hidden relative"
                data-testid="button-cta-hero"
              >
                <motion.span 
                  className="inline-block mr-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👉
                </motion.span>
                Get a custom quote today
                <motion.div
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Circular company logos animation */}
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
            
            <div className="relative w-[28rem] h-[28rem] mx-auto" style={{ perspective: "1200px" }}>
              {/* 3D Circular container for logos */}
              <motion.div
                className="absolute inset-0 preserve-3d"
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Slack - Front */}
                <motion.div
                  className="absolute w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) translateZ(150px)"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <SiSlack className="w-12 h-12 text-[#4A154B]" />
                </motion.div>

                {/* Zoom - Right */}
                <motion.div
                  className="absolute w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "50%", 
                    left: "50%",
                    transform: "translate(-50%, -50%) rotateY(72deg) translateZ(150px)"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <SiZoom className="w-12 h-12 text-[#2D8CFF]" />
                </motion.div>

                {/* HubSpot - Back Right */}
                <motion.div
                  className="absolute w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "50%",
                    left: "50%", 
                    transform: "translate(-50%, -50%) rotateY(144deg) translateZ(150px)"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <SiHubspot className="w-12 h-12 text-[#FF7A59]" />
                </motion.div>

                {/* Salesforce - Back Left */}
                <motion.div
                  className="absolute w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotateY(216deg) translateZ(150px)"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <SiSalesforce className="w-12 h-12 text-[#00A1E0]" />
                </motion.div>

                {/* LinkedIn - Left */}
                <motion.div
                  className="absolute w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-100"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotateY(288deg) translateZ(150px)"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ scale: { duration: 0.2 } }}
                >
                  <SiLinkedin className="w-12 h-12 text-[#0077B5]" />
                </motion.div>
              </motion.div>

              {/* Center logo/text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <motion.div 
                    className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-xl border border-gray-100"
                    animate={{ rotateY: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <img 
                      src={nousuPartnersLogo} 
                      alt="Nousu Partners" 
                      className="w-20 h-20 object-contain"
                    />
                  </motion.div>
                  <div className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide">
                    {"Nousu Partners".split("").map((ch, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: 0, opacity: 0.85 }}
                        animate={{ y: [0, -2, 0], opacity: [0.85, 1, 0.85] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
                      >
                        {ch === " " ? "\u00A0" : ch}
                      </motion.span>
                    ))}
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

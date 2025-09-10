import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function Introduction() {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          data-testid="introduction-text"
        >
          Nousu delivers predictable outbound sales — from lead generation and
          appointment setting to full campaign execution. We specialise in
          building pipelines that consistently turn conversations into revenue.
        </motion.p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-border rounded-lg bg-card">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
        data-testid={`faq-question-${question.split(' ')[0].toLowerCase()}`}
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          ) : (
            <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const faqs = [
    {
      question: "What is Nousu Collective?",
      answer: "Nousu Collective is an outbound sales solutions company that helps businesses generate predictable pipeline through premium outbound campaigns. We act as your sales team, not just a vendor, delivering measurable growth you can rely on."
    },
    {
      question: "How does Nousu improve sales efficiency?",
      answer: "We combine advanced AI technology with proven sales methodologies to identify high-quality prospects, craft personalized outreach campaigns, and book qualified meetings. Our approach eliminates the guesswork and delivers consistent results without requiring additional headcount."
    },
    {
      question: "Is Nousu suitable for all business sizes?",
      answer: "Yes! We work with startups, scale-ups, SMEs, and enterprise companies. Our solutions are scalable and can be customized to fit your specific industry, target market, and growth stage. Whether you're looking to book your first 10 meetings or scale to hundreds, we have the right approach."
    },
    {
      question: "Does Nousu integrate with other tools?",
      answer: "Absolutely! We integrate seamlessly with popular CRM systems like Salesforce, HubSpot, and Pipedrive, as well as communication tools like Slack and Zoom. Our goal is to fit into your existing workflow, not disrupt it."
    },
    {
      question: "How can I get started with Nousu?",
      answer: "Getting started is easy! Join our waitlist to secure early access and exclusive launch pricing. Once onboard, we'll conduct a strategy session to understand your goals, design a custom outbound campaign, and start generating qualified meetings within weeks."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our clients typically see qualified meetings booked within the first month, with many generating millions in pipeline value. Results vary by industry and target market, but we focus on delivering consistent, measurable outcomes that directly impact your revenue growth."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            FAQ's
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Answers to your common
            <br />
            <span className="text-primary">outbound questions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our outbound sales solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.location.href = '/joinwaitlist'}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              data-testid="faq-contact-button"
            >
              Contact us
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
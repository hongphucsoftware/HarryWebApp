import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Using EmailJS for form submission
      const emailJSParams = {
        to_email: "nguyenledev05@gmail.com",
        from_name: data.name,
        from_company: data.company,
        from_email: data.email,
        message: data.message || "No message provided",
        reply_to: data.email,
      };

      // EmailJS integration - using public key and service ID from environment
      const emailJSService = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nousu";
      const emailJSTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_nousu";
      const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "default_key";

      // Import EmailJS dynamically
      const emailjs = await import("@emailjs/browser");
      
      await emailjs.send(
        emailJSService,
        emailJSTemplate,
        emailJSParams,
        emailJSPublicKey
      );

      setIsSubmitted(true);
      reset();
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can help you build a predictable sales pipeline
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg border border-border">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="contact-form"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className="mt-2"
                        data-testid="input-name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium mb-2">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className="mt-2"
                        data-testid="input-company"
                      />
                      {errors.company && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-2"
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      rows={4}
                      className="mt-2"
                      placeholder="Tell us about your outbound challenges and goals..."
                      data-testid="input-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full py-4 text-lg font-semibold"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8" data-testid="form-success">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank you!
                  </h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                    data-testid="button-send-another"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

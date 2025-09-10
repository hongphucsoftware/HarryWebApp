import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  package: z.enum(["starter", "growth", "scale"], {
    required_error: "Please select a package",
  }),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
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
    watch,
    setValue,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Using EmailJS for form submission
      const emailJSParams = {
        to_email: "harry@nousucollective.com",
        from_name: `${data.firstName} ${data.lastName}`,
        from_company: data.company,
        from_email: data.email,
        phone: data.phone,
        package: data.package,
        preferred_date: data.date,
        preferred_time: data.time,
        reply_to: data.email,
        subject: "New Contact Form Submission - Nousu Collective",
      };

      // EmailJS integration
      const emailJSService = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_nousu";
      const emailJSTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_nousu";
      const emailJSPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "default_key";

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
        description: "We'll get back to you within 24 hours to schedule your consultation.",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            By tailoring our approach to each client's needs, we ensure maximum results in filling your sales pipeline 
            with qualified leads. Schedule your free consultation today and let Nousu transform your business 
            growth with our renowned b2b lead generation services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      1 Sussex Street, Sydney, 2000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+61483942889" className="hover:text-primary transition-colors">
                        +61 483 942 889
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:harry@nousucollective.com" className="hover:text-primary transition-colors">
                        harry@nousucollective.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Ebook Offer */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">🎁</span>
                <div>
                  <h4 className="font-semibold text-foreground">FREE Bonus</h4>
                  <p className="text-sm text-muted-foreground">Ultimate Outbound Sales Guide</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get our 40-page ebook with proven templates & strategies when you schedule a consultation.
              </p>
              <Button
                onClick={() => window.location.href = '/joinwaitlist'}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Join Waitlist for Free Guide
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-lg border border-border">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="contact-form"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium mb-2">
                          First name *
                        </Label>
                        <Input
                          id="firstName"
                          {...register("firstName")}
                          className="mt-2"
                          data-testid="input-first-name"
                        />
                        {errors.firstName && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium mb-2">
                          Last name *
                        </Label>
                        <Input
                          id="lastName"
                          {...register("lastName")}
                          className="mt-2"
                          data-testid="input-last-name"
                        />
                        {errors.lastName && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium mb-2">
                          Phone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className="mt-2"
                          placeholder="+61 XXX XXX XXX"
                          data-testid="input-phone"
                        />
                        {errors.phone && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
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
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium mb-2">
                        Company name *
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

                    <div>
                      <Label className="text-sm font-medium mb-4 block">
                        Which Package would you like to enquire about? *
                      </Label>
                      <div className="space-y-3">
                        {[
                          { value: "starter", label: "Starter" },
                          { value: "growth", label: "Growth" },
                          { value: "scale", label: "Scale" },
                        ].map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center space-x-3 cursor-pointer"
                          >
                            <input
                              type="radio"
                              {...register("package")}
                              value={option.value}
                              className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                            />
                            <span className="text-sm font-medium text-foreground">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                      {errors.package && (
                        <p className="text-destructive text-sm mt-1">
                          {errors.package.message}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-sm font-medium mb-2">
                          When are you free for a call? *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          {...register("date")}
                          className="mt-2"
                          min={new Date().toISOString().split('T')[0]}
                          data-testid="input-date"
                        />
                        {errors.date && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.date.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-sm font-medium mb-2">
                          Time *
                        </Label>
                        <select
                          id="time"
                          {...register("time")}
                          className="mt-2 w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          data-testid="select-time"
                        >
                          <option value="">Select time</option>
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                        </select>
                        {errors.time && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.time.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8" data-testid="form-success">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank you!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Your consultation request has been submitted successfully. We'll contact you within 24 hours to confirm your appointment.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-4"
                      data-testid="button-send-another"
                    >
                      Send Another Request
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

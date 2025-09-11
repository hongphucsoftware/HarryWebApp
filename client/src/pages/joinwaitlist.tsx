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
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  jobTitle: z.string().optional(),
  message: z.string().optional(),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

export default function JoinWaitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistForm) => {
    setIsSubmitting(true);
    try {
      const resp = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!resp.ok) {
        throw new Error('Failed to send');
      }
      setIsSubmitted(true);
      reset();
      toast({
        title: 'Successfully joined the waitlist!',
        description: 'Thanks! We\'ll reach out via email with your FREE guide.'
      });
    } catch (error) {
      console.error('Failed to submit waitlist form:', error);
      toast({
        title: 'Failed to join waitlist',
        description: 'Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/'}
              className="flex items-center text-muted-foreground hover:text-foreground"
              data-testid="button-back-home"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
              data-testid="waitlist-title"
            >
              Join Our Waitlist
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Be the first to experience the future of outbound sales automation
            </p>
            
            {/* Free Ebook Offer */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">📚</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground text-center mb-3">
                FREE Bonus: Ultimate Outbound Sales Guide
              </h3>
              <p className="text-center text-muted-foreground mb-4">
                Get our comprehensive 40-page ebook packed with proven strategies, templates, and frameworks used by top-performing sales teams to book 10x more meetings.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600">✓</span>
                  </div>
                  <span className="font-medium">Email Templates</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <span className="font-medium">Follow-up Sequences</span>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600">✓</span>
                  </div>
                  <span className="font-medium">Prospecting Tips</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-2xl border border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="waitlist-form"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="mt-2"
                          placeholder="John Doe"
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
                          placeholder="Acme Corp"
                          data-testid="input-company"
                        />
                        {errors.company && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium mb-2">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-2"
                          placeholder="john@acme.com"
                          data-testid="input-email"
                        />
                        {errors.email && (
                          <p className="text-destructive text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="jobTitle" className="text-sm font-medium mb-2">
                          Job Title
                        </Label>
                        <Input
                          id="jobTitle"
                          {...register("jobTitle")}
                          className="mt-2"
                          placeholder="VP of Sales"
                          data-testid="input-job-title"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2">
                        What are your biggest outbound challenges?
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        rows={4}
                        className="mt-2"
                        placeholder="Tell us about your current outbound process and challenges..."
                        data-testid="input-message"
                      />
                    </div>
                    
                    <div className="bg-accent/20 border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">What you'll get:</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>FREE Ultimate Outbound Sales Guide</strong> (40-page ebook)</li>
                        <li>• Early access to our revolutionary outbound platform</li>
                        <li>• Exclusive beta features and priority support</li>
                        <li>• Special launch pricing (up to 50% off)</li>
                        <li>• Direct line to our founding team</li>
                      </ul>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12" data-testid="form-success">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      Welcome to the future! 🚀
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      You're now on our exclusive waitlist. We'll reach out soon with early access details and special launch pricing.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-2xl">📧</span>
                      </div>
                      <p className="text-green-800 text-center font-medium">
                        Check your email for your FREE Ultimate Outbound Sales Guide!
                      </p>
                      <p className="text-green-600 text-center text-sm mt-1">
                        The ebook download link has been sent to your inbox.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mr-4"
                        data-testid="button-join-another"
                      >
                        Add Another Person
                      </Button>
                      <Button
                        onClick={() => window.location.href = '/'}
                        className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                        data-testid="button-back-home-success"
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
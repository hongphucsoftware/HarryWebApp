import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Services from "@/components/sections/services";
import Features from "@/components/sections/features";
import Process from "@/components/sections/process";
import Results from "@/components/sections/results";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Introduction />
      <Services />
      <Features />
      <Process />
      <Results />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

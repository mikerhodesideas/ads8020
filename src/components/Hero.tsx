import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* 80/20 Split Background Overlay */}
      <div className="absolute inset-0 bg-gradient-split opacity-90" />
      
      <div className="relative z-10 section-container text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="heading-xl font-heading mb-6">
            We're{" "}
            <span className="text-secondary font-bold">80%</span>{" "}
            sure this business model works,{" "}
            <span className="text-secondary font-bold">20%</span>{" "}
            panic
          </h1>
          
          {/* Subheadline */}
          <p className="text-large text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            The refreshingly honest Google Ads agency that aims for 80% client 
            satisfaction because perfection is overrated.
          </p>
          
          {/* 80/20 Progress Bar */}
          <div className="progress-80-20 mb-8 max-w-md mx-auto" />
          
          {/* CTA Button */}
          <Button className="btn-hero">
            Get 80% Better Results
          </Button>
          
          {/* Small confidence note */}
          <p className="text-sm text-primary-foreground/70 mt-4">
            * Results may vary. Panic levels typically decrease after month two.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
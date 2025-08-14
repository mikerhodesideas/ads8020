import { Search, Settings, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      week: "Week 1",
      title: "Discovery",
      description: "We dig into your business, argue with your current setup, and identify what's actually broken.",
      details: ["Account audit", "Competitor analysis", "Goal setting", "Strategy planning"]
    },
    {
      icon: Settings,
      week: "Week 2-4", 
      title: "Implementation",
      description: "We fix things in order of impact. Big wins first, perfectionist tweaks never.",
      details: ["Campaign restructure", "Keyword optimization", "Landing page review", "Tracking setup"]
    },
    {
      icon: TrendingUp,
      week: "Ongoing",
      title: "Optimization", 
      description: "Monthly reviews, quarterly strategy sessions, and the occasional panic when iOS updates break everything.",
      details: ["Performance monitoring", "A/B testing", "Strategy refinement", "Reporting & insights"]
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            How We Work{" "}
            <span className="text-muted-foreground">(Spoiler: It's Surprisingly Simple)</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            No 47-step processes or unnecessary complexity. Just three phases 
            that get you from "money pit" to "profit machine."
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Container */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12 last:mb-0">
                {/* Icon & Week */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="w-20 h-20 mx-auto lg:mx-0 mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="text-sm font-semibold text-secondary">
                    {step.week}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="heading-md font-heading text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-large text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center lg:justify-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-10 top-24 w-0.5 h-16 bg-accent" />
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16 bg-accent/50 rounded-xl p-8">
          <p className="text-muted-foreground">
            <strong>Fair warning:</strong> We might occasionally send you a message at 2 AM when we 
            discover something that could double your conversion rate. Feel free to ignore until morning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
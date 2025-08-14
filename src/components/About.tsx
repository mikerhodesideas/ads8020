import { Target, Heart, Zap } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Target,
      title: "Brutally Practical",
      description: "We skip the fluff and focus on what drives revenue"
    },
    {
      icon: Heart,
      title: "Refreshingly Honest", 
      description: "No smoke, mirrors, or marketing speak"
    },
    {
      icon: Zap,
      title: "Strategically Lazy",
      description: "Work smarter, not harder (it's literally a science)"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            <span className="text-secondary">80%</span> of our success comes from luck,{" "}
            <span className="text-secondary">20%</span> from skill{" "}
            <span className="text-muted-foreground">(we're honest like that)</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-large text-muted-foreground">
            <p>
              We're a small Google Ads agency that's figured out something rather brilliant: 
              most businesses only need to get the important 20% right to see 80% of the 
              results they want. While other agencies obsess over decimal points and vanity 
              metrics, we focus on what actually moves the needle.
            </p>
            
            <p>
              Our founder started this after years of watching agencies overcomplicate everything. 
              Now we help e-commerce businesses cut through the noise with targeted Google Ads 
              that actually convert. We're also cautiously optimistic about this whole AI thing.
            </p>
          </div>
        </div>
        
        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                <pillar.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="heading-md font-heading text-primary mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* 80/20 Stat */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-accent rounded-xl p-8">
            <div className="progress-80-20 mb-4 w-64" />
            <p className="text-sm text-muted-foreground">
              The Pareto Principle in action: Focus on the vital 20%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Search, ShoppingCart, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Google Ads Management",
      description: "Stop throwing money at keywords that don't convert. We find the 20% of your ad spend that generates 80% of your results. Revolutionary, we know.",
      features: ["Keyword optimization", "Bid management", "Performance tracking", "Monthly reporting"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Optimization", 
      description: "Your shopping campaigns shouldn't feel like gambling. We make them predictably profitable instead of predictably expensive.",
      features: ["Shopping campaign setup", "Product feed optimization", "Audience targeting", "Conversion tracking"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "We're experimenting with AI tools to make your ads smarter. Still 80% skeptical, but the results are promising.",
      features: ["Automated bid optimization", "Smart audience creation", "Performance predictions", "Creative testing"]
    }
  ];

  return (
    <section className="bg-accent/30 py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            What We Actually Do
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Three core services that deliver the results you actually care about. 
            No unnecessary complexity, just effective Google Ads management.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-shadow duration-300 bg-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="heading-md font-heading text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to stop wasting 80% of your budget on the wrong 20% of activities?
          </p>
          <button className="btn-outline">
            See How We Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
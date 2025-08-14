import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Results = () => {
  const testimonials = [
    {
      quote: "Increased our ROAS by 340% in three months. Their honesty about what wasn't working was worth the price alone.",
      author: "Sarah Thompson",
      company: "Artisan Coffee Co.",
      metric: "340% ROAS increase"
    },
    {
      quote: "Finally, an agency that doesn't send me 47-page reports I'll never read. Just results and straight talk.",
      author: "Mike Chen", 
      company: "Outdoor Gear Direct",
      metric: "80% less confusion"
    },
    {
      quote: "They made Google Ads actually make sense. Revolutionary concept.",
      author: "Lisa Rodriguez",
      company: "Boutique Fashion",
      metric: "200% more clarity"
    }
  ];

  const stats = [
    { number: "340%", label: "Average ROAS improvement" },
    { number: "80%", label: "Less wasted ad spend" },
    { number: "20%", label: "Time to see results (weeks)" },
    { number: "0%", label: "Marketing fluff in reports" }
  ];

  return (
    <section className="bg-accent/30 py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            Some Numbers{" "}
            <span className="text-muted-foreground">(The Good Ones)</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            We could show you all our numbers, but you probably only care about these ones. 
            Also, these are the ones that make us look good.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card rounded-xl p-6 card-shadow">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2 font-heading">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-shadow duration-300 bg-card border-0">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-accent pt-4">
                  <div className="font-semibold text-primary mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {testimonial.company}
                  </div>
                  <div className="text-xs font-semibold text-secondary">
                    {testimonial.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Ready to join the satisfied 80%? (The other 20% haven't replied to our emails yet.)
            </p>
            <button className="btn-hero">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
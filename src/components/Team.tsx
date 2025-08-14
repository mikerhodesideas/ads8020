import { Coffee, BarChart3, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & Ads Strategist", 
      bio: "Former e-commerce marketer who got tired of agencies that overcomplicate everything. Now helps businesses get 80% of their results from 20% of the effort. Drinks too much coffee.",
      icon: Coffee,
      funFact: "Can debug a campaign while half asleep"
    },
    {
      name: "Sam Chen",
      role: "Performance Analyst",
      bio: "Turns data into insights, insights into action. Has strong opinions about attribution models and isn't afraid to share them.",
      icon: BarChart3,
      funFact: "Speaks fluent spreadsheet"
    },
    {
      name: "Jordan Miller", 
      role: "Creative Strategist",
      bio: "Writes ads that people actually click. Also writes terrible puns that somehow test well.",
      icon: PenTool,
      funFact: "Made a client millions with one emoji change"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            The <span className="text-secondary">80/20</span> Crew
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            A small team of humans who believe in working smarter, not harder. 
            We're good at what we do, and surprisingly honest about what we're not.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="card-shadow hover:shadow-lg transition-all duration-300 bg-card border-0 group">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                  <member.icon className="w-10 h-10 text-secondary" />
                </div>
                
                {/* Name & Role */}
                <h3 className="heading-md font-heading text-primary mb-2">
                  {member.name}
                </h3>
                <div className="text-secondary font-semibold mb-4">
                  {member.role}
                </div>
                
                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Fun Fact */}
                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="text-xs font-semibold text-secondary uppercase tracking-wide mb-1">
                    Fun Fact
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {member.funFact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 text-center">
          <div className="bg-accent/30 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-secondary font-heading">3</div>
                <div className="text-sm text-muted-foreground">Caffeine-dependent humans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary font-heading">47</div>
                <div className="text-sm text-muted-foreground">Combined years of experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary font-heading">80%</div>
                <div className="text-sm text-muted-foreground">Of our jokes are work-appropriate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
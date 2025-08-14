import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    adSpend: "",
    notWorking: "",
    success: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            Let's Talk{" "}
            <span className="text-muted-foreground">(No Pressure)</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Ready to stop wasting 80% of your ad spend on the wrong 20% of activities? 
            Let's have a conversation about your business and how we might help.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-md font-heading text-primary mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're surprisingly good at responding to emails and even better at 
                having honest conversations about your Google Ads situation. 
                No hard sell, just straight talk.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <div className="text-muted-foreground">hello@8020ads.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Quick Chat</div>
                  <div className="text-muted-foreground">Book a 30-minute call</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Location</div>
                  <div className="text-muted-foreground">Manchester, UK (but we work everywhere)</div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-accent/50 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary font-heading">24hrs</div>
                  <div className="text-xs text-muted-foreground">Average response time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary font-heading">30min</div>
                  <div className="text-xs text-muted-foreground">Initial consultation</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="card-shadow border-0">
            <CardHeader>
              <CardTitle className="heading-md font-heading text-primary">
                Start The Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Business Name *
                  </label>
                  <Input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your amazing business"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Website *
                  </label>
                  <Input
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Current Google Ads Spend (Monthly)
                  </label>
                  <select
                    name="adSpend"
                    value={formData.adSpend}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select your spend range</option>
                    <option value="0-5k">£0 - £5,000</option>
                    <option value="5k-15k">£5,000 - £15,000</option>
                    <option value="15k-50k">£15,000 - £50,000</option>
                    <option value="50k+">£50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    What's Not Working *
                  </label>
                  <Textarea
                    name="notWorking"
                    value={formData.notWorking}
                    onChange={handleChange}
                    placeholder="Tell us about your current frustrations with Google Ads..."
                    rows={3}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    What Success Looks Like *
                  </label>
                  <Textarea
                    name="success"
                    value={formData.success}
                    onChange={handleChange}
                    placeholder="What would make you happy with your ads performance?"
                    rows={3}
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Start The Conversation
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll get back to you within 24 hours. Usually much faster unless 
                  we're dealing with a Google Ads emergency.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
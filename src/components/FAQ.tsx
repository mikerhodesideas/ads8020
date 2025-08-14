import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are you actually good at this?",
      answer: "We're demonstrably competent and refreshingly honest about our limitations. That combination seems to work. Our clients see an average 340% improvement in ROAS, but your mileage may vary depending on how broken things were to start with."
    },
    {
      question: "Why should I trust an agency that admits to panic?",
      answer: "Because every agency panics, we're just honest about it. Plus, controlled panic leads to creative solutions. When iOS 14.5 broke everyone's tracking, we panicked for exactly 4 hours, then figured out workarounds that actually improved our clients' performance."
    },
    {
      question: "Do you guarantee results?",
      answer: "We guarantee we'll work hard and tell you the truth. Results depend on many factors, including whether your product is actually any good, your pricing strategy, and whether your website makes people want to buy things. We can fix the ads; we can't fix fundamental business issues."
    },
    {
      question: "What's this AI stuff about?",
      answer: "We're experimenting with AI tools to make ads smarter and reporting clearer. No, we won't replace human creativity. Yes, we'll use it to automate the boring bits like bid adjustments and performance monitoring. Think of it as a very smart intern that never needs coffee breaks."
    },
    {
      question: "How much does it cost?",
      answer: "Our fees start at £2,500/month for full account management, plus your ad spend. We don't work with businesses spending less than £5,000/month on ads because frankly, it's not worth anyone's time at that budget level. We're honest like that."
    },
    {
      question: "How quickly will I see results?",
      answer: "Initial improvements usually appear within 2-3 weeks, significant results by month 2. Anyone promising overnight success is lying. Anyone taking longer than 3 months to show improvement probably doesn't know what they're doing."
    }
  ];

  return (
    <section className="bg-accent/30 py-16 lg:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg font-heading text-primary mb-6">
            Questions We Get A Lot
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            The FAQ section where we actually answer your questions instead of 
            dodging them with marketing speak. Refreshing, isn't it?
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border-0 card-shadow overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-accent/20 transition-colors duration-300">
                  <span className="font-heading font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Still have questions? */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-xl p-8 max-w-2xl mx-auto card-shadow">
            <h3 className="heading-md font-heading text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're surprisingly responsive to emails. Usually within a few hours, 
              occasionally within a few days if we're dealing with a Google Ads crisis.
            </p>
            <button className="btn-outline">
              Ask Us Anything
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
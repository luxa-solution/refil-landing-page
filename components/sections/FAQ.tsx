import FaqItem from "./FaqItem";
import { faqs } from "./faqData";
import TopContactCard from "./TopContactCard";
import ScrollReveal from "../animations/ScrollReveal";

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 mt-8 sm:mt-12">
      <div className="flex flex-col md:flex-row md:items-stretch gap-12">
        
        {/* Top Contact Card  */}
        <div className="md:w-1/2 flex">
          <ScrollReveal direction="left" delay={0.1} className="w-full">
            <div className="w-full h-full">
              <TopContactCard 
                topText="FAQs"
                title="Got questions?"
                subtitle="We're here to help"
                titleColor="text-black"
                subtitleColor="text-blue-600"
              />
            </div>
          </ScrollReveal>
        </div>
        
        {/* FAQ List  */}
        <div className="md:w-1/2">
          <div className="space-y-6 h-full">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={faq.id} 
                direction="right" 
                delay={0.1 + (index * 0.05)}
                once={true}
              >
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  icon={faq.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}




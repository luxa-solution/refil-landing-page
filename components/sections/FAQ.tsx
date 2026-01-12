import FaqItem from "./FaqItem";
import { faqs } from "./faqData";
import TopContactCard from "./TopContactCard";

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 mt-8 sm:mt-12">
      {/* Flex layout for TopContactCard and FAQ */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-12">
        
        {/* Top Contact Card - Left side */}
        <div className="md:w-1/2">
          <TopContactCard 
            topText="FAQs"
            title="Got questions?"
            subtitle="We're here to help"
            titleColor="text-black"
            subtitleColor="text-blue-600"
          />
        </div>
        
        {/* FAQ List - Right side */}
        <div className="md:w-1/2">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}




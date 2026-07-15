"use client";

import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import { faqData } from "@/constants/dummyData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white rounded-2xl p-6 md:p-10 shadow-subtle border border-border/50">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-text mb-4">Frequently Asked Questions</h2>
          <p className="text-text-muted mb-6 leading-relaxed">
            Have questions about buying, selling, or safety on BechDal? We've got answers. If you can't find what you're looking for, our support team is always here to help.
          </p>
          <button className="px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-sm">
            Contact Support
          </button>
        </div>

        <div className="md:w-2/3">
          {faqData.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

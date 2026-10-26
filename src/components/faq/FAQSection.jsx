"use client";

import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import { faqData } from "@/constants/dummyData";
import { AnimatedSupportActionIcon, AnimatedActionArrow } from "@/components/common/ActionAnimatedIcons";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-2">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="md:w-1/3">
          <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight mb-3">Frequently Asked Questions</h2>
          <p className="text-text-muted dark:text-slate-300 mb-6 text-xs sm:text-sm leading-relaxed">
            Have questions about buying, selling, or safety on BechDal? We've got answers. If you can't find what you're looking for, our support team is always here to help.
          </p>
          <button className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-extrabold rounded-xl transition-all shadow-md shadow-blue-600/25 cursor-pointer group btn-shimmer hover:scale-105 active:scale-95">
            <AnimatedSupportActionIcon size={18} />
            <span>Contact Support</span>
            <AnimatedActionArrow size={14} />
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


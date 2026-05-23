"use client";

import React, { useState } from 'react';

const faqData = [
  { q: "Are these calculators completely free?", a: "Yes, all our financial calculators are 100% free to use with no hidden charges or required sign-ups." },
  { q: "Do you save my financial data?", a: "No. All calculations are performed directly in your browser. We do not store or track any of the numbers you input." },
  { q: "Are the tax calculators updated for the latest budget?", a: "Yes, our income tax and GST calculators are regularly updated to reflect the latest rules from the Union Budget of India." },
  { q: "Can I use these tools on my mobile phone?", a: "Absolutely. Our platform is mobile-first and optimized to work seamlessly even on slow network connections." },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i 
                  ? 'bg-slate-50 border-brand-200 shadow-sm' 
                  : 'bg-white border-slate-100 hover:border-brand-200'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(i)}
                aria-expanded={openIndex === i}
              >
                <h3 className={`font-bold text-lg transition-colors ${openIndex === i ? 'text-brand-900' : 'text-slate-800'}`}>
                  {faq.q}
                </h3>
                <svg 
                  className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-brand-600' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out px-6 ${
                  openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

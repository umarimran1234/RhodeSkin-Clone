"use client";
import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. The product must be in its original condition and packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping charges will apply.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number to monitor its progress.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "You can contact customer service via email at support@example.com or call us at +92 329 2299694.",
    },
    {
      question: "Did Are you Available For collaboration ?",
      answer: "Yes we are Available For Collaboration.",
    },
  ];

  return (
    <div className="w-full max-w-2xl my-32 mx-auto p-4">
      <h2 className="text-3xl uppercase font-bold text-center text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-left py-4 px-6 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-200 focus:outline-none flex justify-between items-center"
              onClick={() => togglePanel(index)}
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-xl text-gray-600 transition-transform duration-200 transform">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="py-4 px-6 bg-gray-50 text-gray-700 text-base rounded-b-lg">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

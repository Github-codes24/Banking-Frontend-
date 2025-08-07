import React from "react";

const faqData = [
  {
    question: "What is the purpose of this organization?",
    answer:
      "Our mission is to support and uplift the community through various social, educational, and welfare programs.",
  },
  {
    question: "How can I apply for a scheme?",
    answer:
      "Visit the Schemes page, select the relevant scheme, and follow the application instructions provided.",
  },
  {
    question: "Where can I find legal documents?",
    answer:
      "You can access our legal documents in the 'Legal' section on the main menu. Each document is available for viewing and download.",
  },
  {
    question: "How can I get involved or volunteer?",
    answer:
      "Reach out to us via the Contact Us page or send an email. We always welcome new volunteers!",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* <h2 className="text-2xl md:text-7xl font-bold text-center mb-8 text-yellow-600">
        Frequently Asked Questions
      </h2> */}
      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className=" p-5 rounded shadow">
            <h3 className="text-lg font-semibold bg-gray-200 p-2 text-red-700 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 p-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

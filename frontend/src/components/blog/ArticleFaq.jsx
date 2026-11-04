import React, { useState } from 'react';

export default function ArticleFaq({ faqs = [] }) {
  const [openIndices, setOpenIndices] = useState([0]); // Default first FAQ open

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="blog-faq-section" id="faq" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="blog-article-h2">
        Frequently Asked Questions
      </h2>
      <div className="blog-faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className={`blog-faq-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="blog-faq-question-btn"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
              >
                <span className="blog-faq-question-text">{faq.question}</span>
                <span className="blog-faq-toggle-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="blog-faq-answer-panel">
                  <p className="blog-faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}


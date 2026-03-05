import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-container">
        {/* Header – fixed, no focus needed */}
        <header className="privacy-header">
          <h1
           style={{fontFamily: 'Courier New',}}
           className="privacy-main-title" tabIndex="-1">Privacy Policy</h1>
          <div className="privacy-divider" aria-hidden="true"></div>
          <p style={{fontFamily: 'Courier New',}} className="privacy-intro" tabIndex="-1">
            At our e-commerce store, we are committed to protecting your privacy 
            and providing a safe and secure user experience.
          </p>
        </header>

        {/* Scrollable Content Area – keyboard navigable */}
        <div 
        style={{fontFamily: 'Courier New',}}
        className="privacy-content-grid" 
        role="feed" 
        ria-label="Privacy policy sections"
        >
          <Section 
            title="Information Collection"
            description="We collect information from you when you register on our site, place an order, or fill out a form. When ordering, you may be asked to enter your name, email address, or shipping details. However, you may visit our site anonymously at any time."
          />
          <Section 
            title="Information Usage"
            description="Any information we collect may be used to personalize your shopping experience, improve our website, and process transactions. Your information helps us better respond to your individual needs and customer service requests."
          />
          <Section 
            title="Cookies"
            description="We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic so that we can offer better tools in the future."
          />
          <Section 
            title="Data Security"
            description="We implement a variety of security measures, including 256-bit SSL encryption, to maintain the safety of your personal information when you enter, submit, or access your personal data during checkout."
          />
          <Section 
            title="Third-Party Disclosure"
            description="We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential."
          />
        </div>
      </div>

      <style>{`
        .privacy-wrapper {
          background-color: #282c34;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #fff;
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        .privacy-container {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
        }

        /* ===== HEADER – FIXED, NON-SCROLLING ===== */
        .privacy-header {
          text-align: center;
          margin-bottom: 2rem;
          flex-shrink: 0;
        }

        .privacy-main-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #fff;
          outline: none; /* removes default focus ring, custom style below */
        }

        .privacy-main-title:focus-visible {
          outline: 2px solid #60a5fa;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .privacy-divider {
          height: 4px;
          width: 64px;
          background-color: #6b7280;
          margin: 1.5rem auto;
          border-radius: 99px;
        }

        .privacy-intro {
          color: #9ca3af;
          font-size: 1rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .privacy-intro:focus-visible {
          outline: 2px solid #60a5fa;
          outline-offset: 4px;
          border-radius: 4px;
        }
        .privacy-content-grid {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-right: 6px;
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }

        /* Custom scrollbar – WebKit (Chrome, Safari, Edge) */
        .privacy-content-grid::-webkit-scrollbar {
          width: 6px;
        }
        .privacy-content-grid::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        .privacy-content-grid::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        .privacy-content-grid::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }

        /* ===== SECTION CARD – NO HOVER EFFECTS, FULLY ACCESSIBLE ===== */
        .policy-section {
          background-color: #1f2937;
          border: 1px solid #374151;
          padding: 2rem;
          border-radius: 16px;
          flex-shrink: 0;
          transition: none; /* no hover animations */
        }

        .policy-section:focus-visible {
          outline: 2px solid #60a5fa;
          outline-offset: 2px;
          border-color: transparent; /* avoids double border */
        }

        .policy-section h2 {
          color: #fff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .policy-section p {
          color: #d1d5db;
          line-height: 1.7;
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .privacy-container {
            padding: 1.5rem 1rem;
          }
          .policy-section {
            padding: 1.5rem;
          }
          .privacy-content-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .privacy-main-title {
            font-size: 1.8rem;
          }
          .privacy-intro {
            font-size: 1rem;
          }
          .policy-section h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

// Accessible Section Component
const Section = ({ title, description }) => {
  return (
    <article 
      className="policy-section"
      tabIndex="0"
      role="article"
      aria-labelledby={`section-${title.replace(/\s+/g, '-')}`}
    >
      <h2 id={`section-${title.replace(/\s+/g, '-')}`}>
        <span aria-hidden="true" style={{ fontSize: '1.5rem' }}>•</span> 
        {title}
      </h2>
      <p>{description}
      </p>
    </article>
  );
};

export default PrivacyPolicy;
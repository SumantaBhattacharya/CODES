import React from "react";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  // Responsive breakpoints
  const [width, setWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  const experienceData = [
    { label: "Products Delivered", value: "50K+" },
    { label: "Happy Customers", value: "25K+" },
    { label: "Years in E-commerce", value: "5+" },
    { label: "Brand Partners", value: "100+" },
  ];

  // ✅ FIXED: Responsive spacing - no forced full viewport height
  const getContainerPadding = () => {
    if (isMobile) return '2rem 1rem';
    if (isTablet) return '3rem 2rem';
    return '4rem 2rem'; // Reduced from 4rem 5rem
  };

  const getHeadingFontSize = () => {
    if (isMobile) return '2.5rem';   // Fixed rem units, not vw
    if (isTablet) return '3rem';
    return '3.5rem';
  };

  const getCardGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  return (
    <section
      id="about"
      style={{
        padding: getContainerPadding(),
        backgroundColor: '#282c34',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {/* Heading Section */}
        <div style={{ marginBottom: isMobile ? '2rem' : '2.5rem' }}>
          {/* Main Heading - About Us */}
          <h2
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: getHeadingFontSize(),
              marginBottom: isMobile ? '0.75rem' : '1rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: 0,
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
              wordBreak: 'break-word' // Ensures long words break
            }}
          >
            ABOUT US
          </h2>

          {/* Subheading */}
          <h3
            style={{
              marginBottom: isMobile ? '0.75rem' : '1rem',
              fontSize: isMobile ? '1.35rem' : isTablet ? '1.75rem' : '2rem',
              fontWeight: 'bold',
              color: '#ffffff',
              lineHeight: 1.3,

                                                    fontFamily: 'Oswald',

            }}
          >
            Your Premier Shopping Destination
          </h3>

          {/* Description */}
          <p
            style={{
              marginBottom: isMobile ? '1.5rem' : '2rem', // Reduced bottom margin
              maxWidth: isMobile ? '100%' : '800px',
              color: '#9ca3af',
              fontSize: isMobile ? '0.95rem' : '1.6rem',
              lineHeight: 1,

                                                    fontFamily: 'MyCustomFont-Regular',

            }}
          >
            With over 5 years of experience in offline stores, we've mastered the art of 
            delivering quality products and exceptional shopping experiences. Our 
            curated collection brings you the best products from around the world, 
            carefully selected to meet your everyday needs and desires.
          </p>

          {/* Stats Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: getCardGridColumns(),
              gap: isMobile ? '1rem' : '1.5rem',
              marginTop: isMobile ? '1rem' : '1.5rem'
            }}
          >
            {experienceData.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  padding: isMobile ? '1.25rem' : '1.75rem',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.borderColor = '#4b5563';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#374151';
                }}
              >
                <h4
                  style={{
                    marginBottom: '0.5rem',
                    fontSize: isMobile ? '1.75rem' : '2rem',
                    fontWeight: 'bold',
                    color: '#60a5fa',
                    fontFamily: 'Courier New, monospace'
                  }}
                >
                  {item.value}
                </h4>
                <p
                  style={{
                    color: '#9ca3af',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    margin: 0,
                    lineHeight: 1.5
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React from 'react';

const Contact = () => {
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

  // Responsive styles
  const getContainerPadding = () => {
    if (isMobile) return '3rem 1rem';
    if (isTablet) return '4rem 2rem';
    return '5rem 2rem';
  };

  const getHeadingFontSize = () => {
    if (isMobile) return '2rem';
    if (isTablet) return '2.5rem';
    return '3rem';
  };

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    return 'repeat(2, 1fr)';
  };

  const getMapHeight = () => {
    if (isMobile) return '300px';
    if (isTablet) return '400px';
    return '480px';
  };

  return (
    <section
      style={{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: getContainerPadding(),
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Header */}
        <div
          style={{
            maxWidth: isMobile ? '100%' : '768px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: getHeadingFontSize(),
              fontWeight: '800',
              color: '#ffffff',
              margin: '0 0 1rem 0',
              lineHeight: 1.2,
              textTransform: 'uppercase',
            }}
          >
            Visit Our Location
          </h2>
          <div
            style={{
              height: '4px',
              width: isMobile ? '60px' : '80px',
              borderRadius: '9999px',
              backgroundColor: '#60a5fa',
              margin: '1.5rem auto'
            }}
          />
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.6rem',
              color: '#9ca3af',
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: '600px',
              fontFamily: 'MyCustomFont-Regular',
            }}
          >
            Have a question, feedback, or just want to say hello? Feel free to reach out — We would love to hear from you!
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? '2rem' : '2.5rem',
            marginTop: isMobile ? '3rem' : '4rem'
          }}
        >
          {/* Map Container */}
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #374151',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
              height: getMapHeight(),
              width: '100%'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10391.090288453828!2d88.53716613174477!3d22.95739169470463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8bf5871a9e0d7%3A0x3cbdf3b9f157e355!2sMaulana%20Abul%20Kalam%20Azad%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1746467447327!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'brightness(0.9)' // Slightly darker to match theme
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps location of Maulana Abul Kalam Azad University of Technology"
              aria-label="Google Maps location of Maulana Abul Kalam Azad University of Technology"
            ></iframe>
          </div>

          {/* Contact Info Card */}
          <div
            style={{
              backgroundColor: '#1f2937',
              borderRadius: '12px',
              border: '1px solid #374151',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
              height: 'fit-content',
              width: '100%'
            }}
          >
            {/* Address Section */}
            <div
              style={{
                padding: isMobile ? '1.5rem' : '2rem',
                borderBottom: '1px solid #374151'
              }}
            >
              <h3
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 0.75rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ color: '#60a5fa', fontSize: '1.25rem' }}>📍</span>
                Our Address
              </h3>
              <p
                style={{
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  color: '#9ca3af',
                  margin: 0,
                  lineHeight: 1.6,
                  paddingLeft: '2rem',
                  fontFamily: 'Oswald',
                }}
              >
                Haringhata Farm, West Bengal 741249
              </p>
            </div>

            {/* Contact Section */}
            <div
              style={{
                padding: isMobile ? '1.5rem' : '2rem'
              }}
            >
              <h3
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: isMobile ? '1.1rem' : '1.25rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  margin: '0 0 0.75rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ color: '#60a5fa', fontSize: '1.25rem' }}>📞</span>
                Contact
              </h3>
              
              {/* Email */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  paddingLeft: '2rem'
                }}
              >
                <span style={{ color: '#9ca3af', minWidth: '60px', fontFamily: 'Oswald', }}>Email:</span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=team2025@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#60a5fa',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    transition: 'color 0.3s ease',
                    borderBottom: '1px dotted #4b5563',
                    wordBreak: 'break-word',
                    fontFamily: 'Oswald',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#93c5fd';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#60a5fa';
                  }}
                >
                  team2025@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingLeft: '2rem'
                }}
              >
                <span style={{ color: '#9ca3af', minWidth: '60px', fontFamily: 'Oswald', }}>Phone:</span>
                <a
                  href="tel:+918133862158"
                  style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.95rem' : '1rem',
                    transition: 'color 0.3s ease',
                    fontFamily: 'Oswald',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#d1d5db';
                  }}
                >
                  +91 8133862158
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
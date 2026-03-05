import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Responsive breakpoints
  const [width, setWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Responsive styles
  const getContainerPadding = () => {
    if (isMobile) return '1rem';
    if (isTablet) return '1.5rem';
    return '2rem';
  };

  const getHeadingSize = () => {
    if (isMobile) return '0.7rem';
    if (isTablet) return '0.75rem';
    return '0.75rem';
  };

  const getTextSize = () => {
    if (isMobile) return '0.85rem';
    if (isTablet) return '0.9rem';
    return '0.95rem';
  };

  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 0,
        paddingBottom: isMobile ? '1.5rem' : '2.5rem',
        marginTop: '1.75rem',
        backgroundColor: '#282C34', // Dark theme background
        color: '#f3f4f6',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Courier New',
      }}
    >
      {/* StretchyCurve Component - You need to import this separately */}
      
      {/* Scroll to Top Button */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: isMobile ? '1.5rem' : '2.5rem'
        }}
      >
        <button
          onClick={scrollToTop}
          style={{
            marginTop: "2rem",
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '48px' : '56px',
            height: isMobile ? '48px' : '56px',
            backgroundColor: '#111827',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            outline: 'none',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#111827';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
          }}
          aria-label="Scroll to top"
        >
          <svg
            style={{
              width: isMobile ? '16px' : '20px',
              height: isMobile ? '16px' : '20px'
            }}
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </svg>
        </button>
      </div>

      {/* Footer Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          margin: '0 auto',
          maxWidth: '1280px',
          paddingLeft: getContainerPadding(),
          paddingRight: getContainerPadding(),
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            margin: isMobile ? '-0.5rem' : '-1rem'
          }}
        >
          {/* Logo and Copyright */}
          <div
            style={{
              width: isMobile ? '100%' : isTablet ? '50%' : '41.666%',
              padding: isMobile ? '0.5rem' : '1rem',
              boxSizing: 'border-box'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontFamily: 'Courier New, monospace',
                  fontSize: isMobile ? '1.5rem' : '1.75rem',
                  fontWeight: 'bold',
                  color: '#ffffff', 
                  backgroundClip: 'text'
                }}
              >
                SCATCH
              </div>
              <div>
                <p
                  style={{
                    fontSize: isMobile ? '0.75rem' : '0.8rem',
                    color: '#9ca3af',
                    margin: 0,
                    lineHeight: 1.5
                  }}
                >
                  &copy; Copyright 2025. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div
            style={{
              width: isMobile ? '50%' : isTablet ? '50%' : '16.666%',
              padding: isMobile ? '0.5rem' : '1rem',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ height: '100%' }}>
              <h3
                style={{
                  letterSpacing: '1px',
                  marginBottom: isMobile ? '1rem' : '1.5rem',
                  fontSize: getHeadingSize(),
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                  margin: '0 0 1rem 0'
                }}
              >
                Company
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Features', 'About Us', 'Social Links', 'Customer Testimonials'].map((item, index) => (
                  <li key={index} style={{ marginBottom: index === 3 ? 0 : '0.75rem' }}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      style={{
                        position: 'relative',
                        fontSize: getTextSize(),
                        fontWeight: '500',
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        paddingBottom: '2px',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#f3f4f6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db';
                      }}
                    >
                      {item}
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          height: '2px',
                          width: '0%',
                          backgroundColor: '#9ca3af',
                          transition: 'width 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.width = '100%';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.width = '0%';
                        }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div
            style={{
              width: isMobile ? '50%' : isTablet ? '50%' : '16.666%',
              padding: isMobile ? '0.5rem' : '1rem',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ height: '100%' }}>
              <h3
                style={{
                  letterSpacing: '1px',
                  marginBottom: isMobile ? '1rem' : '1.5rem',
                  fontSize: getHeadingSize(),
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                  margin: '0 0 1rem 0'
                }}
              >
                Support
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, index) => (
                  <li key={index} style={{ marginBottom: index === 3 ? 0 : '0.75rem' }}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      style={{
                        position: 'relative',
                        fontSize: getTextSize(),
                        fontWeight: '500',
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        paddingBottom: '2px',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#f3f4f6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db';
                      }}
                    >
                      {item}
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          height: '2px',
                          width: '0%',
                          backgroundColor: '#9ca3af',
                          transition: 'width 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.width = '100%';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.width = '0%';
                        }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div
            style={{
              width: isMobile ? '100%' : isTablet ? '50%' : '25%',
              padding: isMobile ? '0.5rem' : '1rem',
              boxSizing: 'border-box',
              marginTop: isMobile ? '1rem' : 0
            }}
          >
            <div style={{ height: '100%' }}>
              <h3
                style={{
                  letterSpacing: '1px',
                  marginBottom: isMobile ? '1rem' : '1.5rem',
                  fontSize: getHeadingSize(),
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                  margin: '0 0 1rem 0'
                }}
              >
                Legals
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                  <li key={index} style={{ marginBottom: index === 2 ? 0 : '0.75rem' }}>
                    <Link
                      to={`/${item.toLowerCase().replace(/&/g, 'and').replace(/ /g, '-').replace(/--/g, '-')}`}
                      style={{
                        position: 'relative',
                        fontSize: getTextSize(),
                        fontWeight: '500',
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        paddingBottom: '2px',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#f3f4f6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db';
                      }}
                    >
                      {item}
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          height: '2px',
                          width: '0%',
                          backgroundColor: '#9ca3af',
                          transition: 'width 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.width = '100%';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.width = '0%';
                        }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
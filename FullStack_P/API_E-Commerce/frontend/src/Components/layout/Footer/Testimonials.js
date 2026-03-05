import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { 
      id: 1, 
      name: "Emma Rodriguez", 
      address: "Barcelona, Spain", 
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", 
      rating: 5, 
      review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!" 
    },
    { 
      id: 2, 
      name: "Liam Johnson", 
      address: "New York, USA", 
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", 
      rating: 4, 
      review: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!" 
    },
    { 
      id: 3, 
      name: "Sophia Lee", 
      address: "Seoul, South Korea", 
      image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", 
      rating: 5, 
      review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results." 
    }
  ];

  const Star = ({ filled }) => (
    <svg className="star-icon" fill={filled ? "#facc15" : "none"} stroke="#facc15" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
    </svg>
  );

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-container">
        {/* Header Section */}
        <div className="testimonials-header">
          <h1 className="testimonials-title">Customer Testimonials</h1>
          <div className="testimonials-underline"></div>
          <p style={{fontFamily: 'MyCustomFont-Regular'}} className="testimonials-subtitle">
            Hear what our users say about us. 
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-user-info">
                <img className="user-avatar" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p className="user-name">{testimonial.name}</p>
                  <p className="user-address">{testimonial.address}</p>
                </div>
              </div>
              
              <div className="star-rating">
                {Array(5).fill(0).map((_, index) => (
                  <Star key={index} filled={testimonial.rating > index} />
                ))}
              </div>
              
              <p className="review-text">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-wrapper {
          background-color: #282c34;
          padding: 80px 24px;
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .testimonials-title {
          font-family: 'Courier New';
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight: 700;
          margin: 0;
          text-transform: uppercase;
        }

        .testimonials-underline {
          height: 4px;
          width: 60px;
          background-color: #60a5fa;
          margin: 16px 0;
          border-radius: 99px;
        }

        .testimonials-subtitle {
          color: #9ca3af;
          max-width: 600px;
          line-height: 1.6;
          font-size: 1.7rem;
        }

        .testimonials-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
        }

        .testimonial-card {
          background-color: #1f2937;
          border: 1px solid #374151;
          padding: 32px;
          border-radius: 16px;
          width: 100%;
          max-width: 350px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: #4b5563;
        }

        .testimonial-user-info {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .user-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #60a5fa;
        }

        .user-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          color: #f3f4f6;
          font-family: 'Oswald'
        }

        .user-address {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-top: 2px;
          font-family: 'Oswald'
        }

        .star-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .star-icon {
          width: 18px;
          height: 18px;
        }

        .review-text {
          color: #d1d5db;
          font-family: 'Oswald';
          line-height: 1.7;
          font-style: italic;
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .testimonials-wrapper {
            padding: 60px 16px;
          }
          .testimonial-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
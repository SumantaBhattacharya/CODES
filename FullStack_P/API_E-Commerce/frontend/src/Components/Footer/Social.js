import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export const Social = () => {
    return (
        <section className="reveal-section">
            <FlipLink href="https://www.linkedin.com/">Linkedin</FlipLink>
            <FlipLink href="https://x.com/">Twitter</FlipLink>
            <FlipLink href="https://www.facebook.com/">Facebook</FlipLink>
            <FlipLink href="https://www.instagram.com/">Instagram</FlipLink>

            <style>{`
                .reveal-section {
                    position: relative;
                    min-height: 100vh;
                    display: grid;
                    place-content: center;
                    gap: 2rem;
                    background-color: #282c34; /* Matching your theme */
                    padding: 6rem 2rem;
                    overflow: hidden;
                }

                .flip-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .flip-link {
                    position: relative;
                    display: block;
                    white-space: nowrap;
                    text-transform: uppercase;
                    font-family:  'Courier New';
                    font-size: clamp(3rem, 8vw, 10rem); /* Responsive font size */
                    font-weight: 900;
                    line-height: 1;
                    color: white;
                    text-decoration: none;
                    overflow: hidden;
                    cursor: pointer;

                }

                /* Individual Letter Wrapper */
                .letter-span {
                    position: relative;
                    display: inline-block;
                    height: 1em;
                    overflow: hidden;
                    transition: transform 0.4s ease-in-out;
                }

                /* Primary Letter */
                .letter-primary {
                    display: block;
                    transform: translateY(0%);
                    transition: transform 0.4s ease-in-out;
                    transition-delay: inherit;
                }

                /* Secondary (Hidden) Letter */
                .letter-secondary {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: block;
                    transform: translateY(100%);
                    transition: transform 0.4s ease-in-out;
                    transition-delay: inherit;
                    color: #60a5fa; /* Blue accent on hover */
                }

                /* Hover States */
                .flip-link:hover .letter-primary {
                    transform: translateY(-100%);
                }

                .flip-link:hover .letter-secondary {
                    transform: translateY(0%);
                }

                /* QR Code Container CSS Animation */
                .qr-container {
                    position: absolute;
                    left: 105%;
                    top: 50%;
                    transform: translateY(-50%) scale(0.8);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 50;
                }

                .flip-container:hover .qr-container {
                    opacity: 1;
                    transform: translateY(-50%) scale(1);
                    pointer-events: auto;
                }

                .qr-card {
                    background: white;
                    padding: 12px;
                    border-radius: 12px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
                    text-align: center;
                }

                .qr-text {
                    color: #4b5563;
                    font-size: 0.75rem;
                    margin-top: 8px;
                    font-family: sans-serif;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    .qr-container {
                        display: none; /* Hide QR on small mobile to prevent layout breaking */
                    }
                }
            `}</style>
        </section>
    );
};

const FlipLink = ({ children, href }) => {
    const STAGGER = 0.05; // Delay increment per letter

    return (
        <div
        className="flip-container">
            <a href={href} className="flip-link">
                {children.split("").map((letter, index) => (
                    <span 
                        key={index} 
                        className="letter-span"
                        style={{ transitionDelay: `${index * STAGGER}s` }}
                    >
                        <span className="letter-primary">{letter}</span>
                        <span className="letter-secondary">{letter}</span>
                    </span>
                ))}
            </a>

            {/* QR Code functionality - Generation via Library, Animation via CSS */}
            <div className="qr-container">
                <div className="qr-card">
                    <QRCodeCanvas 
                        value={href} 
                        size={100}
                        level="H"
                        includeMargin={false}
                    />
                    <p className="qr-text">SCAN TO VISIT</p>
                </div>
            </div>
        </div>
    );
};

export default Social;
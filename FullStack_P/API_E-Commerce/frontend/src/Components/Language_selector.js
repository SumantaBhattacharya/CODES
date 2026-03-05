import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { 
    code: "en", 
    lang: "English" 
  },
  { 
    code: "fr", 
    lang: "French" 
  },
  { 
    code: "hi", 
    lang: "Hindi" 
  },
];

const Language_selector = ({ isMenuOpen }) => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Determine colors based on menu state
  const textColor = isMenuOpen ? "#000" : "#fff";
  const borderColor = isMenuOpen ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)";
  const arrowColor = isMenuOpen ? "black" : "white";

  return (
    <div className="select-wrapper">
      <select
        value={i18n.language}
        onChange={handleChange}
        className="custom-select"
        style={{
          color: textColor,
          borderColor: borderColor,
          // Custom SVG background to change arrow color dynamically
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${arrowColor}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`
        }}
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code} className="select-option">
            {lng.lang}
          </option>
        ))}
      </select>

      <style>{`
        .select-wrapper {
          display: flex;
          align-items: center;
          position: relative;
        }

        .custom-select {
          /* Fixed Height ensures Hindi doesn't stretch the box */
          height: 42px; 
          width: 125px;
          box-sizing: border-box;
          
          padding: 0 30px 0 16px; 
          background-color: transparent;
          border: 1px solid;
          border-radius: 50px;
          cursor: pointer;
          font-size: 15px; /* Slightly smaller to ensure fit */
          font-family: "Courier New", monospace;
          outline: none;
          appearance: none;
          transition: all 0.3s ease;
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 12px;
          display: flex;
          align-items: center;
        }

        .custom-select:hover {
          background-color: rgba(150, 150, 150, 0.1);
        }

        .select-option {
          background-color: #282c34;
          color: #fff;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default Language_selector;
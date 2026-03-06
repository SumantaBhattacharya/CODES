import React, { useState, useEffect, useCallback } from "react";
import SuggestionsList from "./SuggestionsList.js";
import debounce from "lodash/debounce"

const Autocomplete = ({
  onSelect, // This prop is used when user clicks a suggestion
  onSearch,
  staticData = [],
  datakey="", // as the default value otherwise, datakey is "title"
  placeholder = "Search products...", // This is a default parameter, if the placeholder is empty it will fall back to this text so the input isn't blank.
  customLoading,
  customStyles,
}) => {
  const [inputValue, setInputValue] = useState("");// the user input
  const [suggestions, setSuggestions] = useState([]);

  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const getSuggestions = (query) => { // query is the search text entered by the user.
    setError(null);
    setloading(true);// loading indicator while we process the search

    try {
      // array to store the filtered results
      let result = [];
      // Check if staticData exists and if the search query has at least 1 character
      if (staticData && query.length > 0) {
        // filter() is an array method that creates a new array with elements that pass a test
        result = staticData.filter((item) => { 
          // if datakey exits is "title", get item.title, If datakey doesn't exist, use the item itself 
          const val = datakey ? item[datakey] : item;// item is the whole product object of an array
          return val.toLowerCase().includes(query.toLowerCase());// Converts the item's value and search query to lowercase
          // .includes() - Checks if the lowercase value contains the lowercase query
          // Returns true if there's a match, false if not
          // If no matches, result will be an empty array []
        });
      }
      setSuggestions(result);
    } catch (err) {
      console.error("Failed to filter suggestions:", err);
      setSuggestions([])
    }finally{
        setloading(false);
    }
  }

  // Debouncing
  // it limits the execution of a function call and waits for a certain amount of time before executing it again.
  const debouncedGetSuggestions = useCallback((debounce(getSuggestions, 300)), [staticData, datakey]);// This prevents a search from happening on every single keystroke. It returns a new function that will only run getSuggestions after the user has stopped calling it for 300 milliseconds
  // useCallback a built-in hook that comes directly from the React library and is used to memoize functions. This means it returns the exact same function instance between component re-renders, unless one of its dependencies has changed.
  // here, it is to reset the debounce each time user re enter the input insite the textarea
  
  useEffect(()=>{
    debouncedGetSuggestions(inputValue);// debouncedGetSuggestions passes the inputValue as the query argument to getSuggestions.
    return () => debouncedGetSuggestions.cancel();// React runs the cleanup function from the previous render right before executing the effect for the next render.
  },[inputValue, debouncedGetSuggestions])

  const handleSuggestionsClick = (suggestion) => {// it put the suggestion name into the inputValue
    setInputValue(datakey ? suggestion[datakey] : suggestion)
    onSelect(suggestion); // navigate to suggestion path
    setSuggestions([]);// empting it
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(inputValue);
    setSuggestions([]);
  }

  const isSearchActive = isFocused || isHovered;

  return (
    <div style={{ position: "relative" }}>
      <form
        onSubmit={handleSubmit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={customStyles}
      >
        <button
          type="submit"
          style={{
            background: isSearchActive ? "#fff" : "transparent",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45px",
            height: "45px",
            borderRadius: "50px",
            cursor: "pointer",
            border: "none",
            fontSize: "20px",
            flexShrink: 0,
          }}
        >
          🔍
        </button>

        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            border: "none",
            background: "none",
            outline: "none",
            color: "#fff",
            fontSize: "16px",
            width: isSearchActive ? "calc(100% - 45px)" : "0",
            padding: isSearchActive ? "0 15px" : "0",
            opacity: isSearchActive ? 1 : 0,
            transition: "all 0.3s ease",
            fontFamily: "Courier New, monospace",
          }}
        />
      </form>

    {(suggestions.length > 0 || loading || error) && isFocused &&
      (<ul style={{
        position: "absolute",
        top: "110%",
        left: 0,
        right: 0,
        background: "#1f2937",
        border: "1px solid #374151",
        borderRadius: "8px",
        listStyle: "none",
        padding: "0.5rem",
        margin: 0,
        maxHeight: "300px",
        overflowY: "auto",
        zIndex: 10,
      }}>
      {loading && <p className="customLoading">{customLoading}</p>}
      {error && <p className="error">{error.message}</p>}
        <SuggestionsList
        datakey={datakey}
        highlight={inputValue}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionsClick} // passing the function referrence
        />
      </ul>)
    }

    </div>
  );
};

export default Autocomplete;

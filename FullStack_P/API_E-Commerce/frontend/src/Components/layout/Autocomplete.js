import React, { useState, useEffect, useCallback } from "react";
import SuggestionsList from "./SuggestionsList.js";
import debounce from "lodash/debounce";
import { CiSearch } from "react-icons/ci";

const Autocomplete = ({
  onSelect,
  onSearch,
  onSearchInputChange,
  suggestions = [], // now, the search results from the server
  datakey = "", // title is to be used for searching by default it be an empty string
  isLoading = false, placeholder = "Search products...", customLoading, customStyles,
}) => {

  const [inputValue, setInputValue] = useState("");
  // const [suggestions, setSuggestions] = useState([]); // now the suggestions comes from matching the search results from the query

  // error and loading now comes from react query
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    // setInputValue(event.target.value);
    const value = event.target.value;
    setInputValue(value);
    if (onSearchInputChange) {
      onSearchInputChange(value); // Call the parent function to update the searchValue state in Navbar
    }
  };

  /*const getSuggestions = (query) => {
    setError(null);
    setLoading(true);
    try {
      let result = [];
      if (staticData && query.length > 0) {
        result = staticData.filter((item) => {
          const val = datakey ? item[datakey] : item;
          return val.toLowerCase().includes(query.toLowerCase());
        });
      }
      setSuggestions(result);
    } catch (err) {
      console.error("Failed to filter suggestions:", err);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };*/

  // debouncedGetSuggestions is the debounced version of getSuggestions.
  /*const debouncedGetSuggestions = useCallback( // The useCallback hook is used to memoize a function in React. the function that only changes if one of the dependencies has changed.
    debounce(getSuggestions, 300),
    [staticData, datakey]
  );*/

  /*useEffect(() => {
    debouncedGetSuggestions(inputValue);
    return () => debouncedGetSuggestions.cancel();
  }, [inputValue, debouncedGetSuggestions]);*/

  const handleSuggestionsClick = (suggestion) => {
    setInputValue(datakey ? suggestion[datakey] : suggestion);
    onSelect(suggestion);
    // setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(inputValue);
    // setSuggestions([]);
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "450px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          background: "#1f2937",
          border: isFocused ? "1px solid #fff" : "1px solid #374151",
          borderRadius: "8px",
          padding: "0 12px",
          height: "44px",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          ...customStyles,
        }}
      >
        <button
          type="submit"
          style={{
            background: "none",
            border: "none",
            color: isFocused ? "#fff" : "#9ca3af",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "20px",
            padding: 0,
            marginRight: "10px",
            flexShrink: 0,
            transition: "color 0.2s ease",
          }}
        >
          <CiSearch />
        </button>

        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Tiny timeout allows suggestion item clicks to fire before container blurs
            setTimeout(() => setIsFocused(false), 200);
          }}
          style={{
            border: "none",
            background: "none",
            outline: "none",
            color: "#fff",
            fontSize: "15px",
            width: "100%",
            height: "100%",
            fontFamily: "inherit",
          }}
        />
      </form>

      {/* Suggestion Dropdown Panel */}
      {((suggestions.length > 0 && inputValue.trim().length > 0) || isLoading) && isFocused && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
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
            zIndex: 50,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          }}
        >
          {isLoading && <p className="customLoading" style={{ color: "#9ca3af", padding: "4px 8px" }}>{customLoading || "Loading..."}</p>}
          {/* {error && <p className="error" style={{ color: "#ef4444", padding: "4px 8px" }}>{error.message}</p>} */}
          <SuggestionsList
            datakey={datakey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionsClick}
          />
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

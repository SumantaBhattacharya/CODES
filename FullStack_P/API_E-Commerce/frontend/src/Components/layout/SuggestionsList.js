import React from 'react'

const SuggestionsList = (
  {
    datakey,
    highlight,
    suggestions=[],
    onSuggestionClick,
  }
) => {

  const getHighlightedText = (text, highlight) => {
    // if (!highlight) return text;
    const parts = text.split(new RegExp (`(${highlight})`, 'gi'))// REGULAR EXPRESSION, GLOBAL INCASE SENSITIVE
    // console.log(parts);
    return <span>
      {parts.map((part, index) => (
        <span>
          <b key={index} 
            style={{ fontWeight: part.toLowerCase() === highlight.toLowerCase() ? 'bold' : 'normal' }}
          >
            {part}</b>
        </span>
      ))}
    </span>;
  }

  return (
    <React.Fragment>
      {suggestions.map((suggestion, index) => {
        const currentSuggestions = datakey ? suggestion[datakey] : suggestion

        return ( // Changed div to li for semantic list
          <li
            key={index}
            onMouseDown={() => onSuggestionClick(suggestion)}
            style={{
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              color: '#d1d5db',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {getHighlightedText(currentSuggestions, highlight)}
          </li>
        )
      }
    )}
    </React.Fragment>
  )
}

export default SuggestionsList;

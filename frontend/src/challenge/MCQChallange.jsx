import "react";
import { useState, useEffect } from "react";

export function MCQChallange({ challange, showExplanation = false }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [shouldShowExplanation, setShouldShowExplanation] = useState(false);

  const options =
    typeof challange === "string"
      ? JSON.parse(challange.options)
      : challange.options;

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShouldShowExplanation(true);
  };

  const getOptionClass = (index) => {
    if (selectedOption === null) return "option";

    if (index === challange.correct_answer_id) {
      return "option correct";
    }

    if (selectedOption === index && index !== challange.correct_answer_id) {
      return "option incorrect";
    }
    return "option";
  };

  return (
    <div className="challange-display">
      <p>
        <strong>Difficulty</strong>: {challange.difficulty}
      </p>
      <p className="challange-title">{challange.title}</p>
      <div className="options">
        {options.map((option, index) => (
          <div
            className={getOptionClass(index)}
            key={index}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>

      {shouldShowExplanation && selectedOption !== null && (
        <div className="explanation">
          <h4>Explanation:</h4>
          <p>{challange.explanation}</p>
        </div>
      )}
    </div>
  );
}

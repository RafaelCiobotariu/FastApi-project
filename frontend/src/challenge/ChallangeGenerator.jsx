import "react";
import { useState, useEffect } from "react";
import { MCQChallange } from "./MCQChallange";

export function ChallengeGenerator() {
  const [challange, setChallange] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dificulty, setDifficulty] = useState("easy");
  const [quota, setQuota] = useState(5);

  const fetchQuota = async () => {};

  const generateChallange = async () => {};

  const getNextResetTime = () => {};

  return (
    <div className="challenge-container">
      <h2>Coding challange generator</h2>
      <div className="quota-display">
        <p>Challanges remaining today: {quota?.quota_remaining || 0}</p>
        {quota?.quota_remaining === 0 && <p>Next reset: {0}</p>}
      </div>

      <div className="difficulty-selector">
        <label htmlFor="difficulty">Select Difficulty</label>
        <select
          value={dificulty}
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
          disabled={isLoading}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button
        onClick={generateChallange}
        disabled={isLoading || quota?.quota_remaining === 0}
        className="generate-button"
      >
        {isLoading ? "Generating..." : "Generate Challange"}
      </button>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {challange && <MCQChallange challange={challange} />}
    </div>
  );
}

import "react";
import { useState, useEffect } from "react";
import { MCQChallange } from "../challenge/MCQChallange";

export function HistoryPanel() {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <div className="loading">Loading history...</div>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={fetchHistory}>Retry</button>
      </div>
    );
  }

  return (
    <div className="history-panel">
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No challange history</p>
      ) : (
        <div className="history-list">
          {history.map((challange) => {
            return (
              <MCQChallange
                challange={challange}
                key={challange.id}
                showExplanation
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

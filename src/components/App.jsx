import "./App.css";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";
import { useEffect, useState } from "react";

const App = () => {
  const [rates, setRates] = useState(() => {
    try {
      const ratesFromLocalStorage = localStorage.getItem("rates");
      if (ratesFromLocalStorage !== null) {
        return JSON.parse(ratesFromLocalStorage);
      }
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    } catch (e) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const updateFeedback = (feedbackType) => {
    setRates({
      ...rates,
      [feedbackType]: rates[feedbackType] + 1,
    });
  };

  const ratesReset = () => {
    setRates({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("rates", JSON.stringify(rates));
  }, [rates]);

  const totalFeedback = rates.good + rates.neutral + rates.bad;
  const positive = totalFeedback
    ? Math.round(((rates.good + rates.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={ratesReset}
        hasFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          {...rates}
          onTotal={totalFeedback}
          onPositive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;

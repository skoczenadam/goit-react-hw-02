import "./App.css";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import { useState } from "react";

const App = () => {
  const [rates, setRates] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    e.target.value;
    setRates({
      ...rates,
      bad: rates.bad + 1,
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback(event)} />
      <Feedback {...rates} />
    </>
  );
};

export default App;

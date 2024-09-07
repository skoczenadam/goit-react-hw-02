import css from "../components/Feedback.module.css";

const Feedback = ({ good, neutral, bad, onTotal, onPositive }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {onTotal}</p>
      <p>Positive: {onPositive}%</p>
    </div>
  );
};

export default Feedback;

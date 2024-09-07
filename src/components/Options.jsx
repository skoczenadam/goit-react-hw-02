import css from "../components/Options.module.css";

const Options = ({ onUpdate, onReset, hasFeedback }) => {
  return (
    <div className={css.buttons}>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {hasFeedback ? <button onClick={onReset}>Reset</button> : <></>}
    </div>
  );
};

export default Options;

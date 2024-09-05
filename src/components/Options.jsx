const Options = ({ onUpdate, onReset, onNotZero }) => {
  return (
    <div>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {onNotZero ? <button onClick={onReset}>Reset</button> : <></>}
    </div>
  );
};

export default Options;

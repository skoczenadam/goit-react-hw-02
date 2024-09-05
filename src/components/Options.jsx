const Options = ({ onUpdate }) => {
  console.log(onUpdate);

  return (
    <div>
      <button onClick={onUpdate}>Good</button>
      <button onClick={onUpdate}>Neutral</button>
      <button onClick={onUpdate}>Bad</button>
    </div>
  );
};

export default Options;

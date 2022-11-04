const Counter = ({ handleChange, count }) => {
  return (
    <div>
      <h1>counter:{count}</h1>
      <button onclick={() => handleChange(1)}>ADD</button>
      <button onclick={() => handleChange(-1)}>SUB</button>
    </div>
  );
};

export default Counter;

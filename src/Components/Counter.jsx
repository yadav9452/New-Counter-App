const Counter = ({ handleChange, count }) => {
  return (
    <div>
      <h1>counter:{count}</h1>
      <button onclick={() => handleChange()}>ADD</button>
      <button onclick={() => handleChange()}>SUB</button>
    </div>
  );
};

export default Counter;

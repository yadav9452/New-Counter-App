import "./styles.css";
import Counter from "./Components/Counter";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleChange = (pre) => {
    setCount(pre + count);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter handleChange={handleChange} count={count} />
    </div>
  );
}

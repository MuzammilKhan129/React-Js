import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date("21 june 2017");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </div>
  );
}

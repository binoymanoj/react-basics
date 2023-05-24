import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <br />

      <button onClick={() => setCount(count - 1)}>Minus</button>
      <br />
      <button onClick={() => setCount(count * 2)}>Double the value</button>
      <br />
      <button onClick={() => setCount(count / 2)}>divide by 2</button>
    </div>
  );
}

export default Counter;

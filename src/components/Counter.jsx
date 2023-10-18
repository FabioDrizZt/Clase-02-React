import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const emojis = ["😊", "🚀", "🎉", "❤️", "🌟"];

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>Contador con emojis</h1>
      <p>{emojis[count % emojis.length]}</p>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}

import { useState } from 'react'

export default function Counter({init}) {
  const [count, setCount] = useState(init)
  const emojis = ['😊', '🚀', '🎉', '❤️', '🌟']

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div>
      <h1>Contador con emojis</h1>
      <p>{emojis[count % emojis.length]}</p>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}

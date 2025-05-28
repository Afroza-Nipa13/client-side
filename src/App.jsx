import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>{count}</h2>
      </div>
     
      <h1>Add to Cart Confusion</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add to cart
        </button>
        <button onClick={() => {
          if (count > 0) {
            setCount((count) => count - 1)
          }
        }}>
          remove from cart
        </button>
        
      </div>
     
    </>
  )
}

export default App

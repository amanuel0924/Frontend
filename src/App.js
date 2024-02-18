import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [fr, setFr] = useState()
  const [cl, setCl] = useState()

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1)
          }}
        >
          decrease
        </button>
        <p>
          {count}
          is {count > 0 ? `posetive` : count === 0 ? "nutral" : "negative"}{" "}
          number
        </p>
      </div>

      <div>
        <h1>Temprature converter</h1>
        <div>
          <label>
            Celsius:
            <input
              type="number"
              placeholder="enter celisus number"
              value={cl}
              onChange={(e) => {
                setCl(e.target.value)
                setFr((+e.target.value * 9) / 5 + 32)
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Farahnite:
            <input
              type="number"
              placeholder="enter celisus number"
              value={fr}
              onChange={(e) => {
                setFr(e.target.value)
                setCl(+e.target.value - (32 * 5) / 9)
              }}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default App

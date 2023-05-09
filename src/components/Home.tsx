import Navbar from './framework/Navbar'
import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default Home

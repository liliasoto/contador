import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const key= setInterval(()=>{
      setCount(count=>count+1)
    },1000);

    return () => {
      clearInterval(key);
    };
  }, [])
  
  return (
    <>
      <div>
        <p>
          {count} seconds have passed!!
        </p>
      </div>
    </>
  )
}

export default App
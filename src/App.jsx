import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [defaultValue,setDefaultValue] = useState(10);
  const stop = useRef();
  useEffect(()=>{
    console.log('timer start');
    const stopper = setInterval(()=>{
      setDefaultValue(previous=>previous-1);
    },1000);
    return ()=>clearInterval(stopper);
  },[]);

  useEffect(()=>{
    fetch("http://localhost:5173/indexo.json")
    .then(response=>response.json())
    .then(json=>console.log(json))
  },[]);
   
  function resetHandler(){
    clearInterval(stop.current);
    // setDefaultValue(10);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <progress value={defaultValue} max="10" min="1"></progress>
      <button onClick={resetHandler}>Click</button>
    </>
  )
}

export default App

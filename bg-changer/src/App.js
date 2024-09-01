import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("blanchedAlmond")
  return (
    <>
      <div className='duration-200 w-full h-screen' style={{ backgroundColor:  color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center bg-cyan-100 text-pretty text-white shadow-lg px-3 py-3 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}>Violet</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>black</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>white</button>
            <button className='outline-none px-4 py-1 rounded-full text-while shadow-lg' style={{ backgroundColor: "maroon" }} onClick={() => setColor("maroon")}>Maroon</button>

          </div>
        </div>
      </div>
    </>
  )
}


export default App;

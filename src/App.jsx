import React, { useState } from "react";
import './index.css'
import  Card from './Card'
function App() {
  let myObj= {
    name: "riya banik",
    age: 20
  }
  const [count, setCount] = useState("")
  const test = (value) => {
    setCount(value)
  }
  return (
    <>
      <h1 className='bg-black text-white'>Hello {count}</h1>
      <Card someObj={myObj}/>
      <p>{`the value is ${count}`}</p>
      <button onClick={() => { test("bt1") }}>increment</button>
      <button onClick={() => { test("bt2") }}>decrement</button>
      <button onClick={() => { test("bt3") }}>button3</button>
      <button onClick={() => { test("bt4") }}>button4</button>
      <button onClick={() => { test("bt5") }}>button5</button>
    </>
  );
}


export default App;

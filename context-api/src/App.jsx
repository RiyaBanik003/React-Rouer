import './App.css';
import Navbar from './nav/Navbar';
import TextForm from './nav/TextForm';
import React from 'react';
function App() {

  return (
    <>
    <Navbar/>
    <div className="container py-5"><TextForm heading="Word Analyzer"/></div>
    
    </>
  );
}

export default App;

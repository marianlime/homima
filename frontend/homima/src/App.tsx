import React from 'react';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <div className="p-5">
      <div className="bg-linear-to-r from-indigo-600 to-teal-600">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white">
            Welcome to this shit side project for now
          </h2>
        </div>
      </div>

     
      <input
        type="text"
        id="standard-basic"
        placeholder="Insert your video link here"
        className="m-1 border-b border-gray-400 focus:outline-none p-1 w-full"
        />   
    </div>
  </>
  );
}

export default App;

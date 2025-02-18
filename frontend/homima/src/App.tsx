import React from 'react';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5">
      {/* "Card" */}
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

     
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600" onClick={() => count + 1}>
        Watch! ({count})
      </button>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const listing = axios.get("/api/listing");

/* useEffect(() => {  // access the database for data to build the interviewers and appointments for each day
  const listing = axios.get("/api/listing");

},[]); */

console.log(listing);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

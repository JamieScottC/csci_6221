import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuPD-XQDbOarnndkzu3VaMtSWBXqdrJQM",
  authDomain: "csci6221-e2df0.firebaseapp.com",
  projectId: "csci6221-e2df0",
  storageBucket: "csci6221-e2df0.appspot.com",
  messagingSenderId: "679358757872",
  appId: "1:679358757872:web:7203c64f2ca5023c0c7b35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

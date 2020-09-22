import React from "react";

import "./App.css";
import Home from "./components/Upload";



function App() {
  return (
    <div className="App">
      <header className="App-header">GridFs image upload React app</header>
      <p>upload files and see them</p>

      <Home/>
    </div>
  );
}

export default App;

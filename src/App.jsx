import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const getDate = () => {
    axios.get("https://picsum.photos/v2/list?page=2&limit=100");
  };
  return (
    <div className="bg-black text-white h-screen ">
      <h1>Hello World!</h1>
      <button className="bg-blue-500 p-2 rounded p-2 text-white font-bold" onClick={getDate}>
        Get Date
      </button>
    </div>
  );
};

export default App;

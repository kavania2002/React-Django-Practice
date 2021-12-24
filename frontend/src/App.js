import React, { useEffect } from "react";
import People from "./People";

function App() {
    return (
      <div className="text-center">
        <h1 className="font-black text-5xl p-10">About Us</h1>
        <div className="grid grid-cols-3 justify-items-center">
          <People />
        </div>
      </div>
    )
}

export default App;

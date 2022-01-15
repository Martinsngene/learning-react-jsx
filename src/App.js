import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");

  const changeName = (name) => {
    setName(name);
  };
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => changeName("Sopulu Ngene")}
      >
        click me 1
      </button>
      <Card
        name={name}
        title={"DevOps Engineer"}
        changeMe={() => changeName("Martins Ngene")}
      />
    </div>
  );
}

export default App;

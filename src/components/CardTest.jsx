import React, { useState } from "react";
import Card from "./Card";

function CardTest() {
  const [name, setName] = useState("");

  const [showCard, setShowCard] = useState(true);

  const changeName = (name) => setName(name);

  const onInputChangeHandler = (event) => setName(event.target.value);

  const toggleCard = () => setShowCard(!showCard);

  const cardMarkUp = showCard && (
    <Card
      name={name}
      title={"DevOps Engineer"}
      changeMe={() => changeName("Martins Ngene")}
      onInputChange={onInputChangeHandler}
    />
  );

  return (
    <div>
      <button className="btn btn-success" onClick={toggleCard}>
        show or hide
      </button>
      {cardMarkUp}
    </div>
  );
}
export default CardTest;

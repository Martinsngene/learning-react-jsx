import React, { useState } from "react";
import Card from "./Card";

function CardTestTwo() {
  const [name, setName] = useState("");

  const [showCard, setShowCard] = useState(true);

  const [cards, setCards] = useState([
    {
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Chuyun Lian",
      title: "Cloud Engineer",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/38.jpg",
      name: "Catherine Naguyo",
      title: "Network Engineer",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      name: "Stella Lyne",
      title: "Fullstack Engineer",
    },
  ]);

  const changeName = (name) => setName(name);

  //   const onInputChangeHandler = (event) => setName(event.target.value);

  const toggleCard = () => setShowCard(!showCard);

  const cardMarkUp = showCard && (
    <Card
      name={name}
      title={"DevOps Engineer"}
      changeMe={() => changeName("Martins Ngene")}
      //   onInputChange={onInputChangeHandler}
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
export default CardTestTwo;

import React, { useState } from "react";
import Card from "./Card";

function CardTestTwo() {
  const [showCard, setShowCard] = useState(true);

  const [cards, setCards] = useState([
    {
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Chuyun Lian",
      title: "Cloud Engineer",
      id: "1abec",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/38.jpg",
      name: "Catherine Naguyo",
      title: "Network Engineer",
      id: "2abec",
    },

    {
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      name: "Stella Lyne",
      title: "Fullstack Engineer",
      id: "3abec",
    },
  ]);

  const toggleCard = () => setShowCard(!showCard);

  const deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...cards];
    cardsCopy.splice(cardIndex, 1);
    setCards(cardsCopy);
  };

  const cardMarkUp =
    showCard &&
    cards.map((item, index) => (
      <Card
        key={item.id}
        name={item.name}
        title={item.title}
        src={item.avatar}
        onDelete={() => deleteCardHandler(index)}
      />
    ));

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

import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
import img9 from "../assets/images/img-9.jpg"
import img2 from "../assets/images/img-2.jpg"
import img3 from "../assets/images/img-3.jpg"
import img4 from "../assets/images/img-4.jpg"
import img8 from "../assets/images/img-8.jpg"


const Cards = () => {
  return (
    <div className="cards">
      <h1>Check This Epic Destination </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src={img9}
              text="Explore The Hidden Waterfall In The Amazon Jungle "
              lable="Adventure"
              path="/services"
              
            />
            <Carditem
              src={img2}
              text="Travel through the Islands of Bali in a Private Cruise "
              lable="Luxury"
              path="/services"
              
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters "
              lable="Mystry"
              path="/services"
              
            />
            <Carditem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains "
              lable="Adventure"
              path="/services"
              
            />
            <Carditem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour "
              lable="Adrenaline"
              path="/services"
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

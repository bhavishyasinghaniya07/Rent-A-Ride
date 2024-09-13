import React from "react";
import "../Cars/Card.css";
import car1 from "../../assets/logo.jpg";
import { cars } from "../../Context/CarData";

const Card = () => {
  return (
    <>
      <div className="container-car">
        {cars.map((car, id) => (
          <div className="card" key={id}>
            <img src={car.img} alt="" />
            <h3>{car.name}</h3>
            <p>Rs {car.rent} Per/Hour</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;

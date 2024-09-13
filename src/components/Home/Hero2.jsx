import React from "react";
import pic1 from "../../assets/sanchi.webp";
import pic2 from "../../assets/tiger.webp";
import pic3 from "../../assets/mahakal.webp";
import pic4 from "../../assets/water.webp";
import "./Hero2.css";

const Hero2 = () => {
  return (
    <>
      <div className="head head2">
        <h1>Travel The Most Popular Detinations In MP</h1>
      </div>
      <div className="container-travel">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <div className="head2">
        <h1>How We Operate</h1>
      </div>
      <div className="para">
        <p>
          At Rent A Ride, we specialize in offering convenient and flexible car
          rental solutions tailored to your needs. Whether you're planning a
          short trip or need a vehicle for an extended period, we provide a wide
          range of cars that you can rent without a driver. Our process is
          simple and hassle-free: choose the car that best suits your needs,
          complete the booking online or in person, and you're ready to hit the
          road. We pride ourselves on delivering well-maintained vehicles,
          competitive pricing, and outstanding customer service to ensure you
          have the best driving experience possible. No matter where your
          journey takes you, we've got the perfect car to get you there.
        </p>
      </div>
    </>
  );
};

export default Hero2;

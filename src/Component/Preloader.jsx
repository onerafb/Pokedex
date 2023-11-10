import React from "react";
import gifone from "../assets/gifone.gif"
const Preloader = () => {
  return (
    <div className="preloader">
    <img src={gifone} alt="" className="preloader-gif" />
    <h3>Loading..</h3>
    </div>
  );
};

export default Preloader;

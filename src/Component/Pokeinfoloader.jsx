import React from "react";
import gifone from "../assets/gifone.gif";
const Pokeinfoloader = () => {
  return (
    <div className="pokeinfoloader">
      <img src={gifone} alt="" className="pokeinfoloader-img"/>
      <h3 className="pokeinfoloader-text">Loading...</h3>
    </div>
  );
};

export default Pokeinfoloader;

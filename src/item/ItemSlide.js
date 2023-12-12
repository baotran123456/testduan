import React from "react";

export default function ItemSlide(props) {
  <div className="home-main-slide-item" key={props.index}>
    <div className="home-main-slide-item-title">
      <p style={{ fontSize: "80px", color: "white" }}>{props.title}</p>
    </div>
    <img src={props.image} alt="" className="home-main-slide-item-image" />
  </div>;
}

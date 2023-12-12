// material
import { Checkbox, TableRow, TableCell, Typography } from "@mui/material";

import axios from "axios";
import ItemImgCart from "./ItemImgCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemImgOder from "./ItemImgOder";

export default function ItemOder(props) {
  const ip = "http://localhost:8080";

  let navga = useNavigate();

  const [Display, setDisplay] = useState("none");
  const [colo, setColo] = useState("black");

  useEffect(() => {
    if (props.SaleSP != 0) {
      setDisplay("block");
      setColo("red");
    } else {
      setDisplay("none");
      setColo("black");
    }

  });

  let TongMoney = new Intl.NumberFormat("it-IT").format(props.GiaCX * props.SoLuongSP);

  let GiaCX = new Intl.NumberFormat("it-IT").format(props.GiaCX);

  return (
    <div className="order-main-left-list-card">
      <div className="order_main_card_imgtitle">
        {props.Image.map((element, index) => {
          return (
            <ItemImgOder
              key={index}
              files={element}
            />
          )

        })}
        <p className="order-main-left-list-card-content-name">
          {props.NameSP}
        </p>
      </div>
      <p className="order-main-left-list-card-content-price">
        {GiaCX} VND
      </p>

      <div className="oder-main-left-list-card-function-button-num">
        <p>số lượng: {props.SoLuongSP}</p>
      </div>

      <div className="order_main_card_tt">
        <p>{TongMoney} VND</p>
      </div>
    </div>
  );
}

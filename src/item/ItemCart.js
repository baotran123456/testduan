// material
import { Checkbox, TableRow, TableCell, Typography } from "@mui/material";

import axios from "axios";
import ItemImgCart from "./ItemImgCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ItemCart(props) {
  const ip = "http://localhost:8080";

  let navga = useNavigate();
  const [Display, setDisplay] = useState("none");
  useEffect(() => {
    if (props.SaleSP != 0) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  });

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    props.setSelected(newSelected);
    if (event.target.checked == true) {
      props.setMoney(props.money + (props.GiaCX * props.SoLuongSP));
    }
    if (event.target.checked == false) {
      if (props.money >= GiaCX) {
        props.setMoney(props.money - (props.GiaCX * props.SoLuongSP));
      } else {
      }
    }
  };

  let selected = props.selected;


  let GiaCX = new Intl.NumberFormat("it-IT").format(props.GiaCX);

  let TongMoney = new Intl.NumberFormat("it-IT").format(props.GiaCX * props.SoLuongSP);

  let TongGiaGoc = new Intl.NumberFormat("it-IT").format(props.GiaBanSP * props.SoLuongSP);

  const onClick = () => {
    var getDsSP = localStorage.getItem("DanhSachSP");
    var dbDsSP = JSON.parse(getDsSP);

    if (getDsSP == null) {
    }
    if (getDsSP != null) {
      let item = dbDsSP.find((c) => c.idImg == props.idImg);
      if (item) {
        navga(`/Detail/${props._id}`);
        var ItemSP = {
          test: props.Image,
          _id: props._id,
          idImg: props.idImg,
          NameSP: props.NameSP,
          GiaCX: props.GiaCX,
          GiaBanSP: props.GiaBanSP,
          SoLuongSP: item.SoLuongSP,
          SaleSP: props.SaleSP,
          TrangThaiSP: props.TrangThaiSP,
          LoaiSP: props.LoaiSP,
          ChiTietSP: props.ChiTietSP,
        };
        localStorage.setItem("ItemSP", JSON.stringify(ItemSP));
      }

    }
  };

  return (
    <TableRow
      hover
      key={props._id}
      tabIndex={-1}
      role="checkbox"
      selected={props.isItemSelected}
      aria-checked={props.isItemSelected}
    >
      <TableCell style={{ padding: "10px 5px 5px 13px" }} padding="checkbox">
        <Checkbox
          checked={props.isItemSelected}
          onChange={(event) => handleClick(event, props._id)}
        />
      </TableCell>

      <TableCell
        style={{ width: "120px", height: "140px", padding: "10px 5px 5px 5px" }}
        className="image_sp"
        component="th"
        scope="row"
      >
        <Typography>
          {props.Image.map((element, index) => {
            return <ItemImgCart key={index} files={element} />;
          })}
        </Typography>
      </TableCell>

      <TableCell
        style={{ padding: "0 15px" }}
        className="name_sp"
        component="th"
        scope="row"
      >
        <div className="info_item_sp">
          <div className="name_cart_item">{props.NameSP}</div>
          <div className="type_cart_item">Loại: {props.LoaiSP}</div>
          <div className="money_cart_list">
            <div className="money_cart_item">
              {TongMoney} VND
            </div>
            <div className="moneygg_cart_item" style={{ display: Display }}>
              {TongGiaGoc} VND
            </div>
          </div>
          <div className="num_cart_item">Số lượng: {props.SoLuongSP}</div>
        </div>
      </TableCell>

      <TableCell
        style={{ width: "10px", padding: "10px 5px 5px 5px" }}
      ></TableCell>

      <TableCell
        style={{ width: "10px", padding: "10px 5px 5px 5px" }}
        component="th"
        scope="row"
      ></TableCell>

      <TableCell
        style={{ width: "80px", padding: "0", position: "relative" }}
        className="num_sp"
        component="th"
        scope="row"
      >
        <button className="cart_button" onClick={onClick}>
          <span className="span_cart_button">
            Xem <br />
            Thêm
          </span>
        </button>
      </TableCell>
    </TableRow>
  );
}

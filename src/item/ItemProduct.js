import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import ItemImg from "./ItemImg";
function ItemProduct(props) {

  const ip = "http://localhost:8080"

  let navga = useNavigate();

  const [multipleFiles, setMultipleFiles] = useState([]);

  const [Display, setDisplay] = useState("none");


  useEffect(() => {
    if (props.SaleSP != 0) {
      setDisplay("block")
    } else {
      setDisplay("none")
    }

    axios.get(ip + `/getImg/${props.idImg}`)
      .then((response) => {
        setMultipleFiles(response.data);
      })

  }, [])


  // format giam gia
  let giaBan = props.GiaBanSP - (props.GiaBanSP * props.SaleSP / 100)
  let resust = Math.round(giaBan)
  let GiaCX = new Intl.NumberFormat('it-IT').format(resust);



  const onClick = () => {
    const test = multipleFiles.map((vl) => vl.files)
    navga(`/Detail/${props._id}`);
    var ItemSP = {
      test: test,
      _id: props._id,
      idImg: props.idImg,
      NameSP: props.NameSP,
      GiaCX: resust,
      GiaBanSP: props.GiaBanSP,
      SoLuongSP: props.SoLuongSP,
      SaleSP: props.SaleSP,
      TrangThaiSP: props.TrangThaiSP,
      LoaiSP: props.LoaiSP,
      ChiTietSP: props.ChiTietSP,
    }
    localStorage.setItem('ItemSP', JSON.stringify(ItemSP));

    console.log(props.NameSP);

  };
  return (
    <>
      <div
        onClick={onClick}
        key={props._id}
        className="product-main-list-content-card"
      >
        <div className="reduce" style={{ display: Display }}>
          <div className="reduce_background">
            <div className="reduce_content">
              <p>{props.SaleSP}%</p>
            </div>
          </div>
        </div>
        {multipleFiles.map((element, index) => {

          return (
            <ItemImg
              key={index}
              files={element.files}
            />
          )
        })}

        <div className="content_card">
          <p className="product-main-list-content-card-name">{props.NameSP}</p>
          <div className="product_price">
            <p className="product-main-list-content-card-price">
              {GiaCX} VND
            </p>
            <p className="price_reduced" style={{ display: Display }}>{props.GiaBanSP} VND</p>
          </div>
          <p className="product-main-list-content-card-number">
            Số lượng: {props.SoLuongSP}
          </p>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;

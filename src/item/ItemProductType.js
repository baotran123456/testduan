
import ItemProduct from "../item/ItemProduct";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function ItemProductType(props) {

  const ip = "http://localhost:8080"

  const [dsLoaiSP, setDsLoaiSP] = useState([])


  const getDataSPTheoLoai = () => {
    axios.get(ip + `/getData/${props.NameLoaiSP}`)
      .then((response) => {
        setDsLoaiSP(response.data);
      })
  }

  useEffect(() => {
    getDataSPTheoLoai()
  }, [])

  return (
    <>
      <div className="product_container">
        <div className="product-main-list-title">
          <p>{props.NameLoaiSP}</p>
        </div>
        <div className="product-main-list-content">
          {dsLoaiSP.map((props, index) => {
            if (props.TrangThaiSP == "Hoạt động") {
              
              return (
                <ItemProduct
                  key={props._id}
                  _id={props._id}
                  idImg={props.idImg}
                  NameSP={props.NameSP}
                  GiaBanSP={props.GiaBanSP}
                  SoLuongSP={props.SoLuongSP}
                  SaleSP={props.SaleSP}
                  TrangThaiSP={props.TrangThaiSP}
                  LoaiSP={props.LoaiSP}
                  ChiTietSP={props.ChiTietSP}
                />
                
              )
            } else if (props.TrangThaiSP == "Không hoạt động") {

            }
          })}
        </div>
      </div>
    </>
  );
}

export default ItemProductType;

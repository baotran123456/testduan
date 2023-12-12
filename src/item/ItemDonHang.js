import { useEffect, useState } from "react";
import ChiTietDonHang from "./ChiTietDonHang";
import Moment from "moment";
import Aleft_Delete from "../dialog/Aleft_Delete";

export default function ItemDonHang(props) {
  const ip = "http://localhost:8080";

  const [disPlay, setDisPlay] = useState("block");
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    if (props.TrangThaiDH == "Chờ xác nhận") {
      setDisPlay("block");
    } else if (props.TrangThaiDH == "Đã xác nhận") {
      setDisPlay("block");
    } else {
      setDisPlay("none");
    }
    if (props.TrangThaiDH == "Chờ xác nhận") {
      setColor("rgb(183, 33, 54)");
      setBackground("rgba(255, 72, 66, 0.16)");
    } else if (props.TrangThaiDH == "Đã xác nhận") {
      setColor("#031b88");
      setBackground("#aab6fb");
    } else if (props.TrangThaiDH == "Đang giao hàng") {
      setColor("#29788a");
      setBackground("#a5cad2");
    } else if (props.TrangThaiDH == "Đã tới kho hàng") {
      setColor("#9e825e");
      setBackground("#ecd59f");
    } else if (props.TrangThaiDH == "Giao hàng thành công") {
      setColor("rgb(34, 154, 22)");
      setBackground("rgba(84, 214, 44, 0.16)");
    }
  });

  // dialog chi tiet
  const [openCT, setOpenCT] = useState(false);
  const handleClickItemChiTiet = () => {
    setOpenCT(true);
  };

  // delete Don hang
  //           axios.delete(ip + `/DeleteDonHang/${_id}`);

  const formatDate = Moment(props.DateDH).format("DD/MM/yyyy");

  let GiaCX = new Intl.NumberFormat("it-IT").format(props.SumMoney);

  const [openAdd, setOpenAdd] = useState(false);
  const handleClickItemAdd = () => {
    setOpenAdd(true);
  };

  return (
    <>
      <Aleft_Delete open={openAdd} setOpen={setOpenAdd} _id={props._id} setChxDelete={props.setChxDelete}/>
      <ChiTietDonHang open={openCT} setOpen={setOpenCT} DsSP={props.DsSP} />
      <div className="card_itemDH">
        <div className="itemDH_ID">
          <p>{props._id}</p>
        </div>
        <p
          className="itemDH_TrangThai"
          style={{ background: background, color: color }}
        >
          {props.TrangThaiDH}
        </p>

        <div className="itemDH_ThanhTien">
          <p>{GiaCX} VND</p>
        </div>

        <div className="itemDH_Date">
          <p>{formatDate}</p>
        </div>
        <div className="itemDH_bth">
          <button onClick={handleClickItemChiTiet} className="btn_XemSP">
            Xem sản phẩm
          </button>
          <button
            onClick={handleClickItemAdd}
            style={{ display: disPlay }}
            className="btn_HuyDH"
          >
            Hủy đơn hàng
          </button>
        </div>
      </div>
    </>
  );
}

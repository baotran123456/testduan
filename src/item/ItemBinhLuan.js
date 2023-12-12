import { useEffect, useState } from "react";
import useImg from "../assets/userImg3.png";
import Moment from 'moment';
import axios from "axios";
export default function ItemBinhLuan(props) {

  const ip = "http://localhost:8080";
  const deleteBL = () => {
    axios.delete(ip + `/DeleteBinhLuan/${props._id}`);
    props.getBinhLuan();
  };

  var Infomation = localStorage.getItem("Infomation");
  var db = JSON.parse(Infomation);
  const [Check, setCheck] = useState("none");
  const formatDate = Moment(props.Date).format('DD/MM/YYYY')
  useEffect(() => {
    if (Infomation == null) {
      setCheck("none");
    } else if (Infomation != null) {
      if (db.data.TKUser == props.NameUser) {
        setCheck("block");
      } else {
        setCheck("none");
      }
    }
    props.getBinhLuan();
  }, []);
  return (
    <>
    <div className="boder_comment"></div>
        <div style={{ display: "flex",flexDirection: "row", alignItems: 'center', position: "relative" }}>
      <div>
        <div className="img_comment">
          <img src={useImg}></img>
        </div>
      </div>
      <div>
        <div className="name_comment_detail">
          <div className="name_user_detail">{props.NameUser}</div>
          <div className="date_comment_detail">{formatDate}</div>
        </div>
          <div>{props.NoiDung}</div>
      </div>
      <div onClick={deleteBL} style={{ display: Check }} className="btn_delete_comment">
            <button>Xóa</button>
          </div>
    </div>
    </>
  );
}

import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import yeuthich from "../assets/favorite.png";
import yeuthich1 from "../assets/favorite1.png";
import truck from "../assets/delivery-truck.png";
import money from "../assets/salary.png";
import hour from "../assets/hour.png";
import shieldImg from "../assets/shields.png";
import useImg from "../assets/userImg3.png";
import ScrollToTop from "./ScrollToTopbtn";
import BeatLoader from "react-spinners/BeatLoader";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import { TokenSharp, VerifiedSharp } from "@mui/icons-material";
import "../css/Detail.css";
import Footer from "./footer";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";
import Itemhinh from "../item/Itemhinh";
import oke from "../assets/oke.png";
import Moment from "moment";
import axios from "axios";
import ItemBinhLuan from "../item/ItemBinhLuan";
import Error from "./Error";
import Detail_in from "./Detail_in";
const Detail = () => {

  let { _id } = useParams();

  const ip = "http://localhost:8080";

  const [idImg, setIdImg] = useState();
  const [chxNab, setchxNab] = useState(false);
  useEffect(() => {
    var ItemSP = localStorage.getItem("ItemSP");
    var data = JSON.parse(ItemSP);
    if (ItemSP == null) {
    } else if (ItemSP != null) {
      if(_id == data._id){
        setchxNab(true);
      } else {
        setchxNab(false);
      }
    }
  }, []);

  return (
    <>
      {chxNab ? <Detail_in/> : <Error />}
    </>
  );
};

export default Detail;

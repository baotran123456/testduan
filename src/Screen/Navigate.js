import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Grid from "@mui/material/Unstable_Grid2";
import '../css/Navigate.css'
import ItemNavi from '../item/ItemNavi'
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTopbtn";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";

import hashtag1 from "../assets/hastag1.jpg"
import hashtag2 from "../assets/hastag3.jpg"
import hashtag3 from "../assets/hastag2.jpg"
import hashtag4 from "../assets/hastag4.jpg"
import hashtag5 from "../assets/hastag5.jpg"
import hashtag6 from "../assets/hastag6.jpg"

function Navigate() {


  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser")

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true)
    }
  },)

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, []);

  return (
    <div className="home">
      <ScrollToTop />
      {
        loading ? <div className='loading'>
          <BeatLoader
            color={'#2065d1'}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          /></div>
          :
          <div>

            {chxNab ? <NavbarIn /> : <Navbar />}
            <div className="title">
              <div className="title_header">
                <h2>Tin tức & Ưu đãi</h2>
              </div>
              <div className="title_list">
                <Grid container spacing={0} className="title_list_view">
                  {ItemNavi.map((uudai, index) =>
                    <div key={index} className="title_list_cottom">
                      <div className="title_list_cottom_img">
                        <img src={uudai.image} />
                      </div>
                      <div className="title_list_cottom--content">
                        <h2>{uudai.title}</h2>
                        <p>{uudai.synopsis.substring(0, 230) + " [...]"}</p>


                        <Link className="button-24" to={{ pathname: `/News/${uudai.id} ` }} state={uudai}  >Xem Thêm</Link>

                      </div>
                    </div>

                  )}
                </Grid>

              </div>
            </div>
            <div className="hashtag">
              <div className="hashtag_header">

                <div className="hashtag_header--list">
                  <p>HAGHTAG #VUGIAGROUP ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN TRANG CỦA CHÚNG TÔI</p>
                  <div className="hashtag_header--list--img">
                    <div className="hagtag_img">
                      <img src={hashtag1}></img>
                    </div>
                    <div className="hagtag_img">
                      <img src={hashtag2}></img>
                    </div>
                    <div className="hagtag_img">
                      <img src={hashtag3}></img>
                    </div>
                    <div className="hagtag_img">
                      <img src={hashtag4}></img>
                    </div>
                    <div className="hagtag_img">
                      <img src={hashtag5}></img>
                    </div>
                    <div className="hagtag_img">
                      <img src={hashtag6}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
      }
    </div>
  )
}

export default Navigate;
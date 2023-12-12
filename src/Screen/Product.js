import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AssignmentReturnSharp,
  DiamondSharp,
  GppGoodSharp,
  SupportAgentSharp,
  TokenSharp,
  ViewListSharp,
} from "@mui/icons-material";
import $ from "jquery";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import Navbar from "./Navbar";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "../css/Product.css";
import Footer from "./footer";
import { useEffect, useState } from "react";

import axios from "axios";

import ItemProductType from "../item/ItemProductType";
import NavbarIn from "./NavbarIn";
import userImg from "../assets/people.png";
import { clear } from "@testing-library/user-event/dist/clear";
import ItemLoaiSP from "../item/ItemLoaiSP";
import imgbanner from "../assets/imgbannerproduct.jpg"
import imgbanner2 from "../assets/imgbannerpr.jpg"
import imgbanner3 from "../assets/imgbannerpr1.jpg"

const Product = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const ip = "http://localhost:8080";

  const [dsLoaiSP, setDsLoaiSP] = useState([]);

  const [danhsachSP, setDanhsachSP] = useState([]);

  const [onClickLoaiSP, setOnClickLoaiSP] = useState("all");

  const getDataLoaiSP = () => {
    axios.get(ip + "/getDataLoaiSP").then((response) => {
      setDsLoaiSP(response.data);
    });
  };

  let navgate = useNavigate();

  const [prevActive, setPrevActive] = useState(0);

  function addPre(vl) {
    if (vl == 0) {
      setPrevActive(1);
    } else if (vl == 1) {
      setPrevActive(2);
    } else if (vl == 2) {
      setPrevActive(0);
    }
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataLoaiSP();
    // getData()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    var data = JSON.parse(getUser);

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }

    if (prevActive == 0) {
      $(".abcd").ready(function () {
        $(`.slide_1`).addClass("active");
        $(`.control_1`).addClass("active");
        $(`.slide_2`).removeClass("active");
        $(`.control_2`).removeClass("active");
        $(`.slide_3`).removeClass("active");
        $(`.control_3`).removeClass("active");
        setTimeout(function () {
          addPre(0);
        }, 4000);
      });
    } else if (prevActive == 1) {
      $(".abcd").ready(function () {
        $(`.slide_2`).addClass("active");
        $(`.control_2`).addClass("active");
        $(`.slide_1`).removeClass("active");
        $(`.control_1`).removeClass("active");
        $(`.slide_3`).removeClass("active");
        $(`.control_3`).removeClass("active");
        setTimeout(function () {
          addPre(1);
        }, 4000);
      });
    } else if (prevActive == 2) {
      $(".abcd").ready(function () {
        $(`.slide_3`).addClass("active");
        $(`.control_3`).addClass("active");
        $(`.slide_1`).removeClass("active");
        $(`.control_1`).removeClass("active");
        $(`.slide_2`).removeClass("active");
        $(`.control_2`).removeClass("active");
        setTimeout(function () {
          addPre(2);
        }, 4000);
      });
    }
  });

  const onclickItem = () => {
    navgate("/Personal");
  };

  const onclickCart = () => {
    navgate("/Cart");
  };

  const onClickVanChuyen = () => {
    navgate("/vanchuyen");
  };

  const onClickDoiTra = () => {
    navgate("/doitra");
  };

  const onClickBaoMat = () => {
    navgate("/baomat");
  };

  const onClickThanhToan = () => {
    navgate("/thanhtoan");
  };

  const [TKUser, setTKUser] = useState();

  useEffect(() => {
    var getInfomation = localStorage.getItem("Infomation");
    var db = JSON.parse(getInfomation);
    if (getInfomation == null) {
      setTKUser("Người dùng");
    }

    if (getInfomation != null) {
      setTKUser(db.data.TKUser);
    }
  });

  return (
    <div className="product">
      <ScrollToTop />
      {loading ? (
        <div className="loading">
          <BeatLoader
            color={"#36d7b7"}
            loading={loading}
            size={15}
            margin={5}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div>
          {chxNab ? <NavbarIn /> : <Navbar />}

          {/* main */}
          <div className="product-main">
            <div className="product_container">
              <div className="product-main-top">
                <button className="abcd" style={{ display: "none" }}></button>
                <div className="product-main-top-left">
                  <div className="product-main-top-left-title">
                    <ViewListSharp />
                    <p>Danh sách sản phẩm</p>
                  </div>
                  <div className="product-main-top-left-content">
                    <div className="list_type" onClick={() => setOnClickLoaiSP("all")}>
                      <p>Tất cả loại sản phẩm</p>
                    </div>
                    <div className="line_type"></div>
                    {dsLoaiSP.map((item, index) => {
                      if (item.TrangThaiLoaiSP == "Hoạt động") {
                        return (
                          <ItemLoaiSP
                            key={index}
                            _id={item._id}
                            NameLoaiSP={item.NameLoaiSP}
                            onClickLoaiSP={onClickLoaiSP}
                            setOnClickLoaiSP={setOnClickLoaiSP}
                          />
                        );
                      } else if (item.TrangThaiLoaiSP == "Không hoạt động") {
                      }
                    })}
                  </div>
                </div>

                <div className="product-main-top-center">
                  <div className="product-main-top-center-slide">
                    <div className="slider-container">
                      <h1>
                        Hình ảnh các mẫu
                        <br />
                        sản phẩm được ưa chuộng
                      </h1>
                      <div className="slide_product slide_1">
                        <img src={imgbanner} />
                      </div>

                      <div className="slide_product slide_2">
                        <img src={imgbanner2} />
                      </div>

                      <div className="slide_product slide_3">
                        <img src={imgbanner3} />
                      </div>

                      <div className="controls-container">
                        <div className="control control_1"></div>
                        <div className="control control_2"></div>
                        <div className="control control_3"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-main-top-right">
                  <div className="product-main-top-right-user">
                    <div className="img_user_product">
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          sx={{ width: 60, height: 60 }}
                          alt="Remy Sharp"
                          src={userImg}
                        />
                      </StyledBadge>
                    </div>
                    <div className="product-main-top-right-user-information">
                      <div className="product-main-top-right-user-information-title">
                        <p>
                          Xin chào! <br /> {TKUser}
                        </p>
                      </div>
                      <div className="product-main-top-right-user-information-button">
                        <button
                          onClick={onclickItem}
                          className="product-main-top-right-user-information-button-left"
                        >
                          Tài khoản
                        </button>
                        <button
                          onClick={onclickCart}
                          className="product-main-top-right-user-information-button-right"
                        >
                          Đơn hàng
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product_service">
                    <div className="product-main-top-right-title">
                      <p>Chính sách dịch vụ khách hàng</p>
                    </div>
                    <div className="product-main-top-right-service">
                      <div className="product-main-top-right-service-top">
                        <div
                          onClick={onClickThanhToan}
                          className="product-main-top-right-service-top-left"
                        >
                          <GppGoodSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Bảo mật thanh toán</p>
                        </div>
                        <div
                          onClick={onClickVanChuyen}
                          className="product-main-top-right-service-top-right"
                        >
                          <TokenSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo giao hàng</p>
                        </div>
                      </div>
                      <div className="product-main-top-right-service-bottom">
                        <div
                          onClick={onClickBaoMat}
                          className="product-main-top-right-service-bottom-left"
                        >
                          <DiamondSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo chất lượng</p>
                        </div>
                        <div
                          onClick={onClickDoiTra}
                          className="product-main-top-right-service-bottom-right"
                        >
                          <AssignmentReturnSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Trả lại không lý do</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-main-top_new">
                <button className="abcd" style={{ display: "none" }}></button>
                <div className="product-main-top-center">
                  <div className="product-main-top-center-slide">
                    <div className="slider-container">
                      <h1>
                        Hình ảnh các mẫu
                        <br />
                        sản phẩm được ưa chuộng
                      </h1>
                      <div className="slide_product slide_1">
                        <img src={imgbanner} />
                      </div>

                      <div className="slide_product slide_2">
                        <img src={imgbanner2} />
                      </div>

                      <div className="slide_product slide_3">
                        <img src={imgbanner3} />
                      </div>

                      <div className="controls-container">
                        <div className="control control_1"></div>
                        <div className="control control_2"></div>
                        <div className="control control_3"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-main-top-left">
                  <div className="product-main-top-left-title">
                    <ViewListSharp />
                    <p>Danh sách sản phẩm</p>
                  </div>
                  <div className="product-main-top-left-content">
                    <div className="list_type">
                      <p>Tất cả loại sản phẩm</p>
                    </div>
                    {dsLoaiSP.map((item, index) => {
                      if (item.TrangThaiLoaiSP == "Hoạt động") {
                        return (
                          <div key={index}>
                            <div className="list_type">
                              <p>{item.NameLoaiSP.substring(0, 28)}</p>
                            </div>
                            <div className="line_type"></div>
                          </div>
                        );
                      } else if (item.TrangThaiLoaiSP == "Không hoạt động") {
                      }
                    })}
                  </div>
                </div>

                <div className="product-main-top-right">
                  <div className="product-main-top-right-user">
                    <div className="img_user_product">
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <Avatar
                          sx={{ width: "100%", height: 60 }}
                          alt="Remy Sharp"
                          src={userImg}
                        />
                      </StyledBadge>
                    </div>
                    <div className="product-main-top-right-user-information">
                      <div className="product-main-top-right-user-information-title">
                        <p>
                          Xin chào! <br /> {TKUser}
                        </p>
                      </div>
                      <div className="product-main-top-right-user-information-button">
                        <button
                          onClick={onclickItem}
                          className="product-main-top-right-user-information-button-left"
                        >
                          Tài khoản
                        </button>
                        <button
                          onClick={onclickCart}
                          className="product-main-top-right-user-information-button-right"
                        >
                          Đơn hàng
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product_service">
                    <div className="product-main-top-right-title">
                      <p>Chính sách dịch vụ khách hàng</p>
                    </div>
                    <div className="product-main-top-right-service">
                      <div className="product-main-top-right-service-top">
                        <div
                          onClick={onClickThanhToan}
                          className="product-main-top-right-service-top-left"
                        >
                          <GppGoodSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Bảo mật thanh toán</p>
                        </div>
                        <div
                          onClick={onClickVanChuyen}
                          className="product-main-top-right-service-top-right"
                        >
                          <TokenSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo giao hàng</p>
                        </div>
                      </div>
                      <div className="product-main-top-right-service-bottom">
                        <div
                          onClick={onClickBaoMat}
                          className="product-main-top-right-service-bottom-left"
                        >
                          <DiamondSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Đảm bảo chất lượng</p>
                        </div>
                        <div
                          onClick={onClickDoiTra}
                          className="product-main-top-right-service-bottom-right"
                        >
                          <AssignmentReturnSharp
                            style={{ fontSize: "13px", paddingRight: "1px" }}
                          />
                          <p>Trả lại không lý do</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-main-list">
              {dsLoaiSP.map((item, index) => {
                if (item.TrangThaiLoaiSP == "Hoạt động") {
                  if (onClickLoaiSP == item.NameLoaiSP) {
                    return (
                      <div>
                        <ItemProductType key={index} NameLoaiSP={item.NameLoaiSP} />
                        <div>
                          
                        </div>
                      </div>


                    );
                  } else if (onClickLoaiSP == "all") {
                    return (
                      <ItemProductType key={index} NameLoaiSP={item.NameLoaiSP} />
                    );
                  }
                } else if (item.TrangThaiLoaiSP == "Không hoạt động") {
                }
              })}
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Product;

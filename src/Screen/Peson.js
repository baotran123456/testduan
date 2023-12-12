import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Shop2Icon from "@mui/icons-material/Shop2";
import LogoutIcon from "@mui/icons-material/Logout";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import $ from "jquery";
import "../css/Personal.css";
import Footer from "./footer";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToT from "./ScrollToTopbtn";
import icon_user from "../assets/icon_user.png";
import camera from "../assets/camera.png";
import truck from "../assets/truck.png";
import love from "../assets/love.png";
import Popup from "reactjs-popup";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";
import ItemOder from "../item/ItemOder";
import imgUser from "../assets/people.png";
import axios from "axios";
import ItemDonHang from "../item/ItemDonHang";
import cartt from "../assets/carts.png";
import menuu from "../assets/responsitenavbar.png";
import Pagination from "../bosung/Pagination";
import Address from "../dialog/Address";
import Aleft_Delete from "../dialog/Aleft_Delete";

const img =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

// online
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

function openForm() {
  document.getElementById("openForm_pass").style.display = "block";
}

function Peson() {
  const ip = "http://localhost:8080";

  // Phân Trang
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  // Get current posts

  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
  }, []);

  const data = [
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc Dao cắt dầu Đầu kéo tông đơ",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
    {
      name: "Kéo cắt tóc điện USB Sạc tóc Cắt tóc",
      Loai: "B",
      Ship: "CN",
      price: "368.374",
      image: img,
    },
  ];

  let navgate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [chxDelete, setChxDelete] = useState(false);
  const [chxNab, setChxNab] = useState(false);

  const [TKUser, setTKUser] = useState();
  const [EmailUser, setEmailUser] = useState();

  const [DsDonHang, setDsDonHang] = useState([]);

  var getInfomation = localStorage.getItem("Infomation");
  var db = JSON.parse(getInfomation);

  useEffect(() => {
    if (chxDelete == true) {
      getDataDonHang();
    } else {
    }
  });

  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    var data = JSON.parse(getUser);

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }

    if (getInfomation == null) {
    }

    if (getInfomation != null) {
      setTKUser(db.data.TKUser);
      setEmailUser(db.data.EmailUser);
    }

    getDataDonHang();
  }, []);

  // delete Don hang
  //           axios.delete(ip + `/DeleteDonHang/${_id}`);

  const getDataDonHang = () => {
    axios.get(ip + `/getDonHangUser/${db.data._id}`).then((response) => {
      setDsDonHang(response.data);
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = DsDonHang.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [cart, setCart] = useState([]);

  const getCart = () => {
    var storage = localStorage.getItem("GioHang");
    var carrt = JSON.parse(storage);
    if (storage != null) {
      setCart(carrt);
    } else {
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const [opNav, setOpNav] = useState(0);

  function myFunction() {
    if (opNav == 0) {
      setOpNav(1);
      $(".fersonal_container_hover__content").addClass(
        "fersonal_container_hover__content_new"
      );
    } else if (opNav == 1) {
      setOpNav(0);
      $(".fersonal_container_hover__content").removeClass(
        "fersonal_container_hover__content_new"
      );
    }
  }

  function myOnclickTT() {
    toogleTab(1);
    setOpNav(0);
    $(".fersonal_container_hover__content").removeClass(
      "fersonal_container_hover__content_new"
    );
  }

  function myOnclickGH() {
    toogleTab(4);
    setOpNav(0);
    $(".fersonal_container_hover__content").removeClass(
      "fersonal_container_hover__content_new"
    );
  }

  function myOnclickDDH() {
    toogleTab(5);
    setOpNav(0);
    $(".fersonal_container_hover__content").removeClass(
      "fersonal_container_hover__content_new"
    );
  }
  const navigate = useNavigate();

  function myOnclickDMK() {
    navigate("/ForgotPass");
  }

  const onClickLogout = () => {
    localStorage.removeItem("UserUser");
    localStorage.removeItem("token");
    localStorage.removeItem("Infomation");
    localStorage.removeItem("GioHang");
    window.location.href = "/login";
    navgate("/login");
  };

  return (
    <div className="fersonal">
      <ScrollToT />
      <div>
        {chxNab ? <NavbarIn /> : <Navbar />}
        <div style={{ marginTop: "70px" }}></div>
        <div className="fersonal_container">
          <div className="fersonal_container__left">
            <div className="fersonal_container__left__userName">
              <div className="fersonal_container_left__info">
                <h3>Tài khoản của tôi</h3>
                <div
                  className="fersonal_container__left__info__tabs"
                  onClick={() => toogleTab(1)}
                >
                  <PermContactCalendarIcon
                    sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                  />
                  Thông tin
                </div>
                {/* <div
                  className="fersonal_container__left__info__tabs"
                  onClick={() => toogleTab(2)}
                >
                  <LocalMallIcon
                    sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                  />{" "}
                  Sản phẩm ưa thích
                </div> */}

                <div
                  className="fersonal_container__left__info__tabs"
                  onClick={() => toogleTab(4)}
                >
                  <Shop2Icon
                    sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                  />
                  Giỏ hàng của tôi
                </div>
                <div
                  className="fersonal_container__left__info__tabs"
                  onClick={() => toogleTab(5)}
                >
                  <AutorenewIcon
                    sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                  />
                  Đơn hàng
                </div>
                <div
                  className="fersonal_container__left__info__tabs"
                  onClick={onClickLogout}
                >
                  <LogoutIcon
                    sx={{ marginRight: "2%", color: "#ffa726", fontSize: 20 }}
                  />
                  Đăng xuất
                </div>
              </div>
            </div>
          </div>
          <div className="fersonal_container-right">
            <div className="fersonal_container-right--header">
              <div className="backgroud_avatar">
                <div className="fersonal_container-right--header--avatar">
                  <div className="fersonal_container-right--header--avatar--user">
                    <img className="avatar_use" src={imgUser}></img>
                    <img className="avatar_camera" src={camera}></img>
                  </div>
                  <div className="fersonal_container-right--header--avatar--name">
                    <h3>{TKUser}</h3>
                  </div>
                </div>
              </div>
              <div className="fersonal_container-right--header--content">
                <div className="content" onClick={() => toogleTab(1)}>
                  <div className="content_icon">
                    <img src={icon_user} />
                  </div>
                  <p>Thông tin</p>
                </div>
                <div className="content" onClick={() => toogleTab(4)}>
                  <div className="content_icon">
                    <img src={cartt} />
                  </div>
                  <p>Giỏ hàng</p>
                </div>
                <div className="content" onClick={() => toogleTab(5)}>
                  <div className="content_icon">
                    <img src={truck} />
                  </div>
                  <p>Đơn hàng</p>
                </div>
                <div className="fersonal_container__hover">
                  <div className="fersonal_container__hover__userName">
                    <div
                      onClick={myFunction}
                      className="fersonal_container_hover__info"
                    >
                      <img onClick={myFunction} src={menuu} />
                      <h3 onClick={myFunction}>Menu</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fersonal_container_hover__content">
              <div
                className="fersonal_container__hover__info__tabs"
                onClick={myOnclickTT}
              >
                <PermContactCalendarIcon
                  sx={{
                    marginRight: "2%",
                    color: "#ffa726",
                    fontSize: 20,
                  }}
                />
                Thông tin
              </div>
              {/* <div
                        style={{ display: "none" }}
                        className="fersonal_container__hover__info__tabs"
                        onClick={() => toogleTab(2)}
                      >
                        <LocalMallIcon
                          sx={{
                            marginRight: "2%",
                            color: "#ffa726",
                            fontSize: 20,
                          }}
                        />{" "}
                        Sản phẩm ưa thích
                      </div> */}

              <div
                className="fersonal_container__hover__info__tabs"
                onClick={myOnclickGH}
              >
                <Shop2Icon
                  sx={{
                    marginRight: "2%",
                    color: "#ffa726",
                    fontSize: 20,
                  }}
                />
                Giỏ hàng của tôi
              </div>
              <div
                className="fersonal_container__hover__info__tabs"
                onClick={myOnclickDDH}
              >
                <AutorenewIcon
                  sx={{
                    marginRight: "2%",
                    color: "#ffa726",
                    fontSize: 20,
                  }}
                />
                Đơn hàng
              </div>
              <div
                className="fersonal_container__hover__info__tabs"
                onClick={onClickLogout}
              >
                <LogoutIcon
                  sx={{
                    marginRight: "2%",
                    color: "#ffa726",
                    fontSize: 20,
                  }}
                />
                Đăng xuất
              </div>
            </div>
            <div className="fersonal_container-right--fooder--content">
              {/* -------------------Thông tin cá nhân------------------------ */}
              <div
                className={toggleState === 1 ? "contentt active-content" : "ac"}
              >
                <div className="fersonal_container-right--fooder--content--active">
                  <div>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      <Avatar alt="Remy Sharp" src={imgUser} />
                    </StyledBadge>
                    <p className="fersonal_right__content_name">
                      {/* {useName} */}
                    </p>
                  </div>
                  <div className="fersonal_container-right--fooder--content--active--edit">
                    <div className="fersonal_container-right--fooder--content--active--edit--name">
                      <div className="fersonal_container-right--fooder--content--active--edit--name--p">
                        <p className="name--login">Tên Đăng Nhập</p>
                        <p className="name--people">{TKUser}</p>
                      </div>
                      <div className="fersonal_container-right--fooder--content--active--edit--name--button">
                        <button className="button-29">Chỉnh Sửa</button>
                      </div>
                    </div>
                    <div className="fersonal_container-right--fooder--content--active--edit--name">
                      <div className="fersonal_container-right--fooder--content--active--edit--name--p">
                        <p className="name--login">Email</p>
                        <p className="name--people">
                          {EmailUser} <a href="#1">Hiển thị</a>
                        </p>
                      </div>
                      <div className="fersonal_container-right--fooder--content--active--edit--name--button">
                        <button className="button-29">Chỉnh Sửa</button>
                      </div>
                    </div>
                  </div>
                  <div className="fersonal_container-right--fooder--content--active--password">
                    <h3>Mật Khẩu</h3>
                    <button onClick={myOnclickDMK}>Đổi mật khẩu</button>
                  </div>
                </div>
              </div>
              {/* ----------------------------sản phẩn ưa thích--------------------- */}
              <div
                className={toggleState === 2 ? "contentt active-content" : "ac"}
              >
                <p>Sản phẩm ưa thích</p>
              </div>
              {/* ----------------------------giỏ hàng----------------------------- */}
              <div
                className={toggleState === 4 ? "contentt active-content" : "ac"}
              >
                <div className="active-content-title">
                  <p className="active-content-title-content">Giỏ hàng </p>
                </div>
                <div className="order-main-left-list">
                  <div className="order_main_card_imgtitle">
                    <p className="order-main-left-list-card-content-name">
                      Sản phẩm
                    </p>
                  </div>
                  <p
                    style={{ fontWeight: "bold" }}
                    className="order-main-left-list-card-content-price"
                  >
                    đơn giá
                  </p>

                  <div
                    style={{ fontWeight: "bold" }}
                    className="oder-main-left-list-card-function-button-num"
                  >
                    số lượng
                  </div>

                  <div className="order_main_card_tt">thành tiền</div>
                </div>
                <div className="active-content-list">
                  {cart.map((item, index) => (
                    <ItemOder
                      key={item._id}
                      _id={item._id}
                      idUser={item.idUser}
                      Image={item.Image}
                      idImg={item.idImg}
                      NameSP={item.NameSP}
                      GiaCX={item.GiaCX}
                      GiaBanSP={item.GiaBanSP}
                      SoLuongSP={item.SoLuongSP}
                      SaleSP={item.SaleSP}
                      TrangThaiSP={item.TrangThaiSP}
                      LoaiSP={item.LoaiSP}
                      ChiTietSP={item.ChiTietSP}
                    />
                  ))}
                </div>
              </div>
              <div
                className={toggleState === 5 ? "contentt active-content" : "ac"}
              >
                <div className="active-content-title">
                  <p className="active-content-title-content">
                    Tình trạng đơn hàng
                  </p>
                </div>
                <div className="List_TinhTrangDH">
                  <div className="Item_IDDH">
                    <p>ID đơn hàng</p>
                  </div>
                  <p className="Item_TrangThaiDH">Trạng thái</p>

                  <div className="Item_ThanhTienDH">Thành tiền</div>

                  <div className="Item_TimeDH">Thời gian đặt</div>
                  <div className="Item_btnDH">Chức năng</div>
                </div>
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
                  <div style={{ width: "100%" }}>
                    {currentPosts.map((item, index) => (
                      <ItemDonHang
                        key={item._id}
                        _id={item._id}
                        TrangThaiDH={item.TrangThaiDH}
                        SumMoney={item.SumMoney}
                        DateDH={item.DateDH}
                        DsSP={item.DsSP}
                        setChxDelete={setChxDelete}
                      />
                    ))}
                  </div>
                )}
                <div className="phan-trang">
                  <div className="phan-trang-left">
                    <select
                      className="select-phan-trang"
                      defaultValue={postsPerPage}
                      onChange={(e) => setPostsPerPage(e.target.value)}
                    >
                      <option value="2">2 Đơn</option>
                      <option value="4">4 Đơn</option>
                    </select>
                  </div>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={DsDonHang.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginate={paginate}
                    posts={currentPosts}
                  />
                </div>
              </div>
              <div
                className={toggleState === 6 ? "contentt active-content" : "ac"}
              >
                <p>Đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Peson;

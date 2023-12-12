import { VerifiedUserSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Order.css";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTopbtn";
import Address from "../dialog/Address";

import axios from "axios";
import $ from "jquery";

import logo from "../assets/logo_cty.png";
import cod from "../assets/cod.png";
import paypal from "../assets/paypal.png";
import error from "../assets/error.png";

import BeatLoader from "react-spinners/BeatLoader";
import ItemOder from "../item/ItemOder";

const image1 =
  "https://cdn.tgdd.vn/Files/2020/02/12/1235982/vi-sao-nen-su-dung-chai-lo-thuy-tinh-de-dung-tinh-dau-.jpg";

export default function Order() {
  const ip = "http://localhost:8080";

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const [openAdd, setOpenAdd] = useState(false);
  const handleClickItemAdd = () => {
    setOpenAdd(true);
  };

  const [DonHang, setDonHang] = useState([]);

  const [TongTien, setTongTien] = useState(0);

  let ArrayOrder = [];
  var getDH = localStorage.getItem("DonHang");
  var dbDH = JSON.parse(getDH);

  var getGioHang = localStorage.getItem("GioHang");
  var dbGioHang = JSON.parse(getGioHang);

  var getInfomation = localStorage.getItem("Infomation");
  var db = JSON.parse(getInfomation);

  const getCart = () => {
    if (getDH == null && getGioHang == null) {
    } else if (getDH != null && getGioHang != null) {
      dbGioHang.map((vl, index) => {
        let item = dbDH.Array_id.find((val) => val == vl._id);
        if (item) {
          ArrayOrder.push(vl);
          setDonHang(ArrayOrder);
        }
      });
    }
  };

  const [NameDH, setNameDH] = useState();
  const [PhoneDH, setPhoneDH] = useState();
  const [EmailDH, setEmailDH] = useState();
  const [AddreeDH, setAddreeDH] = useState();

  useEffect(() => {
    var getInfomation = localStorage.getItem("Infomation");
    var db = JSON.parse(getInfomation);
    if (getInfomation == null) {
      
    }

    if (getInfomation != null) {
      // if (NameDH == null) {
        setNameDH(db.data.TKUser);
      // }
      // if (EmailDH == null) {
        setEmailDH(db.data.EmailUser);
      // }
    }
  },[]);

  useEffect(() => {
    getCart();
  }, []);

  let navgate = useNavigate();

  const onclickHome = () => {
    navgate("/");
  };

  const WartingAlert = () => {
    $(".update").ready(function () {
      $(".alert_update").addClass("show_update");
      $(".alert_update").removeClass("hide_update");
      $(".alert_update").addClass("showAlert_update");
      setTimeout(function () {
        $(".alert_update").removeClass("show_update");
        $(".alert_update").addClass("hide_update");
      }, 3000);
    });
    $(".btn_alert_update").click(function () {
      $(".alert_update").removeClass("show_update");
      $(".alert_update").addClass("hide_update");
    });
  };

  const [TrangThaiDH, setTrangThaiDH] = useState("Chờ xác nhận");
  const [Height, setHeight] = useState("300px");

  const onclickDH = () => {
    if (
      NameDH == null ||
      PhoneDH == null ||
      EmailDH == null ||
      AddreeDH == null
    ) {
      WartingAlert();
      setShowAler("Bạn chưa nhập đầu đủ địa chỉ");
    } 
     if (
      NameDH != null &&
      PhoneDH != null &&
      EmailDH != null &&
      AddreeDH != null
    ) {
      if (ThanhToan == 0) {
        WartingAlert();
        setShowAler("Hãy chọn phương thức thanh toán");
      } else if (ThanhToan == 1) {
        let PhuongThucTT = "Thanh Toán Trực Tiếp";
        axios.post(ip + "/add_DonHang", {
          idUser: db.data._id,
          DsSP: DonHang,
          NameDH: NameDH,
          PhoneDH: PhoneDH,
          EmailDH: EmailDH,
          AddreeDH: AddreeDH,
          PhuongThucTT: PhuongThucTT,
          SumMoney: TongTien,
          DateDH: new Date(),
          TrangThaiDH: TrangThaiDH,
        });

        const id_chx = dbDH.Array_id.map((vl, index) => {
          axios.delete(ip + `/DeleteGioHang/${vl}`);
        });
        navgate("/Completed");

      } else if (ThanhToan == 2) {
        let PhuongThucOnl = "Thanh Toán Online";
        window.location.href = "http://localhost:8080";
        axios.post(ip + "/DsSP", {
          money: dbDH.money,
          idUser: db.data._id,
          DsSP: DonHang,
          NameDH: NameDH,
          PhoneDH: PhoneDH,
          EmailDH: EmailDH,
          AddreeDH: AddreeDH,
          PhuongThucTT: PhuongThucOnl,
          SumMoney: TongTien,
          DateDH: new Date(),
          TrangThaiDH: TrangThaiDH,
          ArrayIdSPGH: dbDH.Array_id,
        });
      }
    }
  };

  const [ThanhToan, setThanhToan] = useState(0);

  const [Display, setDisplay] = useState();
  const [Dplay, setDplay] = useState("none");

  const [ShowAler, setShowAler] = useState("");

  function getThanhToanOff() {
    if (ThanhToan == 0) {
      setThanhToan(1);
      setHeight("370px")
    } else if (ThanhToan == 2) {
      setThanhToan(1);
      setHeight("370px")
    } else {
      setThanhToan(0);
      setHeight("300px")
    }
  }

  function getThanhToanOnl() {
    if (ThanhToan == 0) {
      setThanhToan(2);
      setHeight("300px")
    } else if (ThanhToan == 1) {
      setThanhToan(2);
      setHeight("300px")
    } else {
      setThanhToan(0);
      setHeight("300px")
    }
  }

  let TongMoney = new Intl.NumberFormat("it-IT").format(TongTien);
  let TongPhu = new Intl.NumberFormat("it-IT").format(dbDH.money);
  const [displ, setdispl] = useState("block");
  useEffect(() => {
    if(dbDH.money < 100000){
      setdispl("none")
      setDplay("block")
    }
    if (ThanhToan == 0) {
      setDisplay("none");
      setTongTien(dbDH.money);
      $(".order-main-left-payment-button-left").removeClass(
        "payment_button_left_onclick"
      );
      $(".order-main-left-payment-button-right").removeClass(
        "payment_button_right_onclick"
      );
    } else if (ThanhToan == 1) {
      setDisplay("");
      setTongTien(dbDH.money + 35000);

      $(".order-main-left-payment-button-right").removeClass(
        "payment_button_right_onclick"
      );
      $(".order-main-left-payment-button-left").addClass(
        "payment_button_left_onclick"
      );
    } else if (ThanhToan == 2) {
      setTongTien(dbDH.money);
      setDisplay("none");
      $(".order-main-left-payment-button-left").removeClass(
        "payment_button_left_onclick"
      );
      $(".order-main-left-payment-button-right").addClass(
        "payment_button_right_onclick"
      );
    }
  });

  return (
    <>
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
        <>
          <Address
            open={openAdd}
            setOpen={setOpenAdd}
            NameDH={NameDH}
            PhoneDH={PhoneDH}
            EmailDH={EmailDH}
            AddreeDH={AddreeDH}
            setNameDH={setNameDH}
            setPhoneDH={setPhoneDH}
            setEmailDH={setEmailDH}
            setAddreeDH={setAddreeDH}
          />
          <div className="order">
            <ScrollToTop smooth></ScrollToTop>
            <div className="cart-header">
              <div>
                <button className="update" style={{ display: "none" }}>
                  sửa
                </button>
                <div className="alert_update hide_update">
                  <img src={error} width="28" height="28" />
                  <p className="msg_update">{ShowAler}</p>
                  <div className="btn_alert_update">x</div>
                </div>
              </div>
              <div className="cart_header_container">
                <div className="cart_header_left">
                  <div className="cart-header-logo" onClick={onclickHome}>
                    <img src={logo} alt="" />
                  </div>
                  <div className="cart-header-test">
                    <VerifiedUserSharp />
                    <p>Kiểm tra an toàn</p>
                  </div>
                </div>

                <div className="cart-header-stage">
                  <div className="cart-header-stage-wrapper">
                    <div className="cart-header-stage-wrapper-container">
                      <ul>
                        <li className="cart-header-stage-wrapper-container-step1">
                          <div
                            className="cart-header-stage-wrapper-container-step-inner"
                            style={{ color: "rgb(72, 72, 72)" }}
                          >
                            Giỏ hàng
                          </div>
                        </li>

                        <li className="order-header-stage-wrapper-container-step2">
                          <div
                            className="cart-header-stage-wrapper-container-step-inner"
                            style={{ color: "rgb(72, 72, 72)" }}
                          >
                            Đặt hàng
                          </div>
                        </li>

                        <li className="cart-header-stage-wrapper-container-step3">
                          <div className="cart-header-stage-wrapper-container-step-inner">
                            Thanh toán
                          </div>
                        </li>

                        <li className="cart-header-stage-wrapper-container-step4">
                          <div className="cart-header-stage-wrapper-container-step-inner">
                            Hoàn thành
                          </div>
                        </li>
                      </ul>
                      <div className="cart-header-stage-wrapper-container-line">
                        <div className="order-header-stage-wrapper-container-line-process"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-main">
              <div className="order-main-left">
                <div className="order-main-left-address">
                  <p className="order-main-left-address-title">
                    Địa chỉ giao hàng
                  </p>
                  <div className="order-main-left-address-para">
                    <div className="order-main-left-address-para-icon"></div>
                    <div className="order-main-left-para-content">
                      <p className="order-main-left-address-para-content-person">
                        {NameDH}, {PhoneDH}
                      </p>
                      <p className="order-main-left-address-content-address">
                        {EmailDH}
                      </p>
                      <p className="order-main-left-address-content-address">
                        {AddreeDH}
                      </p>

                      <div className="order-main-left-address-content-button">
                        <button
                          onClick={handleClickItemAdd}
                          className="order-main-left-address-content-button-edit"
                        >
                          Chỉnh sửa
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-main-left-payment">
                  <p className="order-main-left-payment-title">
                    Phương thức thanh toán
                  </p>
                  <div className="order-main-left-payment-button">
                    <div
                      onClick={getThanhToanOff}
                      className="order-main-left-payment-button-left"
                    >
                      <span className="payment_button_span_left">
                        <img src={cod} width="100" height="100" />
                        <p>Thanh toán trực tiếp</p>
                      </span>
                    </div>
                    <div
                      onClick={getThanhToanOnl}
                      style={{display: displ}}
                      className="order-main-left-payment-button-right"
                    >
                      <span className="payment_button_span_right">
                        <img src={paypal} width="100" height="100" />
                        <p>Thanh toán online</p>
                      </span>
                    </div>
                    <div
                      style={{display: Dplay}}
                      className="order-main-left-payment-button-right-error"
                    >
                      <span className="payment_button_span_right_error">
                        <img src={paypal} width="85" height="85" />
                        <p>Chỉ áp dụng cho đơn hàng trên 100.000 đồng</p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cart-main-left-list">
                  <p className="cart-main-left-list-title">
                    Xem trước đơn hàng
                  </p>
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
                  {DonHang.map((item, index) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
              <div className="order-main-right" style={{ height: Height }}>
                <p className="cart-main-right-title">Tóm tắt theo thứ tự</p>
                <div className="cart-main-right-subtotal">
                  <p className="cart-main-right-subtotal-title">Tổng phụ</p>
                  <p className="cart-main-right-subtotal-content">
                    {TongPhu} VND
                  </p>
                </div>
                <div
                  className="cart-main-right-subtotal"
                  style={{ display: Display }}
                >
                  <p className="cart-main-right-subtotal-title">Ship</p>
                  <p className="cart-main-right-subtotal-content">35.000 VND</p>
                </div>
                <div className="cart-main-right-total">
                  <p className="cart-main-right-total-title">Tổng</p>
                  <p className="cart-main-right-total-content">
                    {TongMoney} VND
                  </p>
                </div>
                <button className="btn_thanh_toan" onClick={onclickDH}>
                  <span className="span_thanh_toan">Đặt hàng</span>
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

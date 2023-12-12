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
import error from "../assets/error.png";

const Detail_in = () => {
  let navgate = useNavigate();

  const [tong, setTong] = useState(1);

  const setKTTong = () => {
    var oldValue = $("#counter").val();
    if (oldValue > SoLuongSP) {
      $("#counter").val(SoLuongSP);
      setTong(SoLuongSP);
    } else {
      let num = parseInt(oldValue);
      setTong(num);
    }
  };

  const [toggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  let { _id } = useParams();

  const ip = "http://localhost:8080";

  const [ShowAdd, setShowAdd] = useState("");
  const [NameShowBtn, setNameShowBtn] = useState();

  useEffect(() => {
    if (ShowAdd == "1") {
      $(".add_them").ready(function () {
        $(".alert").addClass("show");
        $(".alert").removeClass("hide");
        $(".alert").addClass("showAlert");
        setTimeout(function () {
          $(".alert").removeClass("show");
          $(".alert").addClass("hide");
        }, 3000);
        setTimeout(function () {
          $(".alert").removeClass("showAlert");
        }, 4000);
      });
      $(".btn_alert_add").click(function () {
        $(".alert").removeClass("show");
        $(".alert").addClass("hide");
        $(".alert").removeClass("showAlert");
      });
      setShowAdd("");
      setNameShowBtn("Đã thêm vào giỏ hàng");
      setGioHang();
    } else if (ShowAdd == "") {
    }
  });

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // const[,set] = useState()
  const [idUser, setIdUser] = useState();
  const [idImg, setIdImg] = useState();
  const [NameSP, setNameSP] = useState();
  const [GiaCX, setGiaCX] = useState();
  const [SoLuongSP, setSoLuongSP] = useState();
  const [SaleSP, setSaleSP] = useState();
  const [TrangThaiSP, setTrangThaiSP] = useState();
  const [LoaiSP, setLoaiSP] = useState();
  const [ChiTietSP, setChiTietSP] = useState();

  const [ChxUser, setChxUser] = useState();

  const [GiaBanSP, setGiaBanSP] = useState();
  const [test, setTest] = useState([]);
  const [saleBegin, setSaleBegin] = useState();
  const [saleEnd, setSaleEnd] = useState();
  const [Display, setDisplay] = useState("none");

  const [dsBinhLuan, setDsBinhLuan] = useState([]);

  var Infomation = localStorage.getItem("Infomation");
  var db = JSON.parse(Infomation);

  useEffect(() => {
    var ItemSP = localStorage.getItem("ItemSP");
    var data = JSON.parse(ItemSP);
    if (ItemSP == null) {
    } else if (ItemSP != null) {
      setIdImg(data.idImg);
      setNameSP(data.NameSP);
      setGiaCX(data.GiaCX);
      setSoLuongSP(data.SoLuongSP);
      setSaleSP(data.SaleSP);
      setTrangThaiSP(data.TrangThaiSP);
      setLoaiSP(data.LoaiSP);
      setChiTietSP(data.ChiTietSP);
      setGiaBanSP(data.GiaBanSP);
      setTest(data.test);
      if (data.SaleSP == 0) {
      } else {
        axios.get(ip + `/getDataSaleDate/${data.SaleSP}`).then((response) => {
          setSaleEnd(response.data[0].NgayEndSale);
          setSaleBegin(response.data[0].NgayTaoSale);
        });
      }
    }

    if (Infomation == null) {
      setChxUser("none");
      setTen();
    } else if (Infomation != null) {
      setIdUser(db.data._id);
      setChxUser("block");
      setTen(db.data.TKUser);
    }

    if (data.SaleSP == 0) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }

    getBinhLuan();
  }, []);

  const getBinhLuan = () => {
    var ItemSP = localStorage.getItem("ItemSP");
    var data = JSON.parse(ItemSP);
    axios.get(ip + `/getBinhLuan/${data.idImg}`).then((response) => {
      setDsBinhLuan(response.data);
    });
  };

  const setGioHang = () => {
    var getInfomation = localStorage.getItem("Infomation");
    var db = JSON.parse(getInfomation);

    if (getInfomation == null) {
    }

    if (getInfomation != null) {
      axios.get(ip + `/getGioHang/${db.data._id}`).then((response) => {
        window.localStorage.setItem("GioHang", JSON.stringify(response.data));
      });
    }
  };

  const btn_AddGioHang = () => {
    var getGioHang = localStorage.getItem("GioHang");
    var dbGioHang = JSON.parse(getGioHang);

    if (getGioHang == "[]") {
      axios.post(ip + "/add_GioHang", {
        idUser: idUser,
        Image: test,
        idImg: idImg,
        NameSP: NameSP,
        GiaCX: GiaCX,
        GiaBanSP: GiaBanSP,
        SoLuongSP: tong,
        SaleSP: SaleSP,
        TrangThaiSP: TrangThaiSP,
        LoaiSP: LoaiSP,
        ChiTietSP: ChiTietSP,
      });
      setShowAdd("1");
    } else if (getGioHang != null) {
      let item = dbGioHang.find((c) => c.idImg == idImg);
      if (item) {
        let a = item.SoLuongSP + tong;
        if (a > SoLuongSP) {
          axios.put(ip + `/UpdateGioHang/${item.idImg}/${item.idUser}`, {
            SoLuongSP: SoLuongSP,
          });
          setShowAdd("1");
        } else {
          axios.put(ip + `/UpdateGioHang/${item.idImg}/${item.idUser}`, {
            SoLuongSP: a,
          });
          setShowAdd("1");
        }
      } else {
        axios.post(ip + "/add_GioHang", {
          idUser: idUser,
          Image: test,
          idImg: idImg,
          NameSP: NameSP,
          GiaCX: GiaCX,
          GiaBanSP: GiaBanSP,
          SoLuongSP: tong,
          SaleSP: SaleSP,
          TrangThaiSP: TrangThaiSP,
          LoaiSP: LoaiSP,
          ChiTietSP: ChiTietSP,
        });
        setShowAdd("1");
      }
    }
  };

  const [Ten, setTen] = useState();
  const [NoiDungBL, setNoiDungBL] = useState();

  const btn_AddBinhLuan = () => {
    if (NoiDungBL == null || NoiDungBL == "") {
      $(".update").ready(function () {
        $(".alert_update").addClass("show_update");
        $(".alert_update").removeClass("hide_update");
        $(".alert_update").addClass("showAlert_update");
        setTimeout(function () {
          $(".alert_update").removeClass("show_update");
          $(".alert_update").addClass("hide_update");
        }, 3000);
        setTimeout(function () {
          $(".alert_update").removeClass("showAlert_update");
        }, 4000);
      });
      $(".btn_alert_update").click(function () {
        $(".alert_update").removeClass("show_update");
        $(".alert_update").addClass("hide_update");
        $(".alert_update").removeClass("showAlert_update");
      });
    } else if (NoiDungBL != null && NoiDungBL != "") {
      axios
        .post(ip + "/add_BinhLuan", {
          idImg: idImg,
          NameUser: db.data.TKUser,
          Date: new Date(),
          NoiDung: NoiDungBL,
        })
        .then(() => {
          setNoiDungBL();
          document.getElementById("binhluan").value = "";
        })
        .then(() => {
          getBinhLuan();
        });
    }
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

  let formatGiaCX = new Intl.NumberFormat("it-IT").format(GiaCX);
  const formatDateBegin = Moment(saleBegin).format("DD/MM");
  const formatDateEnd = Moment(saleEnd).format("DD/MM");

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
        <div className="detail">
          <ScrollToTop />
          {chxNab ? <NavbarIn /> : <Navbar />}
          <div className="detail_container">
            <div>
              <button className="update" style={{ display: "none" }}>
                sửa
              </button>
              <div className="alert_update hide_update">
                <img src={error} width="28" height="28" />
                <p className="msg_update">Bạn chưa nhập bình luận !</p>
                <div className="btn_alert_update">x</div>
              </div>
            </div>
            <div className="detail-main">
              <div style={{ position: "absolute", right: "0" }}>
                {/* add */}
                <div>
                  <button className="add_them" style={{ display: "none" }}>
                    Thêm
                  </button>
                  <div className="alert hide">
                    <img src={oke} width="28" height="28" />
                    <p className="msg">{NameShowBtn}</p>
                    <div className="btn_alert_add">x</div>
                  </div>
                </div>
              </div>
              <div className="detail-main-top">
                <div className="detail-main-top-left">
                  {test.map((item, index) => (
                    <Itemhinh key={index} item={item} />
                  ))}
                </div>
                <div className="detail-main-top-right">
                  <p className="detail-main-top-right-name">{NameSP}</p>
                  <p className="detail-main-top-right-number">
                    Số lượng còn: {SoLuongSP}{" "}
                  </p>
                  <div className="detail-main-top-right-price">
                    <div className="detail_price_content">
                      <p className="detail_price">{formatGiaCX}</p>
                      <p
                        className="price_reduced_detail"
                        style={{ display: Display }}
                      >
                        {GiaBanSP} Đ
                      </p>
                    </div>
                    <div className="detail_price_date">
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: "#FFE1E1",
                          padding: "15px 10px",
                          color: "#E14D2A",
                          borderRadius: "5px",
                          fontWeight: "bold",
                        }}
                      >
                        <p
                          style={{
                            display: Display,
                          }}
                        >
                          Giảm giá {formatDateBegin}
                        </p>
                        <p
                          style={{
                            display: Display,
                            paddingLeft: "4px",
                          }}
                        >
                          đến {formatDateEnd}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="detail-main-top-right-title">
                    Thông tin sản phẩm:
                  </p>
                  <p className="detail-main-top-right-content">
                    {/* {ChiTietSP.substring(0, 400) + " [...]"} */}
                    {ChiTietSP}
                  </p>
                  <div className="detail-main-top-right-button">
                    <div className="detail-main-top-right-button-picknb">
                      <div className="custom-input">
                        <p>SL:</p>
                        <input
                          type="number"
                          step="1"
                          min="1"
                          id="counter"
                          max={SoLuongSP}
                          defaultValue={1}
                          onBlur={setKTTong}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        toggleState === 2
                          ? "favorite detail-main-top-right-button-favorite1"
                          : "fv"
                      }
                      onClick={() => toogleTab(1)}
                    >
                      <div className="favorite_img">
                        <img src={yeuthich}></img>
                      </div>
                      <div className="favorite_pafter">
                        <p>Đã thích</p>
                      </div>
                    </div>
                    <div
                      className={
                        toggleState === 1
                          ? "favorite detail-main-top-right-button-favorite "
                          : "fv"
                      }
                      onClick={() => toogleTab(2)}
                    >
                      <div className="favorite_img">
                        <img src={yeuthich1}></img>
                      </div>
                      <div className="favorite_p">
                        <p>Yêu thích</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn_addtocart"
                    onClick={btn_AddGioHang}
                    style={{ display: ChxUser }}
                  >
                    <span className="span_addtocart">Thêm vào giỏ hàng</span>
                  </button>
                  <p className="detail-main-top-right-titlepay">
                    Thanh toán an toàn
                  </p>
                  <p className="detail-main-top-right-option">
                    Nhiều tùy chọn thanh toán
                  </p>
                  <p className="detail-main-top-right-service">
                    Đảm bảo dịch vụ khách hàng
                  </p>
                  <div className="detail-main-top-right-itemsv">
                    <div className="detail-main-top-right-itemsv-left">
                      <VerifiedSharp />
                      <p>Đảm bảo DOA</p>
                    </div>
                    <div className="detail-main-top-right-itemsv-right">
                      <TokenSharp />
                      <p>Đảm bảo đổi trả khi thiếu/sai hàng hóa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="coment detail_container" style={{ display: ChxUser }}>
            <div className="input_comment">
              <div className="img_comment">
                <img src={useImg}></img>
              </div>
              {/* <div>{Ten}</div> */}
              <div className="input_detail">
                <div className="input_intro">
                  <input
                    type="text"
                    id="binhluan"
                    // style={{ borderColor: color4 }}
                    className="intro__input"
                    placeholder=" "
                    name="Bình luận"
                    onChange={(e) => setNoiDungBL(e.target.value)}
                    // onBlur={(e) => validatePhoneCheck(e.target.value)}
                    required
                  />
                  <label htmlFor="email" className="intro__label">
                    Bình luận
                  </label>
                </div>
                <div className="btn_comment_detail">
                  <button onClick={btn_AddBinhLuan}>Gửi</button>
                </div>
              </div>
            </div>
            <div>
              {dsBinhLuan.map((vl, index) => {
                return (
                  <ItemBinhLuan
                    key={index}
                    _id={vl._id}
                    idImg={vl.idImg}
                    NameUser={vl.NameUser}
                    Date={vl.Date}
                    NoiDung={vl.NoiDung}
                    getBinhLuan={getBinhLuan}
                    setLoading={setLoading}
                  />
                );
              })}
            </div>
          </div>

          <div className="home-purview">
            <div className="preview">
              <div className="preview_title">
                <p>Dịch vụ của chúng tôi</p>
              </div>
              <div className="preview_content">
                <p>
                  Công ty cổ phần Thang Máy Fujitech đơn vị uy tín chất lượng
                </p>
              </div>
            </div>
            <div className="home-main-purview-card">
              <div className="purview_card">
                <div onClick={onClickVanChuyen} className="home-main-purview">
                  <img src={truck}></img>
                  <p>GIAO DỊCH TOÀN QUỐC</p>
                </div>
                <div onClick={onClickDoiTra} className="home-main-purview">
                  <img src={money}></img>
                  <p>HOÀN TIỀN NẾU HÀNG LỖI </p>
                </div>
              </div>
              <div className="purview_card">
                <div onClick={onClickThanhToan} className="home-main-purview">
                  <img src={hour}></img>
                  <p>CHĂM SÓC KHÁCH HÀNG 24/7</p>
                </div>
                <div onClick={onClickBaoMat} className="home-main-purview">
                  <img src={shieldImg}></img>
                  <p>CAM KẾT 100% CHẤT LƯỢNG</p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Detail_in;

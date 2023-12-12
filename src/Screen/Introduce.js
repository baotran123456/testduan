import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import Navbar from "./Navbar";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "./ScrollToTopbtn";

import "../css/Introduce.css";

import Footer from "./footer";
import { useEffect } from "react";
import { useState } from "react";
import NavbarIn from "./NavbarIn";

import axios from "axios";
import { useRef } from "react";

const Introduce = () => {
  let navgate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const ip = "http://localhost:8080";

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [SDT, setSDT] = useState();
  const [DiaChi, setDiaChi] = useState();
  const [Mota, setMota] = useState();

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser");
    var data = JSON.parse(getUser);

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true);
    }
  });

  const [color2, setColor2] = useState("#d8dde1");
  const [nameCheck, setNameCheck] = useState(false);
  const [errorName, setErrorName] = useState("");
  const validateName = (se) => {
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const formatNum = /[0123456789]/;
    if (se == null) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Tên người dùng không được để trống");
    }
    if (se != null && format.test(se) == true) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng không điền kí tự đặc biệt");
    }
    if (se != null && formatNum.test(se) == true) {
      setNameCheck(false);
      setColor2("red");
      setErrorName("Vui lòng không điền kí tự đặc biệt");
    }
    if (
      se != null &&
      format.test(se) == false &&
      formatNum.test(se) == false
    ) {
      setNameCheck(true);
      setColor2("#d8dde1");
      setErrorName("");
    }
  };

  function ErrorName(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorName}</div>;
  }
  const [color3, setColor3] = useState("#d8dde1");
  const [EmailCheck, setEmailCheck] = useState(false);
  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const validateEmailCheck = (se) => {
    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (se == null) {
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không được để trống");
    }
    if (se != null && formatEmail.test(se) == false) {
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không đúng định dạng");
    }

    if (se != null && formatEmail.test(se) == true) {
      setEmailCheck(true);
      setColor3("#d8dde1");
      setErrorEmailCheck("");
    }
  };
  function ErrorEmailCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorEmailCheck}</div>;
  }

  const [color4, setColor4] = useState("#d8dde1");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [errorPhoneCheck, setErrorPhoneCheck] = useState("");
  const validatePhoneCheck = (se) => {
    const formatPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (se == null) {
      setPhoneCheck(false);
      setColor4("red");
      setErrorPhoneCheck("Số điện thoại không được để trống");
    }
     if (se != null && formatPhone.test(se) == false) {
        setPhoneCheck(false);
        setColor4("red");
        setErrorPhoneCheck("Số điện thoại không đúng định dạng");
    } 
     if (se != null && formatPhone.test(se) == true) {
      setPhoneCheck(true);
      setColor4("#d8dde1");
      setErrorPhoneCheck("");
    }
  }

  function ErrorPhoneCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorPhoneCheck}</div>;
  }

  const [color5, setColor5] = useState("#d8dde1");
  const [diaChiCheck, setDiaChiCheck] = useState(false);
  const [errorDiaChiCheck, setErrorDiaChiCheck] = useState("");
  const validateDiaChiCheck = (se) => {
    if (se == null) {
      setDiaChiCheck(false);
      setColor5("red");
      setErrorDiaChiCheck("Địa chỉ không được để trống");
    }

    if (se != null) {
      setDiaChiCheck(true);
      setColor5("#d8dde1");
      setErrorDiaChiCheck("");
    }
  };
  function ErrorDiaChiCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorDiaChiCheck}</div>;
  }

  const [color6, setColor6] = useState("#d8dde1");
  const [noiDungCheck, setNoiDungCheck] = useState(false);
  const [errorNoiDungCheck, setErrorNoiDungCheck] = useState("");
  const validateNoiDungCheck = (se) => {
    if (se == null) {
      setNoiDungCheck(false);
      setColor6("red");
      setErrorNoiDungCheck("Nội dung không được để trống");
    }

    if (se != null) {
      setNoiDungCheck(true);
      setColor6("#d8dde1");
      setErrorNoiDungCheck("");
    }
  };
  function ErrorNoiDungCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorNoiDungCheck}</div>;
  }

  const btnAdd_PhanHoi = () => {
    validateName(Name);
    validateEmailCheck(Email);
    validatePhoneCheck(SDT);
    validateDiaChiCheck(DiaChi);
    validateNoiDungCheck(Mota);
    if (
      nameCheck == false &&
      EmailCheck == false &&
      phoneCheck == false &&
      diaChiCheck == false &&
      noiDungCheck == false
    ) {
      validateName(Name);
      validateEmailCheck(Email);
      validatePhoneCheck(SDT);
      validateDiaChiCheck(DiaChi);
      validateNoiDungCheck(Mota);
    } else if (
      nameCheck == true &&
      EmailCheck == true &&
      phoneCheck == true &&
      diaChiCheck == true &&
      noiDungCheck == true
    ) {
      axios.post(ip + "/add_PhanHoi", {
        Name: Name,
        Email: Email,
        SDT: SDT,
        DiaChi: DiaChi,
        Mota: Mota,
        Date: new Date(),
      });
    }
  };

  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1959.7795040699268!2d106.5985520258852!3d10.768430248072342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zODQwLzIwYiBIxrDGoW5nIGzhu5kgMiwgcGjGsOG7nW5nIELDrG5oIFRy4buLIMSQw7RuZyBBLCBxdeG6rW4gQsOsbmggVMOibiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1671059713738!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />);
  }

  return (
    <div>
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
          <div className="title">
            <div className="title_header">
              <h2>Liên hệ</h2>
            </div>
            <div className="title_container">
              <div className="title_container--text">
                <p className="CT">
                  CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP
                </p>
                <div className="title_container--text--name">
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <PublicIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Tên quốc tế</p>
                      </div>
                      <p id="diachi">
                        CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <AlignVerticalCenterIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Mã số thuế</p>
                      </div>
                      <p id="diachi">0782565750</p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <LocationOnIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Địa chỉ </p>
                      </div>
                      <p id="diachi">
                        840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình
                        Tân, T.P Hồ Chí Mình, Việt Nam
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <PersonIcon sx={{ fontSize: 15 }} />
                        <p style={{ fontWeight: "bold" }}>Người Đại Diện </p>
                      </div>
                      <p id="diachi">
                        Vũ Anh Tuấn <br /> Ngoài ra Vũ Anh Tuấn còn đại diện các
                        doanh nghiệp: <br /> Công Ty Cổ Phần Thương Mại Dịch Vụ
                      </p>
                    </div>
                    <div className="Br"></div>
                  </div>
                  <div className="title_container--text--name--content">
                    <div className="title_container--text--name--content--group">
                      <div className="name">
                        <LocalPhoneIcon
                          sx={{ fontSize: 15, marginRight: "0.5%" }}
                        />
                        <p style={{ fontWeight: "bold" }}>Số điện thoại</p>
                      </div>
                      <p id="diachi">0782565750</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title_container__input">
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color2 }}
                      className="intro__input"
                      placeholder=" "
                      name="Họ và tên"
                      onChange={(e) => setName(e.target.value)}
                      onBlur={(e) => validateName(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Họ và tên
                    </label>
                    <ErrorName isHidden={nameCheck} errorName={errorName} />
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color3 }}
                      className="intro__input"
                      placeholder=" "
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={(e) => validateEmailCheck(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Email
                    </label>
                    <ErrorEmailCheck
                      isHidden={EmailCheck}
                      errorEmailCheck={errorEmailCheck}
                    />
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color4 }}
                      className="intro__input"
                      placeholder=" "
                      name="Số điện thoại"
                      onChange={(e) => setSDT(e.target.value)}
                      onBlur={(e) => validatePhoneCheck(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Số điện thoại
                    </label>
                    <ErrorPhoneCheck
                      isHidden={phoneCheck}
                      errorPhoneCheck={errorPhoneCheck}
                    />
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <input
                      type="text"
                      style={{ borderColor: color5 }}
                      className="intro__input"
                      placeholder=" "
                      name="Địa chỉ"
                      onBlur={(e) => validateDiaChiCheck(e.target.value)}
                      onChange={(e) => setDiaChi(e.target.value)}
                      required
                    />
                    <label htmlFor="email" className="intro__label">
                      Địa chỉ
                    </label>
                    <ErrorDiaChiCheck
                      isHidden={diaChiCheck}
                      errorDiaChiCheck={errorDiaChiCheck}
                    />
                  </div>
                </div>
                <div className="title_container__input__Textfield__name">
                  <div className="input_intro">
                    <textarea
                      type="textarea"
                      style={{ borderColor: color6 }}
                      className="intro__input"
                      placeholder="Nội dung"
                      name="Nội dung"
                      onBlur={(e) => validateNoiDungCheck(e.target.value)}
                      onChange={(e) => setMota(e.target.value)}
                      required
                    />
                    <ErrorNoiDungCheck
                      isHidden={noiDungCheck}
                      errorNoiDungCheck={errorNoiDungCheck}
                    />
                  </div>
                </div>
                <div
                  className="title_container__input__buttom"
                  onClick={btnAdd_PhanHoi}
                >
                  <button> Gửi</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bando">
            <div className="bando_khobau">
              <Iframe iframe={iframe} />,
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Introduce;

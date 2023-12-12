import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import logo from "../assets/logo_cty.png";
import error from "../assets/error.png";
import $ from "jquery";
export default function Forgot_Pass(props) {
  const [countdown, setCountdown] = useState(0);
  const [displ, setDispl] = useState("block");
  const [displh, setDisplh] = useState("none");
  const timeId = useRef();

  useEffect(() => {
    countdownrun();
  }, []);

  const countdownrun = () => {
    timeId.current = setInterval(() => {
      setCountdown((prew) => prew - 1);
    }, 1000);
    return () => clearInterval(timeId.current);
  };

  useEffect(() => {
    if (countdown <= 0) {
      setDispl("block");
      setDisplh("none");
      clearInterval(timeId.current);
    } else {
      setDispl("none");
      setDisplh("block");
    }
  }, [countdown]);

  const ip = "http://localhost:8080";

  const navigate = useNavigate();

  const [EmailUser, setEmailUser] = useState();

  const onclickHome = () => {
    navigate("/");
  };

  const onclickForgetPass = () => {
    fetch(ip + "/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        EmailUser: EmailUser,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "User Not Exists!!") {
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
        } else if (data.status == "User thành công") {
          setCountdown(10);
          countdownrun();
        }
      });
    // setDispl("none");
    // setDisplh("block");
  };

  const [color, setColor] = useState(false);
  const [EmailCheck, setEmailCheck] = useState(false);
  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const validateEmailCheck = (se) => {
    // const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setEmailCheck(true);
    setColor("#d8dde1");
    setErrorEmailCheck("");
    // if (se == null) {
    //     setEmailCheck(false);
    //     setColor("red");
    //     setErrorEmailCheck("Email không được để trống");
    // }
    // if (se == "Trùng Email" && se != null) {
    //     setEmailCheck(false);
    //     setColor("red");
    //     setErrorEmailCheck("Email đã tồn tại");
    // }
    // if (se != "Trùng Email" && se != null && formatEmail.test(se) == false) {
    //     setEmailCheck(false);
    //     setColor("red");
    //     setErrorEmailCheck("Email không đúng định dạng");
    // }
    // if (se != "Trùng Email" && se != null && formatEmail.test(se) == true) {
    //     setEmailCheck(true);
    //     setColor("#d8dde1");
    //     setErrorEmailCheck("");
    // }
  };
  function ErrorEmailCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning">{props.errorEmailCheck}</div>;
  }

  return (
    <div className="container">
      <div>
        <button className="update" style={{ display: "none" }}>
          sửa
        </button>
        <div className="alert_update hide_update">
          <img src={error} width="28" height="28" />
          <p className="msg_update">Email không phù hợp !!!</p>
          <div className="btn_alert_update">x</div>
        </div>
      </div>
      <div className="logo_form" onClick={onclickHome}>
        <img className="logo" src={logo} />
      </div>

      <div className="login">
        <div
          style={{ width: "100%", textAlign: "center", margin: "0 0 30px 0" }}
        >
          <p style={{ fontSize: "30px", fontWeight: "750", color: "#707070" }}>
            Nhập địa chỉ Email
          </p>
        </div>
        <div className="form_login_input">
          <div className="userr">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              style={{ borderColor: color }}
              name="Tên đăng nhập"
              onChange={(e) => setEmailUser(e.target.value)}
              onBlur={(e) => validateEmailCheck(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Email
            </label>
            <ErrorEmailCheck
              isHidden={EmailCheck}
              errorEmailCheck={errorEmailCheck}
            />
          </div>

          <button
            style={{ display: displ }}
            className="form_login_btn"
            onClick={onclickForgetPass}
          >
            Gửi xác nhận đến email
          </button>
          <h4 style={{ display: displh }}>
            Bạn có thể gửi lại sau: {countdown}s
          </h4>
        </div>
      </div>
    </div>
  );
}

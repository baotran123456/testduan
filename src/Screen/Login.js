import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import logo from "../assets/logo_cty.png";
import name_logo from "../assets/name_logo.png";

import eyeStart from '../assets/eye_icon.png'
import eyeEnd from '../assets/eye_slash_icon.png';

function useKey(key, cb) {

  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  })

  useEffect(() => {

    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key])
}

function Login() {

  const ip = "http://localhost:8080"

  const navigate = useNavigate();

  const [TKUser, setTKUser] = useState();
  const [passUser, setPassUser] = useState();

  const [chxSave, setChxSave] = useState(false);


  const btnLogin = () => {
    
    
      fetch(ip + "/login_User", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          TKUser: TKUser,
          passUser: passUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {

          if (data.error == "Tài khoản không tồn tại") {
            setTKCheck(false);
            setTKUser("Tài khoản không tồn tại")
            console.log('4');
          } if (data.error == "Mật khẩu sai") {
            setPasswordCheck(false);
            setErrorPassword("Mật khẩu sai");
            console.log('5');
          }
           
          if (data.status == "oke") {
            fetch(ip + "/User_data", {
              method: "POST",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                token: data.data
              }),
            })
              .then((res) => res.json())
              .then((db) => {
                if (db.data.TrangThaiUser == "Hoạt động") {
                 
                  var user = {
                    TKUser: TKUser,
                    passUser: passUser,
                    chxSave: chxSave
                  }
                  localStorage.setItem('UserUser', JSON.stringify(user));
                  localStorage.setItem('Infomation', JSON.stringify(data))
                  window.localStorage.setItem("token", data.data);

                  navigate("/", { replace: true });
                  console.log('6');
                } else if (db.data.TrangThaiUser == "Không hoạt động") {
                  navigate("/Inactive", { replace: true });
                }

              })

          }
        })
    

  };

  // ============================================== validate ===================================================


  const [color2, setColor2] = useState("#d8dde1");
  const [color3, setColor3] = useState("#d8dde1");

  const [TKCheck, setTKCheck] = useState(false);
  const [errorTK, setErrorTK] = useState("");
  const validateTK = (se) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


    if (format.test(se) == true) {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Vui lòng không điền kí tự đặc biệt");
    }
    if (se == null) {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản không được để trống");
    }
    if (se == "Tài khoản không tồn tại" && se != null) {
      setTKCheck(false);
      setColor2("red");
      setErrorTK("Tài khoản không tồn tại");
    } else
      if (se != "Tài khoản không tồn tại" && se != null) {
        setTKCheck(true);
        setColor2("#d8dde1");
        setErrorTK("");
      }

  }

  function ErrorTK(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning">
        {props.errorTK}
      </div>
    )
  }


 
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [errorPassword, setErrorPassword] = useState("");
  const validatePass = (se) => {
    const pass = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (pass.test(se) == true) {
      setPasswordCheck(false);
      setColor3("#d8dde1");
      setErrorPassword("");
    } else {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Vui lòng không điền kí tự đặt biệt");
    }

    if (se.length > 50) {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Mật khẩu dài quá 50 kí tự");
    }
    if (se.length < 5) {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Độ dài Mật khẩu lớn hơn 5 kí tự");
    }
    if (se.length == 0) {
      setPasswordCheck(false);
      setColor3("red");
      setErrorPassword("Mật khẩu không được để trống");
    }
  
  }
  function ErrolPassword(props) {
    if (props.isHidden) { return null; }
    return (
      <div className="form_warning">
        {props.errorPassword}
      </div>
    )
  }

  const onclickHome = () => {
    navigate("/");
  };
  const onclickForgotPass = () => {
    navigate("/ForgotPass");
  };

  // con mắt password
  const [type, setType] = useState("password");
  const [eye, setEye] = useState(eyeStart);
  const hanldeEye = () => {
    if (eye == eyeStart) {
      setType("text")
      setEye(eyeEnd)
      return
    }
    if (eye == eyeEnd) {
      setType("password")
      setEye(eyeStart)
      return
    }
  }

  return (
    <div className="container">
      <div className="logo_form" onClick={onclickHome}>
        <img
          className="logo"
          src={logo}
        />
        <img className="name_logo_login" src={name_logo} alt="" />
      </div>

      <div className="login">
        <div className="form_login_title">
          <p className="title_content">Đăng nhập</p>
          <Link className="nouser" to={'/Signup'}><p>Không có tài khoản ?</p></Link>
        </div>
        <div className="form_login_input">
          <div className="userr">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              style={{ borderColor: color2 }}
              name="Tên đăng nhập"
              onChange={(e) => setTKUser(e.target.value)}
              onBlur={(e) => validateTK(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Tên đăng nhập
            </label>
            <ErrorTK isHidden={TKCheck} errorTK={errorTK} />
          </div>
          <div className="userr">
            <input
              type={type}
              className="form__input"
              style={{ borderColor: color3 }}
              placeholder=" "
              name="Tên đăng nhập"
              onChange={(e) => setPassUser(e.target.value)}
              onBlur={(e) => validatePass(e.target.value)}
              required
            />
            <label htmlFor="email" className="form__label">
              Mật khẩu
            </label>
            <img onClick={hanldeEye} src={eye} width='25' height='25' />
            <ErrolPassword
              isHidden={passwordCheck}
              errorPassword={errorPassword}
            />
          </div>
          <div className="form_login_forgetmenot">
            <div className="form_login_forgetmenot_left">
              <input className='cbx_ipt' name="rememberme" type="checkbox" onChange={(e) => setChxSave(!chxSave)} defaultChecked={chxSave} />
              <div className="title_chb">Lưu mật khẩu</div>
            </div>
            <p onClick={onclickForgotPass}>Quên mật khẩu ?</p>
          </div>
          <button
            className="form_login_btn"
            onClick={btnLogin}
          >
            Đăng nhập
          </button>
        </div>

        <div className="login_or">Hoặc</div>
        <div className="form_login_with">
          <div className="btn_gg">
            <div className="logo_gg"></div>
            <div className="title_gg">Google</div>
          </div>

          <div className="btn_tw">
            <div className="logo_tw" />
            <div className="title_tw">Twiter</div>
          </div>

          <div className="btn_fb">
            <div className="logo_fb"></div>
            <div className="title_fb">Facebook</div>
          </div>
        </div>
      </div>

      <div className="footer_login">
        <div className="footer_login_content">
          <div className="about_we">Về chúng tôi</div>
          <div className="about_line"></div>
          <div className="about_we">Các điều khoản</div>
          <div className="about_line"></div>
          <div className="about_we">Chính sách bảo mật</div>
          <div className="about_line"></div>
          <div className="about_we">Trung tâm trợ giúp</div>
        </div>
        <div className="">
          ©2022 Bản quyền thuộc về Công Ty TNHH Sản Xuất Đầu Tư TM DV XNK Vũ Gia
          Group.
        </div>
      </div>
    </div>
  );
}
export default Login;

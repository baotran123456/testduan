import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@mui/material";
import "../css/Address.css";
import { number } from "yup/lib/locale";

export default function Address(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const [NameDH, setNameDH] = useState(props.NameDH);
  const [PhoneDH, setPhoneDH] = useState(props.PhoneDH);
  const [EmailDH, setEmailDH] = useState(props.EmailDH);
  const [AddreeDH, setAddreeDH] = useState(props.AddreeDH);


  const addToAddress = async () => {
    validateName(NameDH)
    validatePhoneCheck(PhoneDH)
    validateEmailCheck(EmailDH)
    validateAdres(AddreeDH)
    if (phoneCheck == false) {
      setcolor2("red");
    } else if (EmailCheck == false) {
      setColor3("red");
    } else if (adresCheck == false) {
      setColor4("red");
    } else if (nameCheck == true && phoneCheck == true && EmailCheck == true && adresCheck == true) {
      props.setNameDH(NameDH)
      props.setPhoneDH(PhoneDH)
      props.setEmailDH(EmailDH)
      props.setAddreeDH(AddreeDH)
      props.setOpen(false);
    }
  };



  const [color1, setColor1] = useState("#d8dde1");
  const [nameCheck, setNameCheck] = useState(false);
  const [errorName, setErrorName] = useState("");
  const validateName = (se) => {
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (se == '') {
      setNameCheck(false);
      setColor1("red");
      setErrorName("Tên người dùng không được để trống");
    }
    if (se != '' && format.test(se) == true) {
      setNameCheck(false);
      setColor1("red");
      setErrorName("Vui lòng không điền kí tự đặc biệt");
    }
    if (se != '' && se.length < 2) {
      setNameCheck(false);
      setColor1("red");
      setErrorName("Vui lòng nhập hơn 1 ký tự");
    }
    if (se != '' && se.length > 20) {
      setNameCheck(false);
      setColor1("red");
      setErrorName("Vui lòng nhập ít hơn 20 ký tự");
    }
    if (
      se != '' &&
      se.length > 1 &&
      se.length < 21 &&
      format.test(se) == false
    ) {
      setNameCheck(true);
      setColor1("#d8dde1");
      setErrorName("");
    }
  };

  function ErrorName(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorName}</div>;
  }

  const [color2, setcolor2] = useState("#d8dde1");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [errorPhoneCheck, setErrorPhoneCheck] = useState("");
  const validatePhoneCheck = (se) => {
    const formatPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (se != null && formatPhone.test(se) == true) {
      setPhoneCheck(true);
      setcolor2("#d8dde1");
      setErrorPhoneCheck("");
    }
    if (se == null) {
      setPhoneCheck(false);
      setcolor2("red");
      setErrorPhoneCheck("Số điện thoại không được để trống");
    }
    if (se != null && formatPhone.test(se) == false) {
      setPhoneCheck(false);
      setcolor2("red");
      setErrorPhoneCheck("Số điện thoại không đúng định dạng");
    }

  };
  function ErrorPhoneCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_intro">{props.errorPhoneCheck}</div>;
  }

  const [color3, setColor3] = useState("#d8dde1");
  const [EmailCheck, setEmailCheck] = useState(false);
  const [errorEmailCheck, setErrorEmailCheck] = useState("");
  const validateEmailCheck = (se) => {
    const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (se == "") {
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không được để trống");
    }
    if (se != "" && formatEmail.test(se) == false) {
      setEmailCheck(false);
      setColor3("red");
      setErrorEmailCheck("Email không đúng định dạng");
    }

    if (se != "" && formatEmail.test(se) == true) {
      setEmailCheck(true);
      setColor3("#d8dde1");
      setErrorEmailCheck("");
    }
  };
  function ErrorEmailCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_adr">{props.errorEmailCheck}</div>;
  }

  const [color4, setColor4] = useState("#d8dde1");
  const [adresCheck, setAdresCheck] = useState(false);
  const [errorAdres, setErrorAdres] = useState("");
  const validateAdres = (se) => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const formatNum = /[0123456789]/;
    if (se == null) {
      setAdresCheck(false);
      setColor4("red");
      setErrorAdres("Địa chỉ không được để trống");
    }
    if (se != null && se.length < 15) {
      setAdresCheck(false);
      setColor4("red");
      setErrorAdres("Vui lòng nhập địa chỉ chi tiết hơn");
    }
    if (se != null && se.length > 50) {
      setAdresCheck(false);
      setColor4("red");
      setErrorAdres("Vui lòng nhập ít hơn 50 ký tự");
    }
    if (
      se != null &&
      se.length > 15 &&
      se.length < 50
    ) {
      setAdresCheck(true);
      setColor4("#d8dde1");
      setErrorAdres("");
    }
  };

  function ErrorAdresCheck(props) {
    if (props.isHidden) {
      return null;
    }
    return <div className="form_warning_adr">{props.errorAdresCheck}</div>;
  }


  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogContent>
        <div className="address_title">
          <p>Nhập địa chỉ giao hàng</p>
        </div>

        <div className="address_top">
          <div className="user_add">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color1 }}
              placeholder=" "
              name="Họ và tên"
              defaultValue={props.NameDH}
              onChange={(e) => setNameDH(e.target.value)}
              onBlur={(e) => validateName(e.target.value)}

              required
            />
            <label htmlFor="text" className="form__label">
              Họ và tên
            </label>
            <ErrorName isHidden={nameCheck} errorName={errorName} />
          </div>

          <div className="user_add">
            <input
              type="text"
              className="form__input"
              style={{ borderColor: color2 }}
              placeholder=" "
              name="Số điện thoại"
              defaultValue={props.PhoneDH}
              onChange={(e) => setPhoneDH(e.target.value)}
              onBlur={(e) => validatePhoneCheck(e.target.value)}
              required
            />
            <label htmlFor="text" className="form__label">
              Số điện thoại
            </label>
            <ErrorPhoneCheck
              isHidden={phoneCheck}
              errorPhoneCheck={errorPhoneCheck}
            />
          </div>
        </div>

        <div className="user_addres">
          <input
            type="text"
            className="form__input"
            style={{ borderColor: color3 }}
            placeholder=" "
            name="Email"
            defaultValue={props.EmailDH}
            onChange={(e) => setEmailDH(e.target.value)}
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

        <div className="user_addres">
          <input
            type="text"
            className="form__input"
            style={{ borderColor: color4 }}
            placeholder=" "
            name="địa chỉ"
            defaultValue={props.AddreeDH}
            onChange={(e) => setAddreeDH(e.target.value)}
            onBlur={(e) => validateAdres(e.target.value)}
            required
          />
          <label htmlFor="text" className="form__label">
            Tỉnh / Thành phố, Quận / Huyện, Phường / Xã
          </label>
          <ErrorAdresCheck isHidden={adresCheck} errorAdresCheck={errorAdres} />
        </div>
      </DialogContent>
      <DialogActions className="btn-dialog">
        <Button
          variant="outlined"
          className="btn_add_cancel"
          onClick={handleClose}
        >
          Hủy
        </Button>
        <Button
          onClick={addToAddress}
          variant="outlined"
          className="btn_add_cancel"
          color="primary"
        >
          Sửa
        </Button>
      </DialogActions>
    </Dialog>
  );
}

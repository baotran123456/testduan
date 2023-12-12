import React from "react";
import "../css/Navbar.css";
import { useState, useEffect } from "react";
import $ from "jquery";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo_cty.png";
import { Fragment } from "react";
import axios from "axios";
import three_dot from "../assets/three_dot.png";
import name_logo from "../assets/name_logo.jpg"
const onClickSearch = () => {
  $(".input_search").toggleClass("active");
};

function NavbarIn() {

  const ip = "http://localhost:8080"
  // const [tong, setTong] = useState(0);

  // useEffect(() => {
  //   var getInfomation = localStorage.getItem("Infomation")
  //   var db = JSON.parse(getInfomation)
  //   if (getInfomation == null) {
  //   }

  //   if (getInfomation != null) {
  //     axios.get(ip + `/getGioHang/${db.data._id}`)
  //       .then((response) => {
  //         setTong(response.data.length);
  //         // setdanhsachSP(response.data);
  //       })
  //   }
  // },)

  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onclickCart = () => {
    navgate("/Cart");
  };

  const onclickHome = () => {
    navgate("/");
  };

  const onclickContact = () => {
    navgate("/Contact");
  };

  const onclickProduct = () => {
    navgate("/Product");
  };

  const onclickNavigate = () => {
    navgate("/Navigate");
  };

  const onclickIntroduce = () => {
    navgate("/Introduce");
  };

  const onClickLogout = () => {
    localStorage.removeItem("UserUser");
    localStorage.removeItem("token")
    localStorage.removeItem("Infomation")
    localStorage.removeItem("GioHang")
    window.location.href = "/login";
    navgate("/login");
  };

  const [opNav, setOpNav] = useState(0);

  function myFunction() {
    if (opNav == 0) {
      $(".home-header_ul").addClass("repon_nav");
      setOpNav(1);
    } else {
      $(".home-header_ul").removeClass("repon_nav");
      setOpNav(0);
    }
  }

  return (
    <nav className="home-header">
      <div className="header_container">
        <div onClick={myFunction} className="open_nav" id={"openNav"}><img className="open_navimg" src={three_dot}></img></div>
        <div onClick={onclickHome} className="home-header_logo">
          <img className="home-header-logo-image" src={logo} alt="" />
          <img className="home-header-logo-image-name" src={name_logo} alt="" />
        </div>
        <ul className="home-header_ul">
          <li onClick={onclickHome}>
            <NavLink className="home-header_ul_li_navlink" to="/Home">
              Trang chủ
            </NavLink>
          </li>
          <li onClick={onclickContact}>
            <NavLink className="home-header_ul_li_navlink" to="/Contact">
              Giới thiệu
            </NavLink>
          </li>
          <li className="home-header_ul_subnav" onClick={onclickProduct}>
            <NavLink className="home-header_ul_li_navlink" to="/Product">
              Sản phẩm
            </NavLink>
          </li>
          <li onClick={onclickNavigate}>
            <NavLink className="home-header_ul_li_navlink" to="/Navigate">
              Ưu đãi
            </NavLink>
          </li>
          <li onClick={onclickIntroduce}>
            <NavLink className="home-header_ul_li_navlink" to="/Introduce">
              Liên hệ
            </NavLink>
          </li>
        </ul>
        <div className="home-header_icon">
          <div className="font_icon_nav">
            <div className="search" onClick={onClickSearch}></div>
          </div>

          <div className="home-header_icon_user">
            <Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <div
                    className="home-header_icon_user_img"
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <div className="user" />
                  </div>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      left: 75,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "center", vertical: "top" }}
                anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
              >
                <MenuItem onClick={onclickItem}>
                  <div style={{ display: "flex", color: "#4d7bb7", alignItems: 'center' }}>
                    <Avatar /> Profile
                  </div>

                </MenuItem>
                <Divider />
                <MenuItem>
                  <div style={{ display: "flex", color: "#4d7bb7", alignItems: 'center' }}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </div>
                </MenuItem>
                <MenuItem>
                  <div style={{ display: "flex", color: "#4d7bb7", alignItems: 'center' }}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </div>
                </MenuItem>
                <MenuItem onClick={onClickLogout}>
                  <div style={{ display: "flex", color: "red", alignItems: 'center' }}>
                    <ListItemIcon>
                      <Logout color="red" fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </div>
                </MenuItem>
              </Menu>
            </Fragment>
          </div>

          <div className="font_icon_nav">
            <div onClick={onclickCart} className="cart_navbar">
              {/* <div className="number_cart">{tong}</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <input type="text" className="input_search" placeholder="Search..." />
      </div>
    </nav>
  );
}

export default NavbarIn;

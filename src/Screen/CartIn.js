import { VerifiedUserSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../css/Cart.css";
import Footer from "./footer";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import logo from "../assets/logo_cty.png";
import error from "../assets/error.png";

import { filter } from "lodash";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";

import axios from "axios";
import $ from "jquery";

// gọi trang
import Scrollbar from "../bosung/Scrollbar";
import Iconify from "../bosung/Iconify";
import SearchNotFound from "../bosung/SearchNotFound";
import CartListToolbar from "../bosung/CartListToolbar";
import CartListHead from "../bosung/CartListHead";

// loading
import BeatLoader from "react-spinners/BeatLoader";
import ItemCart from "../item/ItemCart";

const CartIn = () => {
  const ip = "http://localhost:8080";

  const [danhsachSP, setdanhsachSP] = useState([]);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [money, setMoney] = useState(0);

  let TongTien = new Intl.NumberFormat("it-IT").format(money);

  const [soLuongNum, setSoLuongNum] = useState(0);

  const TABLE_HEAD = [
    { id: "Image", label: "Image", alignRight: false },
    { id: "NameSP", label: "NameSP", alignRight: false },
    { id: "GiaCX", label: "TongGia", alignRight: false },
    { id: "GiaBanSP", label: "GiaBanSP", alignRight: false },
    { id: "SaleSP", label: "SaleSP", alignRight: false },
    { id: "SoLuongSP", label: "SoLuongSP", alignRight: false },
    { id: "" },
  ];

  // ----------------------------------------------------------------------

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (array) =>
          array.NameSP.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el) => el[0]);
  }

  useEffect(() => {
    var getInfomation = localStorage.getItem("Infomation");
    var db = JSON.parse(getInfomation);
    if (getInfomation == null) {
    }

    if (getInfomation != null) {
      axios.get(ip + `/getGioHang/${db.data._id}`).then((response) => {
        window.localStorage.setItem("GioHang", JSON.stringify(response.data));
        setdanhsachSP(response.data);
      });
    }
  }, []);

  useEffect(() => {
    let numBe = 0;
    for (let index = 0; index < danhsachSP.length; index++) {
      numBe = numBe + 1;
      setSoLuongNum(numBe);
    }
  }, [danhsachSP.length]);

  var num = 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked == true) {
      const newSelecteds = danhsachSP.map((n) => n._id);
      setSelected(newSelecteds);
      danhsachSP.map((e) => {
        num = num + (e.GiaCX * e.SoLuongSP);
      });
      setMoney(num);

    }
    if (event.target.checked == false) {
      setSelected([]);
      num = 0;
      setMoney(0);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - danhsachSP.length) : 0;

  const filteredUsers = applySortFilter(
    danhsachSP,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  let navgate = useNavigate();

  const onclickItem = () => {
    if (money == 0) {
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
    } else if (money > 0) {
      var DonHang = {
        Array_id: selected,
        money: money,
      };
      localStorage.setItem("DonHang", JSON.stringify(DonHang));
      navgate("/Order");
    }
  };

  const onclickHome = () => {
    navgate("/");
  };

  return (
    <div className="carrt">
      <ScrollToTop />
      <div className="cart-header">
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

          <div>
            <button className="update" style={{ display: "none" }}>
              sửa
            </button>
            <div className="alert_update hide_update">
              <img src={error} width="28" height="28" />
              <p className="msg_update">Bạn chưa chọn sản phẩm đặt hàng</p>
              <div className="btn_alert_update">x</div>
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

                  <li className="cart-header-stage-wrapper-container-step2">
                    <div className="cart-header-stage-wrapper-container-step-inner">
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
                  <div className="cart-header-stage-wrapper-container-line-process"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-main">
        <div className="cart_container">
          <Container>
            <Card>
              <div className="cart-main-left-title">
                <p className="cart-main-left-title-content">
                  Giỏ hàng &#10088;{soLuongNum}&#10089;
                </p>
              </div>

              <CartListToolbar
                selected={selected}
                numSelected={selected.length}
                filterName={filterName}
                onFilterName={handleFilterByName}
              />

              <Scrollbar>
                <TableContainer sx={{ minWidth: 340 }}>
                  {loading ? (
                    <div className="loading">
                      <BeatLoader
                        color={"#2065d1"}
                        loading={loading}
                        size={15}
                        margin={5}
                        speedMultiplier={1}
                      />
                    </div>
                  ) : (
                    <Table>
                      <CartListHead
                        order={order}
                        orderBy={orderBy}
                        headLabel={TABLE_HEAD}
                        rowCount={danhsachSP.length}
                        numSelected={selected.length}
                        onRequestSort={handleRequestSort}
                        onSelectAllClick={handleSelectAllClick}
                      />
                      <TableBody>
                        {filteredUsers
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((val) => {
                            const isItemSelected =
                              selected.indexOf(val._id) !== -1;
                            if (val.TrangThaiSP == "Hoạt động") {
                              return (
                                <ItemCart
                                  key={val._id}
                                  _id={val._id}
                                  idUser={val.idUser}
                                  Image={val.Image}
                                  idImg={val.idImg}
                                  NameSP={val.NameSP}
                                  GiaCX={val.GiaCX}
                                  GiaBanSP={val.GiaBanSP}
                                  SoLuongSP={val.SoLuongSP}
                                  SaleSP={val.SaleSP}
                                  TrangThaiSP={val.TrangThaiSP}
                                  LoaiSP={val.LoaiSP}
                                  ChiTietSP={val.ChiTietSP}
                                  setdanhsachSP={setdanhsachSP}
                                  isItemSelected={isItemSelected}
                                  selected={selected}
                                  setSelected={setSelected}
                                  setMoney={setMoney}
                                  money={money}
                                />
                              );
                            } else if (val.TrangThaiSP == "Không hoạt động") {
                              // delete giỏ hàng khi đã sửa trạng thái sản phẩm trên admin
                              axios.delete(ip + `/DeleteGioHang/${val._id}`);
                            }
                          })}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>

                      {isUserNotFound && (
                        <TableBody>
                          <TableRow>
                            <TableCell
                              align="center"
                              colSpan={6}
                              sx={{ py: 3 }}
                            >
                              <SearchNotFound searchQuery={filterName} />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      )}
                    </Table>
                  )}
                </TableContainer>
              </Scrollbar>

              <TablePagination
                rowsPerPageOptions={[10, 20, 30]}
                component="div"
                count={danhsachSP.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Card>
          </Container>
          <div className="cart-main-right">
            <p className="cart-main-right-title">Tóm tắt theo thứ tự</p>
            <div className="cart-main-right-subtotal">
              <p className="cart-main-right-subtotal-title">Tổng phụ</p>
              <p className="cart-main-right-subtotal-content">{TongTien} VND</p>
            </div>
            <div className="cart-main-right-total">
              <p className="cart-main-right-total-title">
                Tổng&#10088;{selected.length}&#10089;
              </p>
              <p className="cart-main-right-total-content">{TongTien} VND</p>
            </div>
            <button className="btn_thanh_toan" onClick={onclickItem}>
              <span className="span_thanh_toan">Đặt hàng</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartIn;

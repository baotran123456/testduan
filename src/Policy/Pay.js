import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Policy.css";
import Footer from "../Screen/footer";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Screen/Navbar";
import NavbarIn from "../Screen/NavbarIn";
const logo =
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";

export default function Lie() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [chxNab, setChxNab] = useState(false);
  useEffect(() => {
    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)

    if (getUser == null) {
    }

    if (getUser != null) {
      setChxNab(true)
    }
  },)

  let navgate = useNavigate();

  const onclickItem = () => {
    navgate("/Personal");
  };
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
          <div className="policy">
            <div className="title_header">
              <h2>Chính sách</h2>
            </div>
            <div className="policy_contai">
              <div className="policy_left">
                <h1>CHÍNH SÁCH THANH TOÁN</h1>
                <h2>Thông tin chung khi thanh toán và giao dịch.</h2>
                <p>
                  CÔNG TY có bộ phận chăm sóc, tư vấn khách hàng luôn sẵn sàng
                  tiếp nhận thông tin và yêu cầu từ quý vị và các bạn. Vì vậy
                  ngay khi chúng tôi tiếp nhận được liên hệ, yêu cầu tư vấn hoặc
                  các thông tin đăng ký các dịch vụ trực tuyến của quý khách,
                  CÔNG TY sẽ liên lạc lại ngay với quý khách bằng điện thoại
                  hoặc email để tư vấn trực tiếp cho quý khách.
                </p>
                <p>
                  Khi các bạn quyết định sử dụng dịch vụ của chúng tôi, quý
                  khách có thể lựa chọn một trong các hình thức thanh toán phù
                  hợp nhất trong 3 hình thức dưới đây để thanh toán một cách đơn
                  giản và thuận tiện nhất.
                </p>
                <h2>Để chúng tôi có thể khởi tạo dịch vụ cho bạn nhanh nhất</h2>
                <p>
                  Trường hợp nếu quý khách đã thanh toán cho chúng tôi nhưng
                  chưa được thực hiện thì sau khi thanh toán, các bạn chỉ cần
                  scan biên lai hoặc giấy ủy nhiệm chi và gửi vào địa chỉ email
                  hoặc địa chỉ email của nhân viên trực tiếp hỗ trợ. CÔNG TY sẽ
                  khởi tạo dịch vụ ngay cho các bạn khi nhận được email và xác
                  nhận việc thanh toán là chính xác mà không cần chờ đợi trong
                  khoảng thời gian các ngân hàng thực hiện việc chuyển tiền.
                </p>
                <h4>
                  Hình thức 1: Thanh toán qua chuyển khoản Ngân Hàng hoặc
                  Internet Banking.
                </h4>
                <p>
                  Quý khách có thể thực hiện việc thanh toán theo hình thức này
                  bằng cách đến bất kì phòng giao dịch ngân hàng, cây ATM hoặc
                  sử dụng dịch vụ internet Banking để chuyển tiền vào một trong
                  các tài khoản sau của chúng tôi:
                </p>
                <p>
                  Bên cạnh đó, ngoài những thông tin đầy đủ như : Ngân hàng/ Tên
                  tài khoản/ Số tài khoản của chúng tôi, nếu quý khách là người
                  đang sinh sống tại nước ngoài muốn thanh toán bằng phương thức
                  chuyển khoản vui lòng cung cấp cho ngân hàng nước sở tại mã
                  SWIFT CODE tương ứng với từng ngân hàng chúng tôi liệt kê bên
                  dưới.
                </p>
                <p>Quý khách liên hệ với Hotline để lấy thông tin.</p>
                <h2>Hình thức 2: Thu phí tận nơi</h2>
                <p>
                  Nhân viên CÔNG TY sẽ liên lạc và hẹn quý khách thời gian để
                  thu phí tận nơi khi chúng tôi nhận được yêu cầu đăng kí các
                  dịch vụ của quý khách.
                </p>
                <p style={{ marginBottom: "10%" }}>
                  Lưu ý: hình thức này chỉ áp dụng với các dịch vụ trị giá {">"}{" "}
                  5 triệu đồng.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

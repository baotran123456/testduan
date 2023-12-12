import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Policy.css";
import Footer from "../Screen/footer";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "../Screen/ScrollToTopbtn";
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
                <h1>CHÍNH SÁCH HOÀN TIỀN, ĐỔI TRẢ DỊCH VỤ</h1>
                <p>
                  Chính sách hoàn tiền, đổi trả dịch vụ của CÔNG TY được thực
                  hiện nghiêm túc và minh bạch rõ ràng với những phát sinh không
                  mong muốn để khách hàng ưng ý nhất.
                </p>
                <h2>Điều kiện hoàn tiền, đổi trả dịch vụ</h2>
                <p>
                  Mọi vấn đề xảy ra giữa CÔNG TY và quý khách dẫn đến không thể
                  tiếp tục dịch vụ sẽ được giải quyết và đưa ra chính sách tối
                  ưu nhất cho cả hai bên, tuy nhiên, chúng tôi luôn cam kết cung
                  cấp dịch vụ tốt nhất cho khách hàng và luôn muốn gắn bó trọn
                  đời với khách hàng.
                </p>
                <h3>
                  Khách hàng sẽ được Công ty chúng tôi hoàn tiền trong các
                  trường hợp sau:
                </h3>
                <ul>
                  <li>
                    <p>CÔNG TY không đáp ứng được đúng yêu cầu về dịch vụ</p>
                  </li>
                  <li>
                    <p>CÔNG TY vi phạm hợp đồng đã kí giữa 2 bên.</p>
                  </li>
                  <li>
                    <p>
                      Khách hàng đã thanh toán nhưng CÔNG TY không thực hiện bàn
                      giao dịch vụ, sản phẩm đúng thời gian trong hợp đồng mà
                      không có lý do chính đáng.
                    </p>
                  </li>
                </ul>
                <h3>
                  Khách hàng sẽ KHÔNG được CÔNG TY hoàn lại tiền trong các
                  trường hợp sau:
                </h3>
                <ul>
                  <li>
                    <p>
                      Khách hàng đơn phương chấm dứt hợp đồng mà không có lý do
                      chính đáng.
                    </p>
                  </li>
                  <li>
                    <p>
                      Khách hàng vi phạm hợp đồng đã ký thỏa thuận giữa 2 bên.
                    </p>
                  </li>
                </ul>
                <h2>
                  CÔNG TY có quyền ngừng cung cấp dịch vụ và không hoàn phí
                  trong các trường hợp sau:
                </h2>
                <ul>
                  <li>
                    <p>
                      Khách hàng sử dụng các chương trình có khả năng làm tắc
                      nghẽn hoặc đình trệ hệ thống, gây cạn kiệt tài nguyên, làm
                      quá tải bộ vi xử lý …….
                    </p>
                  </li>
                </ul>
                <p style={{ marginBottom: "10%" }}>
                  Quý khách vui lòng liên hệ tới nhân viên tư vấn của CÔNG TY để
                  có hướng giải quyết tốt nhất.
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

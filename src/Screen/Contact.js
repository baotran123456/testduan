import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Contact.css";
import Footer from "./footer";
import BeatLoader from "react-spinners/BeatLoader";
import quotation from "../assets/quotation.png";
import bar_icon from "../assets/bar-chart.png";
import teame from "../assets/team.png";
import shop from "../assets/shop.png";
import colla from "../assets/collaboration.png";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import Navbar from "./Navbar";
import NavbarIn from "./NavbarIn";
import image_duce from "../assets/image_duce.jpg";
import about_contact from "../assets/about_contact.png"

const image5 =
  "https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg";

function Navigate() {



  const [loading, setLoading] = useState(false);
  useEffect(() => {


    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const [chxNab, setChxNab] = useState(false);
  useEffect(()=>{
    var getUser = localStorage.getItem("UserUser")
    var data = JSON.parse(getUser)
    
    if (getUser == null) {
    }
  
    if(getUser != null){
      setChxNab(true)
    }
  },)

  let navgate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div className="home">
      <ScrollToTop className="scroll" smooth></ScrollToTop>

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
            <div className="contact_cty">
              <p>Về Công Ty Chúng Tôi</p>
              <div className="contact_cty_hr"></div>
            </div>
            <div className="contact_info">
              <div className="contact_info_left">
                <h1> CÔNG TY VŨ GIA GROUP</h1>
                <div className="contact_info_left__before">
                  <div className="contact_info_left__before__img">
                    <img src={quotation}></img>
                  </div>
                  <p>
                    CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ THƯƠNG MẠI DỊCH VỤ XUẤT NHẬP
                    KHẨU VŨ GIA GROUP. Sự ra đời của công ty nhằm đáp ứng nhu
                    cầu kinh doanh ngành chai nhựa của các đại lý trên toàn
                    quốc, nhất là chai nhựa sử dụng nhiều như chai lọ....vvv
                  </p>
                </div>
                <div className="contact_info_left__note">
                  <div className="contact_info_left__note_italic">
                    <i className="italic_color">Chúng tôi chuyên:</i>
                    <i className="italic_bold">
                      Sản xuất và phân phối các loại chai nhựa trong cuộc sống
                      hàng ngày như chai đựng nước, ly nhựa và các mặt hàng
                      thông dụng khác.
                    </i>
                  </div>
                </div>
              </div>
              <div className="contact_info_right">
                <img src={image_duce}></img>
              </div>
            </div>
            <div className="contact_number">
              <div className="contact_number_auto">
                <div id="transaction-count" className="number">
                  5
                </div>
                <div className="text-xl text-blue-200">
                  {" "}
                  NĂM XÂY DỰNG VÀ PHÁT TRIỂN{" "}
                </div>
              </div>

              <div className="contact_number_auto">
                <div id="city-count" className="number">
                  98
                </div>
                <div className="text-xl text-blue-200">
                  ĐẠI LÝ PHÂN PHỐI TOÀN QUỐC
                </div>
              </div>

              <div className="contact_number_auto">
                <div id="customer-count" className="number">
                  1,500
                </div>
                <div className="text-xl text-blue-200">
                  {" "}
                  SẢN PHẨM ĐA DẠNG, CHẤT LƯỢNG
                </div>
              </div>
            </div>
            <div className="contact_benefit">
              <div className="contact_benefit_img">
                <img src={about_contact} />
              </div>
              <div className="contact_benefit_whybenefit">
                <p className="benefit">LỢI ÍCH TỪ CHÚNG TÔI</p>
                <h1>TẠI SAO CHỌN NHỰA ĐÔNG SÀI GÒN</h1>
                <div className="line"></div>
                <p className="benefit1">
                  NHỰA ĐÔNG SÀI GÒN là một trong những công ty sản xuất và
                  thương mại lớn trên thị trường bao bì. Với 4 ưu điểm:
                </p>

                <div className="contact_benefit_whybenefit_four">
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={bar_icon}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>KINH NGHIỆM HOẠT ĐỘNG LÂU NĂM</h2>
                      <p>
                        Với kinh nghiệm 4 năm hoạt động, chúng tôi luôn thấu
                        hiểu và đáp ứng những nhu cầu của từng khách hàng, từng
                        thị trường.
                      </p>
                    </div>
                  </div>

                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={teame}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>HỢP TÁC VỚI NHIỀU THƯƠNG HIỆU NỔI TIẾNG</h2>
                      <p>
                        Hiện nay chúng tôi là đối tác phân phối cấp 1 của nhiều
                        nhà sản xuất bao bì nổi tiếng
                      </p>
                    </div>
                  </div>
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={shop}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>HỆ THỐNG MỞ RỘNG</h2>
                      <p>
                        Chúng tôi luôn luôn muốn mở rộng để đáp ứng nhu cầu của
                        mọi khách hàng, dủ chỉ là nhu cầu nhỏ nhất.
                      </p>
                    </div>
                  </div>
                  <div className="contact_benefit_whybenefit_four_experience">
                    <div className="image">
                      <div className="image_border">
                        <img src={colla}></img>
                      </div>
                    </div>
                    <div className="be">
                      <h2>NHIỆT TÂM - TẬN TÌNH</h2>
                      <p>
                        Chúng tôi luôn nỗ lực để cung cấp sản phẩm và dịch vụ
                        tốt nhất và giải đáp tận tâm các thắc mắc cho khách
                        hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default Navigate;

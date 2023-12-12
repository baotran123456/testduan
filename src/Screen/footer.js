import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo_cty.png"

import anhXep from "../assets/anhXep.jpg"
import '../css/footer.css'
import { NavLink } from "react-router-dom";

// const link = "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/290060769_743780313625287_2293101306042313153_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=tYrMvqDgsQYAX-0Bjd3&_nc_ht=scontent.fdad1-2.fna&oh=00_AfBy5erLepMsW8zrN7W_QsexkOCq6OfP2kGFdo-3I0wNcA&oe=637D3C08"


function footer() {
    return (
        <div className="footer">
            <div className="footer_container">

                {/* -----------------logo vs namelogo------------------- */}
                <div className="footer_Sort">
                    <div className="form_trademark">
                        <img className="logo_footer" src={logo} />
                    </div>
                </div>

                {/* ----------------thong tin footer---------------------- */}

                <div className="form_information_footer">
                    <div className="form_div">
                        <div className="form_fanpage">
                            <h3>FANPAGE</h3>
                            <div>
                                <a href="https://www.facebook.com/anhtuangoldland.vu"><img className="asd" src={anhXep} style={{ width: "70%" }} /></a>
                            </div>
                        </div>

                        <div className="form_contact">
                            <h3> Công ty TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</h3>
                            <div className="location">

                                <PinDropIcon sx={{ fontSize: "25px", marginRight: '20px' }} />

                                <p> 840/20B Hương Lộ 2, Phường Bình Trị Đông A, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                            </div>
                            <div className="location">

                                <CallIcon sx={{ fontSize: "25px", marginRight: '20px' }} />

                                <p> (84+) 706 185 986</p>
                            </div>
                            <div className="location">
                                <EmailIcon sx={{ fontSize: "25px", marginRight: '20px' }} />
                                <p>vugiagroup@gmail.com</p>
                            </div>
                            <div className="location_nework">
                                <div className="nework_icon">
                                    <FacebookIcon sx={{ fontSize: "15px" }} />
                                </div>
                                <div className="nework_icon">
                                    <YouTubeIcon sx={{ fontSize: "15px" }} />
                                </div>
                                <div className="nework_icon">
                                    <InstagramIcon sx={{ fontSize: "15px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form_div1">
                        <div className="form_people">
                            <h3>Về chúng tôi</h3>
                            <div className="form_people_p" >
                                <div className="form_people_one">
                                    <NavLink to='/Contact' className="form_people_p_me">Giới thiệu</NavLink>
                                    <NavLink to='/Product' className="form_people_p_me">Sản phẩm</NavLink>
                                </div>
                                <div className="form_people_one">
                                    <NavLink to='/Navigate' className="form_people_p_me">Ưu đãi</NavLink>
                                    <NavLink to='/Introduce' className="form_people_p_me">Liên hệ</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="form_people">
                            <h3>Chính sách</h3>
                            <div className="form_people_p" >
                                <div className="form_people_one">
                                    <NavLink className="form_link" to="/baomat">
                                        Chính sách bảo mật
                                    </NavLink>
                                    <NavLink className="form_link" to="/doitra">
                                        Chính sách đổi trả
                                    </NavLink>
                                </div>
                                <div className="form_people_one">
                                    <NavLink className="form_link" to="/thanhtoan">
                                        Chính sách thanh toán
                                    </NavLink>
                                    <NavLink className="form_link" to="/vanchuyen">
                                        Chính sách vận chuyển
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_banquyen">
                    <p>©2022 Bản quyền thuộc về Công Ty TNHH Sản Xuất Đầu Tư TM DV XNK Vũ Gia Group.</p>
                </div>
            </div>
        </div>
    )
}

export default footer;
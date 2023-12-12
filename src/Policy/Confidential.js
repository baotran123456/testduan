import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import '../css/Policy.css'
import Footer from "../Screen/footer";
import ItemNavi from "../item/ItemNavi"
import Loading from "../item/Loading";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect } from "react";
import ScrollToTop from "../Screen/ScrollToTopbtn";
import Navbar from "../Screen/Navbar";
import NavbarIn from "../Screen/NavbarIn";

const logo =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/305305021_5469725353149061_8412010419326309420_n.png?stp=dst-png_p228x119&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7Zi8f3uJ7LcAX-Ahk9V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKEfUaHtXLeMZOTR6YHO_vyTHkbIJMJf_X2Mc2tGwmG7g&oe=6359FA2E";

export default function Confifential() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
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
    }
    return (


        <div>
            <ScrollToTop />
            {loading ? <div className='loading'>
                <BeatLoader
                    color={'#36d7b7'}
                    loading={loading}
                    size={15}
                    margin={5}
                    speedMultiplier={1}
                /></div>
                :
                <div>
                    {chxNab ? <NavbarIn /> : <Navbar />}
                    <div className="policy">
                        <div className="title_header">
                            <h2>Chính sách</h2>
                        </div>
                        <div className="policy_contai">

                            <div className="policy_left">
                                <h1>CHÍNH SÁCH BẢO MẬT</h1>
                                <h2>Thông tin cá nhân nào bị thu thập và tại sao thu thập</h2>
                                <h3>Bình luận</h3>
                                <p>Khi khách truy cập để lại bình luận trên trang web, chúng tôi thu thập dữ liệu được hiển thị trong biểu mẫu bình luận và cũng
                                    là địa chỉ IP của người truy cập và chuỗi user agent của người dùng trình duyệt để giúp phát hiện spam</p>
                                <p>Một chuỗi ẩn danh được tạo từ địa chỉ email của bạn (còn được gọi là hash) có thể được cung cấp cho dịch vụ Gravatar để xem bạn
                                    có đang sử dụng nó hay không. Chính sách bảo mật của dịch vụ Gravatar có tại đây: nhuaquangthienphu.com. Sau khi chấp nhận bình
                                    luận của bạn, ảnh tiểu sử của bạn được hiển thị công khai trong ngữ cảnh bình luận của bạn.</p>
                                <h3>Thư viện</h3>
                                <p>Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên hình ảnh có dữ liệu vị trí được nhúng (EXIF GPS) đi kèm. Khách truy cập
                                    vào trang web có thể tải xuống và giải nén bất kỳ dữ liệu vị trí nào từ hình ảnh trên trang web.</p>
                                <h3>Thông tin liên hệ</h3>
                                <p>Nếu bạn viết bình luận trong website, bạn có thể cung cấp cần nhập tên, email địa chỉ website trong cookie. Các thông tin này nhằm
                                    giúp bạn không cần nhập thông tin nhiều lần khi viết bình luận khác. Cookie này sẽ được lưu giữ trong một năm.</p>
                                <p>Nếu bạn vào trang đăng nhập, chúng tôi sẽ thiết lập một cookie tạm thời để xác định nếu trình duyệt cho phép sử dụng cookie. Cookie
                                    này không bao gồm thông tin cá nhân và sẽ được gỡ bỏ khi bạn đóng trình duyệt.</p>
                                <p>Khi bạn đăng nhập, chúng tôi sẽ thiết lập một vài cookie để lưu thông tin đăng nhập và lựa chọn hiển thị. Thông tin đăng nhập gần nhất
                                    lưu trong hai ngày, và lựa chọn hiển thị gần nhất lưu trong một năm. Nếu bạn chọn “Nhớ tôi”, thông tin đăng nhập sẽ được lưu trong hai tuần.
                                    Nếu bạn thoát tài khoản, thông tin cookie đăng nhập sẽ bị xoá.</p>
                                <p>Nếu bạn sửa hoặc công bố bài viết, một bản cookie bổ sung sẽ được lưu trong trình duyệt. Cookie này không chứa thông tin cá nhân và chỉ đơn
                                    giản bao gồm ID của bài viết bạn đã sửa. Nó tự động hết hạn sau 1 ngày.</p>
                                <h3>Nội dung nhúng từ website khác</h3>
                                <p>Các bài viết trên trang web này có thể bao gồm nội dung được nhúng (ví dụ: video, hình ảnh, bài viết, v.v.). Nội dung được nhúng từ các trang
                                    web khác hoạt động theo cùng một cách chính xác như khi khách truy cập đã truy cập trang web khác.</p>
                                <p>Những website này có thể thu thập dữ liệu về bạn, sử dụng cookie, nhúng các trình theo dõi của bên thứ ba và giám sát tương tác của bạn với nội
                                    dung được nhúng đó, bao gồm theo dõi tương tác của bạn với nội dung được nhúng nếu bạn có tài khoản và đã đăng nhập vào trang web đó.</p>
                                <h3>Phân tích</h3>
                                <h2>Dữ liệu của bạn tồn tại bao lâu</h2>
                                <p>Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô thời hạn. Điều này là để chúng tôi có thể tự động nhận ra và chấp
                                    nhận bất kỳ bình luận nào thay vì giữ chúng trong khu vực đợi kiểm duyệt.</p>
                                <p>Đối với người dùng đăng ký trên trang web của chúng tôi (nếu có), chúng tôi cũng lưu trữ thông tin cá nhân mà họ cung cấp trong hồ sơ người dùng
                                    của họ. Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa thông tin cá nhân của họ bất kỳ lúc nào (ngoại trừ họ không thể thay đổi tên người dùng
                                    của họ). Quản trị viên trang web cũng có thể xem và chỉnh sửa thông tin đó.</p>
                                <h2>Các quyền nào của bạn với dữ liệu của mình</h2>
                                <p>Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận xét, bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về bạn,
                                    bao gồm mọi dữ liệu bạn đã cung cấp cho chúng tôi. Bạn cũng có thể yêu cầu chúng tôi xóa mọi dữ liệu cá nhân mà chúng tôi lưu giữ về bạn.
                                    Điều này không bao gồm bất kỳ dữ liệu nào chúng tôi có nghĩa vụ giữ cho các mục đích hành chính, pháp lý hoặc bảo mật.</p>
                                <h2>Các dữ liệu của bạn được gửi tới đâu</h2>
                                <p>Các bình luận của khách (không phải là thành viên) có thể được kiểm tra thông qua dịch vụ tự động phát hiện spam.</p>
                                <h2>Thông tin liên hệ của bạn</h2>
                                <h2>Thông tin bổ sung</h2>
                                <h3>Cách chúng tôi bảo vệ dữ liệu của bạn</h3>
                                <h3>Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện</h3>
                                <h3>Những bên thứ ba chúng tôi nhận dữ liệu từ đó</h3>
                                <h3>Việc quyết định và/hoặc thu thập thông tin tự động mà chúng tôi áp dụng với dữ liệu người dùng</h3>
                                <h3 style={{ marginBottom: '10%' }}>Các yêu cầu công bố thông tin được quản lý</h3>
                            </div>
                            <div className="policy_right">
                                <div className="policy_right_list">
                                    <h3>Tin tức mới nhất</h3>
                                    <div>
                                        {ItemNavi.map((uudai, index) =>
                                            <div key={index} className="policy_list" >
                                                <img src={uudai.image} />

                                                <h2>{uudai.title}</h2>

                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
}
import axios from "axios";

export default function ItemChiTietDH(props) {
  const ip = "http://localhost:8080";

  let TongTienSP = new Intl.NumberFormat("it-IT").format(props.GiaCX * props.SoLuongSP);
  let GiaCX = new Intl.NumberFormat("it-IT").format(props.GiaCX);
  return (
    <div className="frames_ChiTiet_DH">
      <div className="img_ChiTiet_DH">
        <div>
          {props.Image.map((file, index) => {
            return (
              <img
                key={index}
                src={ip + `/${file[0].filePath}`}
                style={{ borderRadius: "6px" }}
              />
            );
          })}
        </div>
      </div>
      <div className="content_CTDH">
        {/* --------------- tên  ----------------- */}
        <div className="name_ChiTiet_DH">{props.NameSP}</div>
        {/* --------------- Giá chính xác  ----------------- */}
        <div className="name_ChiTiet_DH">{GiaCX}</div>
        {/* --------------- Soluong ----------------- */}
        <div className="soluong_ChiTiet_DH"> SL: {props.SoLuongSP}</div>
        {/* --------------- Tong tien SP ----------------- */}
        <div className="tongTien_ChiTiet_DH">{TongTienSP}</div>
      </div>
    </div>
  );
}

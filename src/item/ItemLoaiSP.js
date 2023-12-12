import axios from "axios";

export default function ItemLoaiSP(props) {
    const ip = "http://localhost:8080";
    return (
        <div >
            <div className="list_type" onClick={() => props.setOnClickLoaiSP(props.NameLoaiSP)}>
                <p>{props.NameLoaiSP.substring(0, 28)}</p>
            </div>
            <div className="line_type"></div>
        </div>
    );
}

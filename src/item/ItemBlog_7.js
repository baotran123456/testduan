
import imgUser from "../assets/boy.png";
import image_thumb_up from "../assets/thumb-up.png"
import image_share from "../assets/share.png"
import image_comments from "../assets/comments.png"
import { useEffect } from "react";
import { useState } from "react";
import Moment from 'moment';

export default function ItemBlog_7(props) {

    const ip = "http://localhost:8080"

    const [chxNab, setChxNab] = useState(false);

    const formatDate = Moment(props.dsBlog.DateBlog).format('LL')


    useEffect(() => {

        if (props.dsBlog.ImageBlog == null) {
        }
        if (props.dsBlog.ImageBlog != null) {
            setChxNab(true)
        }
    })

    //    {chxNab ? <img src={ip + `/uploads/${props.dsBlog.ImageBlog}`} alt="" /> : <img src="" alt="" />}
    // {formatDate}
    // {props.dsBlog.TenBlog}
    // {props.dsBlog.LikeBlog}
    // {props.dsBlog.CmtBlog}
    // {props.dsBlog.ShareBlog}

    return (
        <div className="main_new_bottom_card">
            {chxNab ? <div
                className="main_new_bottom_card_image"
                style={{
                    backgroundImage: `url("${ip}/uploads/${props.dsBlog.ImageBlog}")`,
                    width: "100%",
                    height: "28vh",
                    borderRadius: "20px 20px 0px 0",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div> : <img src="" alt="" />}

            <div className="main_new_bottom_card_image_img">
                <div className="main_new_bottom_card_image_img_container">
                    <img src={imgUser} alt="" />
                </div>
            </div>
            <div className="mmain_new_bottom_card_content">
                <div className="main_new_bottom_card_time">{formatDate}</div>
                <div className="main_new_bottom_card_name">{props.dsBlog.TenBlog}</div>
                <div className="main_new_bottom_card_cws">
                    <div className="main_new_bottom_card_comment">
                        <div className="main_new_bottom_card_comment_image">
                            <img src={image_thumb_up} alt="" />
                        </div>
                        <div className="main_new_bottom_card_comment_content">
                            {props.dsBlog.LikeBlog}
                        </div>
                    </div>

                    <div className="main_new_bottom_card_comment">
                        <div className="main_new_bottom_card_comment_image">
                            <img src={image_comments} alt="" />
                        </div>
                        <div className="main_new_bottom_card_comment_content">
                            {props.dsBlog.CmtBlog}
                        </div>
                    </div>

                    <div className="main_new_bottom_card_comment">
                        <div className="main_new_bottom_card_comment_image">
                            <img src={image_share} alt="" />
                        </div>
                        <div className="main_new_bottom_card_comment_content">
                            {props.dsBlog.ShareBlog}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import image_u from "../assets/userImg1.png"
import image_thumb_up from "../assets/thumb-up.png"
import image_share from "../assets/share.png"
import image_comments from "../assets/comments.png"
import { useEffect } from "react";
import { useState } from "react";
import Moment from 'moment';

export default function ItemBlog_2(props) {

    const ip = "http://localhost:8080"

    const [chxNab, setChxNab] = useState(false);

    const formatDate = Moment(props.dsBlog.DateBlog).format('LLLL')


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
        <div className="main_new_top_small">
            <div className="main_new_top_center_background">
                {chxNab ? <img src={ip + `/uploads/${props.dsBlog.ImageBlog}`} alt="" /> : <img src="" alt="" />}
            </div>
            <div className="main_new_top_center_content">
                <div className="main_new_top_center_big_img">
                    <img src={image_u} alt="" />
                </div>
                <div className="main_new_top_small_card">
                    <div className="main_new_top_center_big_time">
                        {formatDate}
                    </div>
                    <div className="main_new_top_center_title">
                        {props.dsBlog.TenBlog}
                    </div>
                    <div className="main_new_top_center_big_content">
                        <div className="main_new_top_center_number_comment">
                            <div className="main_new_top_center_number_comment_icon">
                                <img src={image_thumb_up} alt="" />
                            </div>
                            <div className="main_new_top_center_coment_content">
                                {props.dsBlog.LikeBlog}
                            </div>
                        </div>
                        <div className="main_new_top_center_number_comment">
                            <div className="main_new_top_center_number_comment_icon">
                                <img src={image_comments} alt="" />
                            </div>
                            <div className="main_new_top_center_coment_content">
                                {props.dsBlog.CmtBlog}
                            </div>
                        </div>
                        <div className="main_new_top_center_number_comment">
                            <div className="main_new_top_center_number_comment_icon">
                                <img src={image_share} alt="" />
                            </div>
                            <div className="main_new_top_center_coment_content">
                                {props.dsBlog.ShareBlog}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { Component } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/News.css'
import Navbar from "./Navbar";
import ItemNavi from "../item/ItemNavi"
import Footer from "./footer";
import BeatLoader from "react-spinners/BeatLoader";
import logo from "../assets/logo_cty.png";
import NavbarIn from "./NavbarIn";
import ScrollToTop from "./ScrollToTopbtn";



function News1(props) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    let location = useLocation();
    const data = location.state;

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
    return (
        <>
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
                    <ScrollToTop />
                    <div className="news" style={{ marginTop: "70px" }}>

                        <div className="news_table">
                            <div className="title_header">
                                <h2>Tin tức & Ưu đãi</h2>
                            </div>
                            <div className="news_table_text">
                                <div className="news_table_left">
                                    <h1>{data.title} </h1>
                                    <img src={data.image}></img>
                                    <p className="news_table_left_p">{data.synopsis}</p>
                                    {data.container.map((container, index) =>
                                        <div key={index} className="news_table_left__content">
                                            <h2>{container.name}</h2>
                                            {container.content.map((content, index) =>
                                                <p key={index}>{content.contentnew}</p>
                                            )}


                                        </div>
                                    )}


                                </div>
                                <div className="policy_right">
                                    <div className="policy_right_list">
                                        <h3>Tin tức mới nhất</h3>
                                        <div>
                                            {ItemNavi.map((uudai, index) =>
                                                <div key={index} className="policy_list" >
                                                    
                                                        
                                                        <Link className="policy_click"  to={{ pathname: `/News/${uudai.id} ` }} state={uudai}  >
                                                            <img src={uudai.image} />
                                                            <h2>{uudai.title}</h2>
                                                         </Link>
                                                    


                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    )
}


export default News1;
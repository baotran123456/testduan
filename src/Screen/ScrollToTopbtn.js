import { useEffect } from "react";
import { useState } from "react";
import toTopimg from "../assets/totop.png"
import imgBot from "../assets/bot.png"

export default function Error() {

    const [backToTopbtn, setBackToTopbtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopbtn(true);
            } else {
                setBackToTopbtn(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopbtn && (
                <img onClick={scrollUp} src={toTopimg} alt="" style={{

                    position: "fixed",
                    bottom: "85px",
                    right: "35px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    zIndex: "999",
                    border: "1.5px solid #bdbdbd",
                    borderRadius: "5px",
                    backgroundColor: "white"
                }} />
            )}
            {/* <img src={imgBot} alt="" style={{

                position: "fixed",
                bottom: "40px",
                right: "40px",
                height: "40px",
                width: "40px",
                fontSize: "50px",
                zIndex: "999",
                border: "1.5px solid #bdbdbd",
                borderRadius: "5px",
                backgroundColor: "white"
            }} /> */}
        </div>
    );
}

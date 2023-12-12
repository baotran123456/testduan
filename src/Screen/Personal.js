import React, { useEffect, useState } from "react";
import "../css/Personal.css";
import BeatLoader from "react-spinners/BeatLoader";
import ScrollToTop from "react-scroll-to-top";
import Peson from "./Peson";
import Error from "./Error"

function Personal() {


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

  return (
    <div className="fersonal">
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
        <>
          {chxNab ? (<Peson />) : (<Error />)}
        </>
      )}
    </div>
  );
}

export default Personal;

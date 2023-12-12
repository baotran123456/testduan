
import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import BeatLoader from "react-spinners/BeatLoader";
import CartIn from "./CartIn";
import Error from "./Error";

const Cart = () => {

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
        <>
          {chxNab ? (<CartIn />) : (<Error />)}
        </>
      )}
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import "../Announce/Announce.css";
import { IoCloseSharp } from "react-icons/io5";

const Announce = () => {
  const [show, setShow] = useState(true);

  var style = null;

  if (show == true) {
    style = {
      backgroundColor: "rgb(115, 115, 229)",
      width: "100%",
      textAlign: "center",
      height: "20px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    };
  } else {
    style = {
      display: "none !important",
      position: "absolute",
      visibility: "hidden",
      backgroundColor: "rgb(5, 5, 9)",
    };
  }

  const handleAnn = () => {
    setShow(false);
    console.log("hii there");
  };

  return (
    <div className="announcement" style={style}>
      <h4>Hurry Up its 40% OFF !!</h4>
      <IoCloseSharp className="cross" size={22} onClick={handleAnn} />
    </div>
  );
};

export default Announce;

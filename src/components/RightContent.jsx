import React from "react";
import qrcodeimg from "../assets/qrcode.png";

const RightContent = () => {
  return (
    <div className="w-1/2 ml-60 ">
      <h1 className="font-jockey text-2xl mb-2 w-full">
        Hello Audrey Mengue
      </h1>
      <p className="text-buttonColor font-jost text-1xl w-full">
        Use your 305 Bank App to scan the QR code below.
      </p>
        <img src={qrcodeimg} alt="Qrcode to scann" className="w-32 h-32 mt-3"/>
    </div>
  );
};

export default RightContent;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoComponent from "../components/LogoComponent";
import LeftContent from "../components/LeftContent";
import qrcode from "../assets/qrcode.png";

function LoginMethod() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="flex justify-center ">
      <div className="flex-1 h-screen ">
        <div className="w-1/2 mx-auto mt-60 ml-96">
          <LogoComponent />
          <h1 className="font-jockey text-2xl mb-2 w-full">
            Authenticate yourself.
          </h1>
          <p className="text-buttonColor font-jost text-1xl w-full">
            Please use one of the following methods to authenticate yourself.
          </p>

          <div className="mt-5">
            <button
              type="submit"
              className="bg-colorGreen text-white rounded-lg p-2 w-32 mr-4  font-jost"
              onClick={() => handleClick(1)}
              style={{ backgroundColor: activeButton === 1 ? "#16C31C" : "grey" }}
            >
              QR Code
            </button>

            
            <button
              type="submit"
              className="bg-colorGreen text-white rounded-lg p-2 w-32 mr-4  font-jost"
              onClick={() => handleClick(2)}
              style={{ backgroundColor: activeButton === 2 ? "#16C31C" : "grey" }}
            >
              OTP
            </button>

            <button
              type="submit"
              className="bg-colorGreen text-white rounded-lg p-2 mr-4  w-32 font-jost"
              onClick={() => handleClick(3)}
              style={{ backgroundColor: activeButton === 3 ? "#16C31C" : "grey" }}
            >
              TOTP
            </button>
          </div>
          <div>
          {activeButton === 1 && (
              <div>
                <img src={qrcode} alt="qrcode image" />
              </div>
            )}
          {activeButton === 2 && <div>Element for Button 2</div>}
            {activeButton === 3 && <div>Element for Button 3</div>}

          </div>
        </div>
      </div>
      <div class="h-80 w-1 bg-gray-900 mt-80"></div>
      <div className="flex-1 h-screen">
        <LeftContent />
      </div>
    </div>
  );
}

export default LoginMethod;

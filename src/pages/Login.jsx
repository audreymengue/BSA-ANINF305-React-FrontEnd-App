import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoComponent from "../components/LogoComponent";
import LeftContent from "../components/LeftContent";

function Login() {
  const [userId, setUserid] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    if (userId === "1234") {
      navigate("/loginmethod"); // redirect to a home page after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex-1 h-screen ">
        <div className="w-1/2 mx-auto mt-60 ml-96">
          <LogoComponent />
          <form onSubmit={handleLogin}>
            <div>
              <input
                className="border  w-80 h-12 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:green-500 mb-6 font-jost"
                placeholder="User ID"
                type="text"
                value={userId}
                onChange={(e) => setUserid(e.target.value)}
              />
            </div>
            <p>Rememeber me</p>
            <button
              type="submit"
              className="bg-buttonColor text-white rounded-lg p-2 w-32 font-jost"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div class="h-80 w-1 bg-gray-900 mt-80"></div>
      <div className="flex-1 h-screen">
        <LeftContent />
      </div>
    </div>
  );
}

export default Login;

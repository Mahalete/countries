import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  navigate("/countries");

  return (
    <div>
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Smart Health Monitoring Wristwatch!
          </h2>
          <div className="bg-gray-300 p-8 bg-opacity-80 rounded-3xl flex space-x-40 items-center shadow-md">
            <h3 class="text-2xl mb-8 text-black-200 ml-8">
              “I HAVEN’T BEEN EVERYWHERE, BUT IT’S ON MY LIST.”- SUSAN SONTAG
            </h3>
            <button
              className="bg-green-200 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
              onClick={navigate}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

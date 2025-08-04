import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create Amazing Content <br /> with{" "}
          <span className="text-primary">AI tools</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
          <button
            className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer"
            onClick={() => (user ? navigate("/ai") : openSignIn())}
          >
            Create
          </button>
          <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 mx-auto text-gray-600">
        <img src={assets.user_group} alt="User Group Icon" className="h-8" />
        <span className="ml-2">Trusted by 10k+ people</span>
      </div>
    </div>
  );
};

export default Hero;

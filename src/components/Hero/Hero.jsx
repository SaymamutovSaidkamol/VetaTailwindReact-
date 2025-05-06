import React from "react";
import { Categories } from "../global/global";

const Hero = () => {
  return (
    <div>
      <section className="border w-full h-[500px] bg-[url(./assets/hero.png)] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center text-white ">
        <div className="">
          <h1 className="text-[50px]">Let's do it together.</h1>
          <p className="text-[17px] opacity-65 mt-5 mb-8">
            We travel the world in search of stories. Come along for the ride.
          </p>
          <button className=" bg-[#DD783F] py-3 px-8 rounded-[3px] cursor-pointer">
            View Latest Posts
          </button>
        </div>
      </section>
      <section>
        <div className="bg-[#FFFFFF] mt-2">
          <ul className="flex justify-center text-center gap-5 text-[#768088]">
            {Categories?.map((link, index) => {
              return (
                <li key={index} className="w-[139px] h-[46px] text-[14px]">
                  <a href={link.path} className="flex items-center justify-center w-full h-full hover:text-[#DD783F]">{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;

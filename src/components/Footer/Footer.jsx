import React from "react";
import { Collaction } from "../global/global";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="w-full h-[378px] bg-[url(./assets/footer.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto h-full flex justify-center items-center text-center flex-col gap-5">
          <h3 className="w-[188px] border-b text-[25px] p-[10px] text-white">
            Stay in Touch
          </h3>

          <div className="flex ">
            <input
              className="bg-white/80 h-[50px] pl-[20px] pr-[20px] w-[300px] rounded-l-[3px] outline-none mb-[89px]"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="w-[125px] h-[50px] bg-white/28 rounded-r-[3px] backdrop-blur-sm text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </footer>
      <footer className="absolute bottom-0 w-full h-[89px] bg-black/50 backdrop-blur-sm z-10 flex justify-center items-center">
        <div className="container flex justify-between text-white">
          <div>Escape.</div>
          <ul className="flex gap-10 uppercase opacity-60">
            {Collaction?.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.path}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

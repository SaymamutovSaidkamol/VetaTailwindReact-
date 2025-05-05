import React from "react";
import Hero from "../Hero/Hero";
import avatar from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import card from "../../assets/card2.png";
import { Card1, Card2 } from "../global/global";

const Menu = () => {
  return (
    <div>
      <Hero />
      <div className="title">
        <span>Featured Posts</span>
      </div>
      <section>
        <div className="container mx-auto grid grid-cols-2">
          {Card1?.map((link, index) => {
            return (
              <div key={index} className="border w-[460px] h-[280px] bg-[url(./assets/card1.png)] bg-no-repeat bg-cover text-white flex flex-col justify-end p-5">
                <div className="p-[20px]">
                  <h3 className="mb-[6px] text-[27px]">{link.title}</h3>
                  <p className="text-[14px] opacity-70">
                    {link.description}
                  </p>
                </div>
                <div className="flex gap-2.5 pl-[20px]">
                  <img src={link.avatar} alt="" />
                  <p className="flex-1 opacity-70">{link.user}</p>
                  <span className="opacity-70">{link.createdAt}</span>
                </div>
              </div>
            );
          })}
          <div className="border w-[460px] h-[280px] bg-[url(./assets/card1.png)] bg-no-repeat bg-cover text-white flex flex-col justify-end p-5 relative">
            <mark className="absolute top-5 left-5 bg-[#DD783F] w-[87px] h-[26px] text-white uppercase rounded-[2px] flex items-center justify-center text-[12px] ">
              Adventure
            </mark>
            <div className="p-[20px]">
              <h3 className="mb-[6px] text-[27px]">The Road Ahead</h3>
              <p className="text-[14px] opacity-70">
                The road ahead might be paved - it might not be.
              </p>
            </div>
            <div className="flex gap-2.5 pl-[20px]">
              <img src={avatar} alt="" />
              <p className="flex-1 opacity-70">Mat Vogels</p>
              <span className="opacity-70">September 25, 2015</span>
            </div>
          </div>
        </div>
      </section>
      <div className="title">
        <span>Most Recent</span>
      </div>
      <section>
        <div className="container mx-auto grid grid-cols-3 mb-[89px] mt-5 gap-6">
          {Card2?.map((link, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-[296px] h-[291px]  bg-white"
              >
                <div>
                  <img className="w-full" src={link.image} alt="" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="p-3.5 flex-1">
                    <h3>{link.title}</h3>
                    <p className="text-[13px] mt-1.5 text-[#7A7A7A]">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex gap-2.5 p-3 border-t items-center text-[#999999]">
                    <img src={link.avatar} alt="" />
                    <p className="flex-1 text-xs">{link.user}</p>
                    <span className="text-xs">{link.createdAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;

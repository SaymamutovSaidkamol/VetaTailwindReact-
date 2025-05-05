import React from "react";
import { Collaction } from "../global/global";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="container mx-auto mt-5">
        <nav className="h-[74px flex items-center justify-between text-white" >
          <div className="font-lora text-[26px]">Escape.</div>
          <ul className="flex gap-10 uppercase ">
            {Collaction?.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.path}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

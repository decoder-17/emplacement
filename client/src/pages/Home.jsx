import React, { useState } from "react";
import { Hero } from "../components/sections/Hero";
import Footer from "../components/layout/Footer";
import Sites from "../components/sections/Sites";
import Features from "../components/sections/Features";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

export default function Home() {
  const [change, setChange] = useState(0);

  const changeComponent = (value) => {
    setChange(value);
  };
  return (
    <div className="Home">
      <div className="change flex gap-8">
        <div className="move-left">
          <BsArrowLeftCircleFill
            className="lefticon mx-4 block -translate-x-8"
            color="white"
            size={40}
            onClick={() => change !== 0 && changeComponent(change - 1)}
          />
        </div>
        <div className="move-right">
          <BsArrowRightCircleFill
            className="righticon mx-4 block translate-x-8"
            color="white"
            size={40}
            onClick={() => change !== 2 && changeComponent(change + 1)}
          />
        </div>
      </div>
      {change === 0 && <Hero />}
      {change === 1 && <Features />}
      {change === 2 && <Sites />}
    </div>
  );
}

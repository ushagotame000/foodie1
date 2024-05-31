import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar w-16  min-h-full border-solid border-t-0 font-medium ">
      <div className="sidebar-option pt-12 pl-8 flex flex-col gap-5">
        <div className="option flex items-center gap-3 border-solid border-r-0 px-2 py-3 rounded-sm cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className=" md:none">Add Items</p>
        </div>
        <div className="option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>
        <div className="option">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

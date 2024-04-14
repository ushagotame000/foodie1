import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FaUserCheck } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaFile } from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="container bg-sky-300  ">
        <div className="left justify-start -ml-11 relative  md:max-w-12">
          {/* adminuser */}
          <div className="admin-user w-72 bg-sky-900 text-white flex-1 p-6 justify-center mt-2  ">
            <FaUserCircle className="w-3/4 h-10  items-center hover:text-gray-400" />
            <div className="flex flex-row justify-center gap-5 text-lg ">
              <span className="hidden md:block">Admin user</span>{" "}
              <button className=" ">
                <IoMdArrowDropdown />
              </button>
            </div>
          </div>

          {/* sidebar */}

          <div className="sidebar-item bg-sky-700 w-72 text-white p-5 text-lg  ">
            <ul>
              <Link to="/random">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10  hover:text-xl  ">
                  <li className="hover:text-gray-400 hover:text-xl  hidden md:block ">
                    {" "}
                    <RxDashboard className="h-8 " /> Dashboard{" "}
                  </li>
                </span>
              </Link>

              <Link to="/RegUser">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <FaUserCheck className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xl hidden md:block">
                    {" "}
                    Reg User{" "}
                  </li>
                </span>
              </Link>

              <Link to="./FoodCategory">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <MdEditSquare className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xlgit  hidden md:block">
                    {" "}
                    Food Category{" "}
                  </li>
                </span>
              </Link>

              <Link to="./FoodMenu">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <MdEditSquare className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xl hidden md:block">
                    Food Menu{" "}
                  </li>
                </span>
              </Link>

              <Link to="./Order.tsx">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <CiCreditCard1 className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xl hidden md:block">
                    {" "}
                    Orders{" "}
                  </li>
                </span>
              </Link>

              <Link to="./Reports">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <FaFile className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xl hidden md:block">
                    {" "}
                    Reports{" "}
                  </li>
                </span>
              </Link>

              <Link to="./Reports">
                <span className=" flex flex-row  gap-6 p-4 gap-x-10">
                  <MdContentPasteSearch className="h-8 " />{" "}
                  <li className="hover:text-gray-400 hover:text-xl hidden md:block">
                    {" "}
                    Search{" "}
                  </li>
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";

import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-2 to-blue-400">
      HIIII
      {/* <img className="logo h-4" src={assets.logo} alt="Logo" /> */}
      <img className="logo max-w-5" src="" alt="Logo" />
      <img className="profile w-9 " src={assets.profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;

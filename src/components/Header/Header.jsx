import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
     <div>
     <ul className="flex justify-center items-center gap-8 py-12">
     <Link to="/">Home</Link>
      <Link to="/login">Login</Link> 
    </ul>
      </div> 
  );
};

export default Header;

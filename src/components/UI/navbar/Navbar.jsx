import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout} style={{marginLeft: '2rem'}}>Log Out</MyButton>
      <div className="navbar__links">
        <Link className="navbar__links_item" to="/about">
          About
        </Link>
        <Link className="navbar__links_item" to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/navber.module.css";

export default function Navber() {
  return (
    <>
      <div>
        <div className={style.navBody}>
          <ul className={style.navUl}>
            <li className={style.navLi}>
              <Link to="/">Home</Link>
            </li>
            <li className={style.navLi}>
              <Link to="/ourservice">Our Service</Link>
            </li>
            <li className={style.navLi}>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className={style.navLi}>
              <Link to="/register">Register</Link>
            </li>
            <li className={style.navLi}>
              <Link to="/login">Login</Link>
            </li>
            <li className={style.navLi}>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

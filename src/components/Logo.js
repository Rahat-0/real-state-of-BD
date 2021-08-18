import React from "react";
import style from '../assets/logo.module.css';

export default function Logo() {
  return (
    <>
      <div className={style.logoBody}>
        <div className={style.logoImg}>
            <a href="google.com"><img src="https://bdrealestateltd.com/wp-content/uploads/2020/09/logo4.jpg" alt="logo"></img></a>
        </div>
        <div className={style.logoTitle}>
          <h1>Real State Of Bangladesh</h1>
        </div>
      </div>
    </>
  );
}

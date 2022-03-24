import React from "react";
import * as style from "./Preloader.module.scss";

export default () => {
  return (
    <>
      <div className={style.bouncing_preloader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

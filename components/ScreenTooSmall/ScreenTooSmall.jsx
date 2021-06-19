import React from "react";
import { H1 } from "../Headings/Headings";
import styles from "../../styles/screenTooSmall.module.css";
const ScreenTooSmall = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen ${styles.wrapper}`}
    >
      <div className="p-10 bg-white rounded-lg flex flex-col justify-center items-center mx-4 shadow-2xl">
        <H1 className="font-black text-gray-600 uppercase text-4xl text-center">
          This app is optimized for the desktop
        </H1>
        <p className="text-gray-600 mt-4 text-center">
          Please visit packagr.tech on a desktop for the ultimate packaging
          experience.
        </p>
      </div>
    </div>
  );
};

export default ScreenTooSmall;

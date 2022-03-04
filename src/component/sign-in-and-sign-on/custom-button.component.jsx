import React from "react";
import "./custom-button.styles.scss";
export const CustomButton = ({ children, isGoogleSign, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
      // className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
    // <button
    //   className={`${isGoogleSign ? "google-sign-in" : ""} custom-button`}
    //   {...otherProps}
    // >
    //   {children}
    // </button>
  );
};

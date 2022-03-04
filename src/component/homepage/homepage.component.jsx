import React from "react";
import "./homepage.styles.scss";
import { MenuDirectory } from "../menu-directory/menu-directory.component.jsx";
const HomePage = () => {
  return (
    <div className="homePage">
      <MenuDirectory />
    </div>
  );
};
export default HomePage;

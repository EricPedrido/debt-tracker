import React from "react";
import SidePanel from "../side-panel/side-panel.components";

import "./main-container.styles.scss";

const MainContainer = ({ children }) => (
  <div className='background'>
    <div className='main-container'>
      <div>{children}</div>
    </div>
    <SidePanel />
  </div>
);

export default MainContainer;

import React from "react";

import "./main-container.styles.scss";

const MainContainer = ({ children }) => (
  <div className='main-container'>
    <div>{children}</div>
  </div>
);

export default MainContainer;

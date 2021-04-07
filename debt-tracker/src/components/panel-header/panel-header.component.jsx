import React from "react";

import { Typography } from "antd";

import "./panel-header.styles.scss";

const PanelHeader = ({ panelText, selected, onClick }) => (
  <div
    className={"panel-header " + (selected ? "selected" : "")}
    onClick={onClick}
  >
    <Typography className='panel-text'>{panelText}</Typography>
  </div>
);

export default PanelHeader;

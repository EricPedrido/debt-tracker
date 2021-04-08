import React from "react";

import InfiniteScroll from "react-infinite-scroller"; // TODO populate list from s3 bucket
import { Button, List, Typography } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import PanelHeader from "../panel-header/panel-header.component";

import "./side-panel.styles.scss";
import { Input, Dropdown } from "antd";

const SidePanel = ({
  leftText,
  rightText,
  leftSelected,
  rightSelected,
  selectLeft,
  selectRight,
}) => (
  <div className='side-panel'>
    <div className='panel-headers'>
      <PanelHeader
        panelText={leftText}
        selected={leftSelected}
        onClick={selectLeft}
      />
      <PanelHeader
        panelText={rightText}
        selected={rightSelected}
        onClick={selectRight}
      />
    </div>
    <Input className='search-bar' placeholder='Search' />
    <div className='panel-list'></div>
    <div className='button-bar'>
      <Button className='round-button' type='primary' shape='round'>
        {<EditOutlined className='icon' />}
      </Button>
      <Button className='round-button' type='primary' shape='round'>
        {<PlusOutlined className='icon' />}
      </Button>
    </div>
  </div>
);

export default SidePanel;

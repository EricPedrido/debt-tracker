import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Button } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

import { togglePeopleExpand } from "../../redux/people/people.actions";
import { selectPeopleExpand } from "../../redux/people/people.selectors";

import "./debt-info.styles.scss";

const DebtInfo = ({ expandPeople, togglePeopleExpand }) => {
  return (
    <div className='expand-button-bar'>
      <Button onClick={togglePeopleExpand}>
        {expandPeople ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
      </Button>
      <Button>
        <DoubleLeftOutlined />
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  expandPeople: selectPeopleExpand,
});

const mapDispatchToProps = (dispatch) => ({
  togglePeopleExpand: () => dispatch(togglePeopleExpand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtInfo);

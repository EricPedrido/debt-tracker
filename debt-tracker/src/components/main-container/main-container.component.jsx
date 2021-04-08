import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPeopleExpand } from "../../redux/people/people.selectors";

import "./main-container.styles.scss";

const MainContainer = ({ children, expandPeople }) => {
  return (
    <div
      className={
        "main-container " + (expandPeople ? "expand-people" : "reverse-people")
      }
    >
      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  expandPeople: selectPeopleExpand,
});

export default connect(mapStateToProps)(MainContainer);

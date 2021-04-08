import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MainContainer from "../../components/main-container/main-container.component";
import SidePanel from "../../components/side-panel/side-panel.components";

import {
  selectDebtees,
  selectDebtors,
} from "../../redux/people/people.actions";
import {
  selectShowDebtees,
  selectShowDebtors,
} from "../../redux/people/people.selectors";

import "./homepage.styles.scss";

const HomePage = ({
  debteesSelected,
  debtorsSelected,
  selectDebtees,
  selectDebtors,
}) => (
  <div>
    <MainContainer />
    <SidePanel
      leftText='Debtees'
      rightText='Debtors'
      leftSelected={debteesSelected}
      rightSelected={debtorsSelected}
      selectLeft={selectDebtees}
      selectRight={selectDebtors}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  debteesSelected: selectShowDebtees,
  debtorsSelected: selectShowDebtors,
});

const mapDispatchToProps = (dispatch) => ({
  selectDebtees: () => dispatch(selectDebtees()),
  selectDebtors: () => dispatch(selectDebtors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

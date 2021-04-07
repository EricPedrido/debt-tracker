import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PanelHeader from "../panel-header/panel-header.component";

import {
  selectDebtees,
  selectDebtors,
} from "../../redux/people/people.actions";
import {
  selectShowDebtees,
  selectShowDebtors,
} from "../../redux/people/people.selectors";

import "./side-panel.styles.scss";

const SidePanel = ({
  debteesSelected,
  debtorsSelected,
  selectDebtees,
  selectDebtors,
}) => (
  <div className='side-panel'>
    <PanelHeader
      panelText='Debtees'
      selected={debteesSelected}
      onClick={selectDebtees}
    />
    <PanelHeader
      panelText='Debtors'
      selected={debtorsSelected}
      onClick={selectDebtors}
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

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MainContainer from "../../components/main-container/main-container.component";
import DebtInfo from "../../components/debt-info/debt-info.component";
import SidePanel from "../../components/side-panel/side-panel.components";

import {
  selectDebtees,
  selectDebtors,
} from "../../redux/people/people.actions";
import {
  selectShowDebtees,
  selectShowDebtors,
} from "../../redux/people/people.selectors";
import { selectItems, selectPayments } from "../../redux/items/items.actions";
import {
  selectShowItems,
  selectShowPayments,
} from "../../redux/items/items.selectors";

import "./homepage.styles.scss";

const HomePage = ({
  debteesSelected,
  debtorsSelected,
  selectDebtees,
  selectDebtors,
  itemsSelected,
  paymentsSelected,
  selectItems,
  selectPayments,
}) => (
  <div className='homepage'>
    <MainContainer>
      <DebtInfo />
    </MainContainer>
    <SidePanel
      leftText='Debtees'
      rightText='Debtors'
      leftSelected={debteesSelected}
      rightSelected={debtorsSelected}
      selectLeft={selectDebtees}
      selectRight={selectDebtors}
    />
    <SidePanel
      leftText='Items'
      rightText='Payments'
      leftSelected={itemsSelected}
      rightSelected={paymentsSelected}
      selectLeft={selectItems}
      selectRight={selectPayments}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  debteesSelected: selectShowDebtees,
  debtorsSelected: selectShowDebtors,
  itemsSelected: selectShowItems,
  paymentsSelected: selectShowPayments,
});

const mapDispatchToProps = (dispatch) => ({
  selectDebtees: () => dispatch(selectDebtees()),
  selectDebtors: () => dispatch(selectDebtors()),
  selectItems: () => dispatch(selectItems()),
  selectPayments: () => dispatch(selectPayments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

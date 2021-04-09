import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPeopleExpand } from '../../redux/people/people.selectors';
import { selectItemsExpand } from '../../redux/items/items.selectors';

import './main-container.styles.scss';

const MainContainer = ({ children, expandPeople, expandItems }) => {
  // add the animation style classes once it has been clicked for the first time
  const setClasses = () => {
    var className = 'main-container ';
    if (typeof expandPeople == 'boolean') {
      return className + (expandPeople ? 'expand-people' : 'reverse-people');
    }
    if (typeof expandItems == 'boolean') {
      return className + (expandItems ? 'expand-items' : 'reverse-items');
    }

    return className;
  };

  return (
    <div className={setClasses()}>
      <div>{children}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  expandPeople: selectPeopleExpand,
  expandItems: selectItemsExpand
});

export default connect(mapStateToProps)(MainContainer);

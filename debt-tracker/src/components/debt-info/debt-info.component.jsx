import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';

import { togglePeopleExpand } from '../../redux/people/people.actions';
import { selectPeopleExpand } from '../../redux/people/people.selectors';
import { toggleItemsExpand } from '../../redux/items/items.actions';
import { selectItemsExpand } from '../../redux/items/items.selectors';

import './debt-info.styles.scss';

const DebtInfo = ({
  expandPeople,
  expandItems,
  togglePeopleExpand,
  toggleItemsExpand,
}) => {
  return (
    <div className='expand-button-bar'>
      <div>
        {!expandItems && (
          <Button onClick={togglePeopleExpand}>
            {expandPeople ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
          </Button>
        )}
      </div>

      {!expandPeople && (
        <Button onClick={toggleItemsExpand}>
          {expandItems ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  expandPeople: selectPeopleExpand,
  expandItems: selectItemsExpand,
});

const mapDispatchToProps = (dispatch) => ({
  togglePeopleExpand: () => dispatch(togglePeopleExpand()),
  toggleItemsExpand: () => dispatch(toggleItemsExpand()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DebtInfo);

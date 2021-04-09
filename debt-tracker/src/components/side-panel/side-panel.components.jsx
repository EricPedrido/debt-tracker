import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import InfiniteScroll from 'react-infinite-scroller'; // TODO populate list from s3 bucket
import { Button, List } from 'antd';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

import PanelHeader from '../panel-header/panel-header.component';
import SidePanelTypes from './side-panel.types';

import { selectPeopleExpand } from '../../redux/people/people.selectors';
import { selectItemsExpand } from '../../redux/items/items.selectors';

import './side-panel.styles.scss';
import { Input } from 'antd';

const SidePanel = ({
  id,
  leftText,
  rightText,
  leftSelected,
  rightSelected,
  selectLeft,
  selectRight,
  peopleExpand,
  itemsExpand,
}) => {
  const setClasses = () => {
    var className = 'side-panel ';

    if (typeof peopleExpand === 'boolean') {
      if (peopleExpand) {
        return className + (id === SidePanelTypes.PEOPLE_PANEL && 'expand-animation')
      } else {
        return className + (id === SidePanelTypes.PEOPLE_PANEL && 'reverse-animation')
      }
    }
    
    if (typeof itemsExpand === 'boolean') {
      if (itemsExpand) {
        return className + (id === SidePanelTypes.ITEM_PANEL && 'expand-animation')
      } else {
        return className + (id === SidePanelTypes.ITEM_PANEL && 'reverse-animation')
      }
    }
    return className;
  };

  return (
    <div className={setClasses()}>
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
};

const mapStateToProps = createStructuredSelector({
  peopleExpand: selectPeopleExpand,
  itemsExpand: selectItemsExpand,
});

export default connect(mapStateToProps)(SidePanel);

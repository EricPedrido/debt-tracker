import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import { TeamOutlined, LogoutOutlined } from '@ant-design/icons';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='people-icon-container'>
      <TeamOutlined className='people-icon' />
    </div>
    <div className='logo-container'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
    </div>
    <div className='sign-out-container'>
      <Link className='sign-out-link' to='/signin'>
        <Typography className='sign-out-text'>Sign Out</Typography>
        <LogoutOutlined className='sign-out' />
      </Link>
    </div>
  </div>
);

export default Header;

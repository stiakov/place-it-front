import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { toggleDrawer as toggleDrawerAction } from '../state/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTicketAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

const Paper = styled.aside`
  position: fixed;
  z-index: ${p => p.theme.zIndex.drawer};
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${p => p.theme.size(16)};
  background: ${p => p.theme.palette.nav.body};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${p => (p.isDrawerOpen ? 0 : `-${p.theme.size(16)}`)});
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${p => p.theme.size(4)};
  background: ${p => p.theme.palette.nav.head};
`;

const Item = styled(Link)`
  color: ${p => p.theme.palette.primary.contrast};
  padding: ${p => p.theme.size(1)} ${p => p.theme.size(2)};
  transition: background-color 0.1s ease-out;
  text-decoration: none;
  &:hover {
    background: ${p => p.theme.palette.nav.hover};
  }
  cursor: pointer;
`;

const items = [
  { url: '/', name: 'Películas', icon: faTicketAlt },
  { url: '/reservations/', name: 'Reservas', icon: faCalendarAlt },
];

const Drawer = ({ isDrawerOpen, toggleDrawer }) => (
  <Paper isDrawerOpen={isDrawerOpen}>
    <Header />
    {items.map(item => (
      <Item key={item.url} to={item.url} onClick={() => toggleDrawer(false)}>
        <FontAwesomeIcon
          css={css`
            margin-right: 0.8rem;
          `}
          icon={item.icon}
        />
        {item.name}
      </Item>
    ))}
  </Paper>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Drawer);

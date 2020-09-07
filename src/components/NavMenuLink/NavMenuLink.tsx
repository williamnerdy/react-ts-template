import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export type Props = {
  url: string;
  children: string;
};

const NavMenuLink = ({ url, children }: Props) => (
  <Nav.Link as={NavLink} to={url} exact={url === '/'}>
    {children}
  </Nav.Link>
);

export default NavMenuLink;

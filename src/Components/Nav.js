import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import {NavLink} from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='font'>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Task</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className='nav-link links' activeClassName='links-active' exact to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link links' activeClassName='links-active'  exact to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link links' activeClassName='links-active'  exact to="/faq">Faq</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

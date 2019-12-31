import React, { useState } from 'react';
import { APP_NAME } from '../config';
import Link from 'next/link';
import {signout, isAuth} from '../actions/auth';
import Router from 'next/router';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md">
        <NavLink className="font-weight-bold p-0" href="/">
          {APP_NAME}
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {!isAuth() && (
            <React.Fragment>
              <NavItem>
                <NavLink href="/signin">
                    Signin
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/signup">
                    Signup
                </NavLink>
              </NavItem>
            </React.Fragment>
            )}

            {isAuth() && (<NavItem>
              <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => { Router.replace(`/signin`) })}>
                  Signout
              </NavLink>
            </NavItem>)}
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;
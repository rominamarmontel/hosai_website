import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";
import logoImage from "../logo1.png";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        className="my-navbar"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logoImage} alt="logo" width={"389"} height={"52"}></img>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end pt-2" activeKey="/">
              <Nav.Item>
                <Nav.Link href="/about">
                  <h3 className="headerLists">About</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/estimate">
                  <h3 className="headerLists">Estimate</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/eshop">
                  <h3 className="headerLists">Store</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">
                  <h3 className="headerLists">Contact</h3>
                </Nav.Link>
              </Nav.Item>

              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart mt-3 size"></i>
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user mt-3 mx-3 size"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/topiclist">
                    <NavDropdown.Item>Topics</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

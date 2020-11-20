import { useAuth } from "../../util/authContext";
import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import CustomNavLink from "./CustomNavLink"


function NavigationBar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/">Cryptolabz</Navbar.Brand>
    <Nav className="mr-auto">
      <CustomNavLink
      exact 
      to="/">Home</CustomNavLink>
      <CustomNavLink 
      exact
      to="/coins"
     >Coins
      </CustomNavLink>
    </Nav>
      {isLoggedIn || (
        <CustomNavLink
        
        to="/login"
        
        >
          Login
        </CustomNavLink>
      )}
      {isLoggedIn || (
        <CustomNavLink
        
        to="/signup"
        
        >
          Signup
        </CustomNavLink>
      )}
      {isLoggedIn && (
        <CustomNavLink
       
        to="/protected/example"
       
        >
          Portfolio
        </CustomNavLink>
      )}
      {isLoggedIn && <button onClick={logout}>Logout</button>}

    </Navbar>
  );
}
export default NavigationBar;

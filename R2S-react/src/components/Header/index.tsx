import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";
import DrawerApp from "../Drawer";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
  return (
    <div className="headerContainer">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Student Management</Link>
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Link to="/major">Major</Link>
            <Link to="/student">Student</Link>
            <DrawerApp />
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>welcome to ...</Navbar.Text>
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faArrowRightFromBracket}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

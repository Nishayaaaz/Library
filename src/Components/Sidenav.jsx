import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCubesStacked, faUser, faAddressBook, faBookBookmark, } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types"

const Sidenav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faCubesStacked} />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      path: "/authors",
      name: "Author Management",
      icon: <FontAwesomeIcon icon={faAddressBook} />,
    },
    {
      path: "/books",
      name: "Book Management",
      icon: <FontAwesomeIcon icon={faBookBookmark} />,
    },
  ];
  return (
    <div className="container-fluid d-flex p-0">
      <div className="sidebar" style={{ width: isOpen ? "300px" : "50px" }}>
        <div className="top-selection">
          <h2 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Logo
          </h2>
          <div className="menuBar">
            <FontAwesomeIcon icon={faBars} className="fs-3" onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="link">
            <div className="icon fs-4">{item.icon}</div>
            <div
              className="link-text fs-5"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        <div className="main-container">{children}</div>
      </main>
    </div>
  );
};

export default Sidenav;

Sidenav.propTypes = {
  children: PropTypes.node
}
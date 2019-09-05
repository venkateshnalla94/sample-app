import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "../Pages/CSS files/Landing_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faListAlt,
  faGift,
  faBlog,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Route, Link, Switch } from "react-router-dom";

import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import SecondJob from "../Pages/SecondJob";
import LandingFreeDemo from "../../../pages/landing/LandingFreeDemo";

import LandingComment from "../../../pages/landing/LandingComment";
import Footer from "../../../components/Footer";
// window.onscroll = function() {
//   myFunction();
// };
// var navbar = document.getElementById("nav_bar");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
const First_Page = () => {
  //
  return (
    <div>
      <div className="nav_bar">
        <Navbar expand="lg" variant="light" bg="dark">
          <Container>
            <Navbar.Brand id="navbar_content" href="#">
              CreativeTim
            </Navbar.Brand>
            <Navbar.Brand id="navbar_content" href="#">
              <FontAwesomeIcon icon={faSearch} style={{ cursor: "pointer" }} />
            </Navbar.Brand>
            <Navbar.Brand id="navbar_content" href="#">
              <FontAwesomeIcon icon={faListAlt} style={{ cursor: "pointer" }} />
            </Navbar.Brand>

            <Link id="navbar_content" to="Dashboard">
              <FontAwesomeIcon
                icon={faGift}
                style={{ cursor: "pointer" }}
                to="/NavigationDashboard"
              />
            </Link>

            <Navbar.Brand id="navbar_content" href="#">
              <FontAwesomeIcon icon={faBlog} style={{ cursor: "pointer" }} />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <div className="row" style={{ height: "3400px" }}>
        <div id="grad1">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <img src="https://s3.amazonaws.com/creativetim_bucket/products/171/original/opt_nukp_react_thumbnail.jpg?1564486765" />
              </div>
              <div className="col-sm-6" id="desc">
                <h1 id="item">Now UI Kit PRO React</h1>
                <h6 className="tagline" id="item_tagline">
                  Premium Bootstrap 4 And Reactstrap Ui Kit
                </h6>
                <p className="text-center">
                  License&nbsp;&nbsp;
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    style={{ cursor: "pointer" }}
                  />
                </p>
                <hr className="line_break" />
                <ButtonToolbar id="toolBar">
                  <Button variant="light" id="primary_button">
                    ADD TO CART . $79
                  </Button>
                  <Button id="secondary_button" variant="outline-light">
                    Live Preview
                  </Button>
                  <Button id="ternary_button" variant="secondary">
                    Docs
                  </Button>
                </ButtonToolbar>
              </div>
            </div>
          </div>
          <div className="col" id="secondComponent">
            <SecondJob />
          </div>

          <LandingFreeDemo />
          <LandingComment />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default First_Page;

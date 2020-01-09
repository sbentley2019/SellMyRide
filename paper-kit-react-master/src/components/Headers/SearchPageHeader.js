import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  FormGroup,
  Row,
  Col,
  Button,
  ButtonDropdown,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Slider from "nouislider";

// core components

function SearchPageHeader() {
  let pageHeader = React.createRef();

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }

    // if (
    //   !document.getElementById("sliderDouble").classList.contains("noUi-target")
    // ) {
    //   Slider.create(document.getElementById("sliderDouble"), {
    //     start: [200, 800],
    //     connect: [false, true, false],
    //     step: 1,
    //     range: { min: 0, max: 1000 }
    //   });
    // }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/racetrack.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <Container>
          <div className="filter" />
          <div className="motto text-center">
            <Row>
              <Col>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>Vehicle Make</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Audi</DropdownItem>
                    <DropdownItem>BMW</DropdownItem>
                    <DropdownItem>Subaru</DropdownItem>
                    <DropdownItem>Tesla</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col>
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>Vehicle Model</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Crosstrek</DropdownItem>
                    <DropdownItem>Impreza</DropdownItem>
                    <DropdownItem>STI</DropdownItem>
                    <DropdownItem>WRX</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col>
                <FormGroup>
                  <Input className="transparent-input" placeholder="Enter your location here" type="text" />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Button
              className="btn-round"
              size="lg"
              color="primary"
              type="button"
              href="/results"
              target=""
              outline
            >
              Find my ride!
            </Button>
          </div>

          {/* <Col lg="3" sm="6">
            <div className="title">
              <h3>Kilometers ('000s)</h3>
            </div>
            <div className="slider" id="sliderRegular" />
            <br />
            <div className="slider slider-primary" id="sliderDouble" />
          </Col>

          <Col lg="3" sm="6">
            <div className="title">
              <h3>Price</h3>
            </div>
            <div className="slider" id="sliderRegular" />
            <br />
            <div className="slider slider-primary" id="sliderDouble" />
          </Col> */}


        </Container>
      </div>
    </>
  );
}

export default SearchPageHeader;

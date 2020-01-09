import React, { useState } from "react";

// reactstrap components
import {
  Button,
  ButtonDropdown,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col
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

    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [200, 800],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 1000 }
      });
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Find your perfect ride:</h1>
            <br />

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Make</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Audi</DropdownItem>
                <DropdownItem>BMW</DropdownItem>
                <DropdownItem>Subaru</DropdownItem>
                <DropdownItem>Tesla</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <br />

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Model</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Crosstrek</DropdownItem>
                <DropdownItem>Impreza</DropdownItem>
                <DropdownItem>STI</DropdownItem>
                <DropdownItem>WRX</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

            <Col lg="3" sm="6">
              <div className="title">
                <h3>Kilometers ('000s)</h3>
              </div>
              <div className="slider" id="sliderRegular" />
              <br />
              <div className="slider slider-primary" id="sliderDouble" />
            </Col>
          <Button
            className="btn-round"
            color="success"
            type="button"
            href="/results"
            target=""
          >
            Search
          </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchPageHeader;

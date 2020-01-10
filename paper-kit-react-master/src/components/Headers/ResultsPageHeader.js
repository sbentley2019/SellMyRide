import React, { useState } from "react";

// reactstrap components
import {
  Button,
  ButtonDropdown,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  FormGroup,
  Label,
  Input
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
      !document.getElementById("sliderKms").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderKms"), {
        start: [200, 800],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 1000 }
      });
    }

    if (
      !document.getElementById("sliderPrice").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderPrice"), {
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
          backgroundImage: "url(" + require("assets/img/racetrack.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1># vehicles found!</h1>
            <br />
            <h3>Want to further refine your search?</h3>
            <br />
            <Col>
              <div className="motto text-center">
                <Col lg="3" sm="6">
                  <div className="title">
                    <h4>Kilometers ('000s)</h4>
                  </div>
                  <div className="slider" id="sliderRegular" />
                  <br />
                  <div className="slider slider-primary" id="sliderKms" />
                </Col>

                <Col lg="3" sm="6">
                  <div className="title">
                    <h4>Price</h4>
                  </div>
                  <div className="slider" id="sliderRegular" />
                  <br />
                  <div className="slider slider-primary" id="sliderPrice" />
                </Col>

                <Col lg="3" sm="6">
                  <div className="title">
                    <h4>Condition</h4>
                  </div>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      New <span className="form-check-sign" />
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      Used <span className="form-check-sign" />
                    </Label>
                  </FormGroup>
                </Col>
              </div>
            </Col>

            <Button
              className="btn-round"
              color="primary"
              type="button"
              href="/results" // change state so it refeshes search (on same page)
              target=""
              outline
            >
              Refine search
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchPageHeader;

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
  Dropdown,
  DropdownMenu,
  DropdownItem,
  FormFeedback,
  Label,
  FormText
} from "reactstrap";

import Slider from "nouislider";

// core components

function NewVehicleListingHeader() {
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
          <div className="motto text-center">
            <h1>Selling your ride? </h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NewVehicleListingHeader;

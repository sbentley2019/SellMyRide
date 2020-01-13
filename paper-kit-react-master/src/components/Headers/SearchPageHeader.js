import React, { useState, useEffect } from "react";
import axios from "axios";

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

function SearchPageHeader(props) {
  const [makeArr, setMakeArr] = useState([]);
  const [modelArr, setModelArr] = useState([]);
  const [make, setMake] = useState("all");
  const [model, setModel] = useState("all");

  let pageHeader = React.createRef();

  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownOpen2, setOpen2] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setOpen2(!dropdownOpen2);

  useEffect(() => {
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

    axios.get("/api/listing/make").then(res => {
      setMakeArr(res.data.map(listing => listing.make));
    });
  }, [make]);

  useEffect(() => {
    console.log(model);
  }, [model]);

  const sendMake = function(e) {
    setMake(e);
    setModel("all");
    axios.get(`/api/listing/make/${e}`).then(res => {
      setModelArr(res.data.map(listing => listing.model));
    });
  };

  const searchListing = function(e) {
    e.preventDefault();
    axios
      .get(
        `/api/listing${
          make === `all`
            ? ``
            : model === "all"
            ? `/make/${make}/model/all`
            : `/make/${make}/model/${model}`
        }`
      )
      .then(res => {
        props.setResults(res.data.map(listing => listing));
      });
  };

  // React.useEffect(() => {
  //   if (window.innerWidth < 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }

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
  // });

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
                  <DropdownToggle caret>
                    {make !== "all" ? make : "--Select Make--"}
                  </DropdownToggle>
                  <DropdownMenu
                    modifiers={{
                      setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: data => {
                          return {
                            ...data,
                            styles: {
                              ...data.styles,
                              overflow: "auto",
                              maxHeight: 300
                            }
                          };
                        }
                      }
                    }}
                  >
                    <DropdownItem
                      onClick={e => {
                        e.preventDefault();
                        setMake("all");
                        setModel("all");
                      }}
                    >
                      --Select Make--
                    </DropdownItem>
                    {makeArr.map(make => (
                      <DropdownItem
                        value={make}
                        onClick={e => {
                          e.preventDefault();
                          sendMake(e.target.value);
                        }}
                      >
                        {make}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col>
                <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
                  <DropdownToggle caret>
                    {model !== "all" ? model : "--Select Model--"}
                  </DropdownToggle>
                  <DropdownMenu
                    modifiers={{
                      setMaxHeight: {
                        enabled: true,
                        order: 890,
                        fn: data => {
                          return {
                            ...data,
                            styles: {
                              ...data.styles,
                              overflow: "auto",
                              maxHeight: 300
                            }
                          };
                        }
                      }
                    }}
                  >
                    <DropdownItem
                      onClick={e => {
                        e.preventDefault();
                        setModel("all");
                      }}
                    >
                      --Select Model--
                    </DropdownItem>
                    {modelArr.map(model => (
                      <DropdownItem
                        value={model}
                        onClick={e => {
                          e.preventDefault();
                          setModel(e.target.value);
                        }}
                      >
                        {model}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    className="transparent-input"
                    placeholder="Enter your location here"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Button
              className="btn-round"
              size="lg"
              color="primary"
              type="button"
              onClick={searchListing}
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

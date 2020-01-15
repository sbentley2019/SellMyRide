import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultSection from "components/Sections/ResultSection.js";

// reactstrap components
import {
  Input,
  FormGroup,
  Row,
  Col,
  Button,
  ButtonDropdown,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

// core components

function SearchPageHeader(props) {
  const [makeArr, setMakeArr] = useState([]);
  const [modelArr, setModelArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [state, setState] = useState({ make: "", model: "", location: "" });

  let pageHeader = React.createRef();

  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownOpen2, setOpen2] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setOpen2(!dropdownOpen2);

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

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

    axios.get("/api/listing/make").then(res => {
      setMakeArr(res.data.map(listing => listing.make));
    });
  }, []);

  useEffect(() => {
    if (state.location) {
      axios.get(`/api/listing/input/location/${state.location}`).then(res => {
        setLocationArr(res.data.map(listing => listing.city));
      });
    }
    console.log(state.location);
  }, [state.location]);

  const sendMake = function(e) {
    setState({ ...state, make: e, model: "" });
    axios.get(`/api/listing/findModel/${e}`).then(res => {
      setModelArr(res.data.map(listing => listing.model));
    });
  };

  const searchListing = function(e) {
    e.preventDefault();
    let url = `/api/listing`;
    if (state.make) url += `/make/${state.make}`;
    if (state.model) url += `/model/${state.model}`;
    if (state.location) url += `/location/${state.location}`;
    axios.get(url).then(res => {
      props.setResults(res.data.map(listing => listing));
    });
  };

  const modalClick = function(e) {
    e.preventDefault();
    let url = `/api/listing`;
    if (state.make) url += `/make/${state.make}`;
    if (state.model) url += `/model/${state.model}`;
    if (state.location) url += `/location/${state.location}`;
    axios.get(url).then(res => {
      props.setResults(res.data.map(listing => listing));
      console.log("aaaa");
      setModal(true);
    });
  };

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
                    {state.make !== "" ? state.make : "Select Make"}
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
                        setState({ ...state, make: "", model: "" });
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
                    {state.model !== "" ? state.model : "Select Model"}
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
                        setState({ ...state, model: "" });
                      }}
                    >
                      --Select Model--
                    </DropdownItem>
                    {modelArr.map(model => (
                      <DropdownItem
                        value={model}
                        onClick={e => {
                          e.preventDefault();
                          setState({ ...state, model: e.target.value });
                        }}
                      >
                        {model}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col>
                <FormGroup className="location-container">
                  <Input
                    className="transparent-input"
                    placeholder="Enter your location here"
                    value={state.location}
                    onChange={e => {
                      setState({ ...state, location: e.target.value });
                    }}
                    type="text"
                  />
                  <div className="location-search">
                    <ul>
                      {locationArr.map(place => {
                        return (
                          <li
                            value={place}
                            onClick={e => {
                              //setState is not setting location as place
                              // setState({ ...state, location: place });
                              console.log("clicked");
                            }}
                          >
                            {place}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* <div>
              <Button
                className="btn-round"
                size="lg"
                color="primary"
                type="button"
                onClick={searchListing}
                // onClick={e => console.log(state)}
                outline
              >
                Find my ride!
              </Button>
            </div> */}

            <div>
              <br />
              <Button
                className="btn-round"
                color="success"
                size="lg"
                onClick={modalClick}
                outline
              >
                Find my ride!
              </Button>
              <Modal isOpen={modal} toggle={modalToggle} className={className} size="lg" style={{maxWidth: '1600px', width: '90%'}}>
                <ModalHeader toggle={modalToggle}>
                  <h3>View Search Results</h3>
                </ModalHeader>
                <ModalBody>
                  <div id="search-results">
                    {props.results.length !== 0 && (
                      <ResultSection results={props.results} />
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="btn-round"
                    color="primary"
                    onClick={modalToggle}
                    outline
                  >
                    Return to Search
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SearchPageHeader;

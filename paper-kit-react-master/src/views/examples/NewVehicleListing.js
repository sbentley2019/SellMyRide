import React, { useState, useEffect } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewListingPageHeader from "components/Headers/NewListingPageHeader.js";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  FormGroup,
  Col,
  ButtonDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  FormFeedback,
  Label,
  FormText
} from "reactstrap";

function VehicleListing(props) {
  const [cookies, setCookie] = useCookies(["name", "user_id"]);
  if (!cookies.user_id) {
    window.location.replace("/login");
  }
  let data = useLocation();

  const [makeArr, setMakeArr] = useState([]);
  const [modelArr, setModelArr] = useState([]);

  const [imageurl, setImageurl] = useState(
    data.state ? data.state.result.listing_image : ""
  );

  const id = data.state ? data.state.result.id : false;
  const [state, setState] = useState({
    make: data.state ? data.state.result.make : "",
    model: data.state ? data.state.result.model : "",
    year: data.state ? data.state.result.year : "",
    listing_image: "",
    price: data.state ? data.state.result.price : "",
    kms: data.state ? data.state.result.kms : "",
    city: data.state ? data.state.result.city : "",
    description: data.state ? data.state.result.description : "",
    exterior_colour: data.state ? data.state.result.exterior_colour : ""
  });

  let pageHeader = React.createRef();

  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownOpen2, setOpen2] = useState(false);
  const [dropdownOpen3, setOpen3] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setOpen2(!dropdownOpen2);
  const toggle3 = () => setOpen3(!dropdownOpen3);

  let yearArr = [];
  for (let i = 2020; i >= 1970; i--) {
    yearArr.push(i);
  }
  document.documentElement.classList.remove("nav-open");

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

    axios.get("http://localhost:8001/api/makeModel/make").then(res => {
      setMakeArr(res.data.map(listing => listing.make));
    });

    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }, []);

  const sendMake = function(e) {
    setState({ ...state, make: e, model: "" });
    axios.get(`/api/makeModel/make/${e}`).then(res => {
      setModelArr(res.data.map(listing => listing.model));
    });
  };

  const createListing = function(data) {
    let dbObj;
    let imageArray = [];

    if (!state.listing_image) {
      imageArray = imageurl.split(",");
      dbObj = {
        ...state,
        user_id: cookies.user_id,
        listing_image: imageArray[0]
      };
    } else {
      dbObj = { ...state, user_id: cookies.user_id };
    }

    if (
      dbObj.make &&
      dbObj.model &&
      dbObj.year &&
      dbObj.listing_image &&
      dbObj.price &&
      dbObj.kms &&
      dbObj.city &&
      dbObj.description &&
      dbObj.exterior_colour &&
      dbObj.user_id
    ) {
      if (id) {
        dbObj.id = id;
        axios.put(`/api/listing/modify`, dbObj).then(res => {
          window.location.replace("/profile");
        });
      } else {
        axios.put(`/api/listing`, dbObj);
        axios
          .get(`/api/listing/user/${dbObj.user_id}`)
          .then(res => {
            let data = res.data;
            let id;
            data.forEach(car => {
              if (
                dbObj.city === car.city &&
                dbObj.description === car.description
              ) {
                console.log("Hello!!");
                id = car.id;
                axios.put(`/api/car_images/array/${id}`, imageArray);
              }
            });
          })
          .then(() => {
            window.location.replace("/profile");
          });
      }
    }
  };

  return (
    <>
      <IndexNavbar />
      <NewListingPageHeader />
      {/* <NewVehicleListingHeader /> */}
      <div className="main">
        <div className="section text-center">
          <Container>
            <Container>
              <div className="motto text-center">
                {/* <h1>Selling your ride? </h1> */}
                {/* <h3>Provide some details below:</h3> */}
                <br />

                <Form>
                  <Row className="listMenu">
                    <FormGroup>
                      <Col sm={10}>
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle caret>
                            {state.make ? state.make : "Select Make"}
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
                    </FormGroup>
                    <FormGroup>
                      <Col sm={10}>
                        <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
                          <DropdownToggle caret>
                            {state.model ? state.model : "Select Model"}
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
                    </FormGroup>
                    <FormGroup>
                      <Col sm={10}>
                        <ButtonDropdown isOpen={dropdownOpen3} toggle={toggle3}>
                          <DropdownToggle caret>
                            {state.year ? state.year : "Select Year"}
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
                            {yearArr.map(year => (
                              <DropdownItem
                                value={year}
                                onClick={e => {
                                  e.preventDefault();
                                  setState({ ...state, year: e.target.value });
                                }}
                              >
                                {year}
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </ButtonDropdown>
                      </Col>
                    </FormGroup>
                  </Row>

                  <FormGroup row>
                    <Label for="formkms" sm={2}>
                      Kilometers ('000s)
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        name="text"
                        id="formkms"
                        value={state.kms}
                        onChange={e => {
                          setState({ ...state, kms: e.target.value });
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="formPrice" sm={2}>
                      Price
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        name="text"
                        id="formPrice"
                        value={state.price}
                        onChange={e => {
                          setState({ ...state, price: e.target.value });
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="formCity" sm={2}>
                      Postal Code <br /> (e.g. A1A1A1)
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textbox"
                        name="text"
                        id="formCity"
                        value={state.city}
                        onChange={e => {
                          setState({ ...state, city: e.target.value });
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="formDesc" sm={2}>
                      Description
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="text"
                        id="formDesc"
                        value={state.description}
                        onChange={e => {
                          setState({ ...state, description: e.target.value });
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="formColour" sm={2}>
                      Exterior colour
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="text"
                        min="0"
                        step="1"
                        name="formColour"
                        id="formColour"
                        value={state.exterior_colour}
                        onChange={e => {
                          setState({
                            ...state,
                            exterior_colour: e.target.value
                          });
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="formPic" sm={2}>
                      Add Photos
                    </Label>
                    <div className="inputFormPic" sm={10}>
                      <Col>
                        <Input
                          type="file"
                          name="file"
                          id="formPic"
                          value={state.listing_image}
                          onChange={e => {
                            setState({
                              ...state,
                              listing_image: e.target.value
                            });
                          }}
                        />
                      </Col>
                      <span>OR</span>
                      <Col sm={8}>
                        <Input
                          type="text"
                          value={imageurl}
                          placeholder="http://"
                          onChange={e => {
                            setImageurl(e.target.value);
                          }}
                        />
                      </Col>
                    </div>
                  </FormGroup>

                  <FormGroup check row>
                    <Col>
                      <Button
                        className="btn-round"
                        color="success"
                        onClick={createListing}
                        /* href="/profile" */
                        outline
                      >
                        List my ride!
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
}

export default VehicleListing;

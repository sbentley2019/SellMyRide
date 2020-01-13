import React, { useState, useEffect } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewListingPageHeader from "components/Headers/NewListingPageHeader.js";
import { useCookies } from "react-cookie";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
  const [makeArr, setMakeArr] = useState([]);
  const [modelArr, setModelArr] = useState([]);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [kms, setKms] = useState("");
  const [city, setCity] = useState("");

  let pageHeader = React.createRef();

  const [dropdownOpen, setOpen] = useState(false);
  const [dropdownOpen2, setOpen2] = useState(false);
  const [dropdownOpen3, setOpen3] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const toggle2 = () => setOpen2(!dropdownOpen2);
  const toggle3 = () => setOpen3(!dropdownOpen3);

  let yearArr = [];
  for (let i = 1970; i <= 2020; i++) {
    yearArr.push(i);
  }

  document.documentElement.classList.remove("nav-open");

  const [cookies, setCookie] = useCookies(["name", "user_id"]);

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

    axios.get("http://localhost:8001/api/makeModel/make").then(res => {
      setMakeArr(res.data.map(listing => listing.make));
      console.log(res.data);
    });

    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }, []);

  const sendMake = function(e) {
    setMake(e);
    setModel("");
    axios.get(`/api/makeModel/make/${e}`).then(res => {
      setModelArr(res.data.map(listing => listing.model));
      console.log(res.data);
    });
  };

  const createListing = function(data) {
    /*     kms = kms.replace(/[^\d\.\-\ ]/g, '');
    price = price.replace(/[^\d\.\-\ ]/g, ''); */

    let listingObj = {};
    listingObj["make"] = make;
    listingObj["model"] = model;
    listingObj["year"] = year;
    listingObj["user_id"] = 1;
    listingObj["listing_image"] = image;
    listingObj["price"] = parseInt(price);
    listingObj["kms"] = parseInt(kms);
    listingObj["city"] = city;

    axios.put(`/api/listing`, listingObj);
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
                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select Make
                    </Label>
                    <Col sm={10}>
                      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                          {make ? make : "Select Make"}
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

                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select Model
                    </Label>
                    <Col sm={10}>
                      <ButtonDropdown isOpen={dropdownOpen2} toggle={toggle2}>
                        <DropdownToggle caret>
                          {model ? model : "Select Model"}
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
                                setModel(e.target.value);
                              }}
                            >
                              {model}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </ButtonDropdown>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select Year
                    </Label>
                    <Col sm={10}>
                      <ButtonDropdown isOpen={dropdownOpen3} toggle={toggle3}>
                        <DropdownToggle caret>
                          {year ? year : "Select Year"}
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
                                setYear(e.target.value);
                              }}
                            >
                              {year}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </ButtonDropdown>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Kilometers ('000s)
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        name="text"
                        id="exampleText"
                        value={kms}
                        onChange={e => {
                          setKms(e.target.value);
                        }}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Price
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        name="text"
                        id="exampleText"
                        value={price}
                        onChange={e => {
                          setPrice(e.target.value);
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      City
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="text"
                        id="exampleText"
                        value={city}
                        onChange={e => {
                          setCity(e.target.value);
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Description
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="textarea"
                        name="text"
                        id="exampleText"
                        value={city}
                        onChange={e => {
                          setCity(e.target.value);
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleFile" sm={2}>
                      Add Photos
                    </Label>
                    <Col sm={10}>
                      <Input
                        type="file"
                        name="file"
                        id="exampleFile"
                        value={image}
                        onChange={e => {
                          setImage(e.target.value);
                        }}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col>
                      <Button
                        className="btn-round"
                        color="success"
                        href="/listing"
                        onClick={createListing}
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

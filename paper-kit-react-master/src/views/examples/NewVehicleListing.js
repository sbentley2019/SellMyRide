import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewVehicleListingHeader from "components/Headers/NewVehicleListingHeader.js";
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

function VehicleListing() {
  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name"]);

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      {/* <NewVehicleListingHeader /> */}
      <div className="main">
        <div className="section text-center">
          <Container>
            <Container>
              <div className="motto text-center">
                <h1>Selling your ride? </h1>
                <h3>Provide some details below:</h3>
                <br />

                <Form>
                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select Make
                    </Label>
                    <Col sm={10}>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Honda</option>
                        <option>Subaru</option>
                        <option>Toyota</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleSelect" sm={2}>
                      Select Model
                    </Label>
                    <Col sm={10}>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Ascent</option>
                        <option>BRZ</option>
                        <option>Crosstrek</option>
                        <option>Forester</option>
                        <option>Impreza</option>
                        <option>Outback</option>
                        <option>STI</option>
                        <option>WRX</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Kilometers ('000s)
                    </Label>
                    <Col sm={10}>
                      <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleText" sm={2}>
                      Brief Description
                    </Label>
                    <Col sm={10}>
                      <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="exampleFile" sm={2}>
                      Add Photos
                    </Label>
                    <Col sm={10}>
                      <Input type="file" name="file" id="exampleFile" />
                    </Col>
                  </FormGroup>
                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">
                      Condition
                    </legend>
                    <Col sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" /> New
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" /> Used
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup tag="fieldset" row>
                    <legend className="col-form-label col-sm-2">
                      You are a...
                    </legend>
                    <Col sm={10}>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" /> Private Seller
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio2" /> Dealership
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup check row>
                    <Col>
                      <Button
                        className="btn-round"
                        color="success"
                        href="/listing"
                        target=""
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

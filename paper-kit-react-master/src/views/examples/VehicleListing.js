import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
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
  Col
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
      {/* <ResultsPageHeader /> */}
      <div>
        <h1>VEHICLE LISTING</h1>
      </div>
      {/* <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <h2 className="title">My rides</h2>
            <h4 className="description">
              <p className="card-description text-center">
                view your search results right here.
              </p>
            </h4>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default VehicleListing;

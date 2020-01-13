import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ResultsPageHeader from "components/Headers/ResultsPageHeader.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionSearchCards from "views/index-sections/SectionSearchCards";

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


function ResultsPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ResultsPageHeader />
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
      <SectionSearchCards />
      <SectionCarousel />
    </>
  );
}

export default ResultsPage;

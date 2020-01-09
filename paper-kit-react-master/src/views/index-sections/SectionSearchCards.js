import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Button
} from "reactstrap";

const SectionSearchCards = props => {
  return (
    <div className="section pt-o">
      <Container>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/img/2-crosstrek.PNG"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>2019</CardTitle>
            <CardSubtitle>Subaru Crosstrek</CardSubtitle>
            <CardText>
              Less than 1 year new! Ready for all your urban and offroad adventures!
            </CardText>
            <Button>View More</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/img/1-sti-hyperblue.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>2016</CardTitle>
            <CardSubtitle>Subaru STI</CardSubtitle>
            <CardText>
              Special edition hyper blue colour!
            </CardText>
            <Button>View More</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/img/1-sti-hyperblue.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>2019</CardTitle>
            <CardSubtitle>Subaru WRX</CardSubtitle>
            <CardText>
              Full send!
            </CardText>
            <Button>View More</Button>
          </CardBody>
        </Card>

      </Container>
    </div>
  );
};

export default SectionSearchCards;

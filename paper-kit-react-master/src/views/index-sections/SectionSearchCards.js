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
  console.log("props:", props.results);
  return (
    <div className="section pt-o">
      <Container className="results-container">
        {props.results.map(listing => (
          <Card className="results-card">
            <CardImg
              top
              width="100%"
              src={listing.listing_image}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{listing.year}</CardTitle>
              <CardSubtitle>
                {listing.make} {listing.model}
              </CardSubtitle>
              <CardText>{listing.description}</CardText>
              <Button>View More</Button>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default SectionSearchCards;

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
      <Container>
        {props.results.map(listing => (
          <Card>
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
              <CardText>
                Less than 1 year new! Ready for all your urban and offroad
                adventures!
              </CardText>
              <Button>View More</Button>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default SectionSearchCards;

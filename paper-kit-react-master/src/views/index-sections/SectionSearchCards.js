import React from "react";
import { Link } from "react-router-dom";
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
  // console.log(props.results[0]);
  let link = `/listing/${props.results[0]}`;
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
              <CardTitle>
                {listing.year} {listing.make} {listing.model}
              </CardTitle>
              <CardSubtitle>Asking Price: ${listing.price}</CardSubtitle>
              <CardText>{listing.description}</CardText>
              <Link to={{ pathname: "/listing", state: { result: listing } }}>
                View Listing
              </Link>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default SectionSearchCards;

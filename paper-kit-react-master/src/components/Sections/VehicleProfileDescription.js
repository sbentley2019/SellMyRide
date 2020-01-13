import React from "react";

import { useCookies } from "react-cookie";

// reactstrap components
import { Card, Container, Row, Col, Table, Button } from "reactstrap";

// core components

function VehicleProfileDescription(props) {
  console.log("data: ", props.data);
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h2>Vehicle Details</h2>
        </div>
        <Table hover>
          <tbody>
            <tr>
              <th scope="row">Year</th>
              <td>{props.data.year}</td>
            </tr>
            <tr>
              <th scope="row">Make</th>
              <td>{props.data.make}</td>
            </tr>
            <tr>
              <th scope="row">Model</th>
              <td>{props.data.model}</td>
            </tr>
            <tr>
              <th scope="row">Colour</th>
              <td>{props.data.exterior_colour}</td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td>${props.data.price}</td>
            </tr>
            <tr>
              <th scope="row">Kilometers</th>
              <td>{props.data.kms}</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{props.data.description}</td>
            </tr>
          </tbody>
        </Table>

        <Button className="btn-round" color="warning" outline>
          Edit Listing
        </Button>
        <Button className="btn-round" color="warning" outline>
          Back
        </Button>
      </Container>
      <br />
    </>
  );
}

export default VehicleProfileDescription;

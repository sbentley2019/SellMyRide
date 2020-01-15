import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

export default function ProfileListSection(props) {
  let deleteListing = function(e) {
    props.removeListing(e);
    axios.delete(`/api/listing/${e}`);
  };

  return (
    <li>
      <Row>
        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src={props.list.listing_image}
          />
        </Col>
        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
          <h6>
            {props.list.year} {props.list.make} {props.list.model} <br />
          </h6>
        </Col>
        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
          <div className="listing-actions">
            <div className="text-center">
              <Link
                to={{ pathname: "/listing", state: { result: props.list } }}
              >
                <Button className="btn-round" color="success" outline>
                  View
                </Button>
              </Link>
            </div>

            {props.current && (
              <>
                <div className="text-center">
                  <Link
                    to={{
                      pathname: "/new-listing",
                      state: { result: props.list }
                    }}
                  >
                    <Button className="btn-round" color="warning" outline>
                      Edit
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <Button
                    className="btn-round"
                    color="danger"
                    outline
                    onClick={() => {
                      deleteListing(props.list.id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
    </li>
  );
}

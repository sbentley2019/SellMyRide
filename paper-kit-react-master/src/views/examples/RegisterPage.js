/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/5-audi-rs5.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h2 className="title mx-auto">Register Below</h2>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
       
      </div>
    </>
  );
}

export default RegisterPage;

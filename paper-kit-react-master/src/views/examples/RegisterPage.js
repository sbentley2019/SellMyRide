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
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
// *********** add a redirect on the function register user that redirects after registering ***********
// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name"]);

  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
    phone: ""
  });

  const registerUser = function(e) {
    e.preventDefault();
    axios.put("/api/users", user).then(res => {
      console.log(res.data);
      setCookie("name", user.email, { path: "/" });
    });
  };

  const updateUser = function(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

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
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">New here? Sign up below:</h3>
                <Form className="register-form" onSubmit={registerUser}>
                  <label>Username</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="username"
                      value={user.username}
                      onChange={updateUser}
                      placeholder="Username"
                      type="text"
                      required
                    />
                  </InputGroup>
                  <label>Email</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="email"
                      value={user.email}
                      onChange={updateUser}
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="password"
                      value={user.password}
                      onChange={updateUser}
                      placeholder="Password"
                      type="password"
                      required
                    />
                  </InputGroup>
                  <label>Location</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="location"
                      value={user.location}
                      onChange={updateUser}
                      placeholder="Location"
                      type="text"
                      required
                    />
                  </InputGroup>
                  <label>Phone</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="phone"
                      value={user.phone}
                      onChange={updateUser}
                      placeholder="Phone"
                      type="text"
                      required
                    />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                  >
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

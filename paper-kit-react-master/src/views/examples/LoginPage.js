import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

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

function LoginPage() {
  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name", "user_id"]);
  const [user, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  function alterUser(key, value) {
    setCookie(key, value, { path: "/" });
  }

  const loginUser = function(e) {
    e.preventDefault();
    axios.post(`/api/users/login`, user).then(res => {
      if (res.data === -1) {
        alert("incorrect email or password");
      } else {
        alterUser("name", res.data.name);
        alterUser("user_id", res.data.id);
        window.location.replace("/");
      }
    });
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
                <h3 className="title mx-auto">Welcome!</h3>
                <Form className="register-form" onSubmit={e => loginUser(e)}>
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
                      onChange={e => {
                        setUser({ ...user, email: e.target.value });
                      }}
                      placeholder="Email"
                      type="email"
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
                      onChange={e => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      placeholder="Password"
                      type="password"
                    />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="submit"
                  >
                    Login
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

export default LoginPage;

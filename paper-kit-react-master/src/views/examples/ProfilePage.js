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
import React, { useEffect, useState } from "react";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { useCookies } from "react-cookie";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import ProfileListSection from "components/Sections/ProfileListSection.js";
import ProfileInformation from "components/Sections/ProfileInformation.js";
import MessageRow from "components/Sections/MessageRow";
import MessageItem from "components/Sections/MessageItem.js";

function ProfilePage() {
  const [cookies, setCookie] = useCookies(["name", "user_id"]);
  if (!cookies.user_id) {
    window.location.replace("/login");
  }
  const [activeTab, setActiveTab] = React.useState("1");
  const [arrListing, setArrListing] = useState([]);
  const [prevListings, setPrevListings] = useState([]);
  const [del, setDel] = useState(0);
  const [messages, setMessages] = useState([]);
  const [currentMessages, setCurrentMessages] = useState([]);
  const [userData, setUserData] = useState([]);
  const [users, setUsers] = useState({});
 

  const addItem = function(sender) {
    setCurrentMessages([
      ...currentMessages,
      {
        sender: sender.sender,
        message: sender.message,
        time: sender.time
      }
    ]);
  };

  useEffect(() => {
    axios.get(`/api/listing/profile/${cookies.user_id}`).then(res => {
      let temp = res.data.map(listing => listing);
      setArrListing(temp.filter(listing => !listing.is_sold));
      setPrevListings(temp.filter(listing => listing.is_sold));
    });
    axios.get(`/api/users/profile/${cookies.user_id}`).then(res => {
      setUserData(res.data[0]);
    });

    // messages
    if (!currentMessages.length) {
      axios
        .get(`/api/messages/${cookies.user_id}`)
        .then(res => {
          res.data.map(person => {
            setUsers({ ...users, [person.user_id]: person.name });
            return axios
              .get(`/api/messages/${cookies.user_id}/${person.user_id}`)
              .then(res => {
                const data = res.data[0];
                if (data.user_id != cookies.user_id) {
                  addItem({
                    sender: data.user_id,
                    message: data.message,
                    time: data.timestamp
                  });
                }
                // const messages = [];
                // for (let i in res.data) {
                //   messages.push({
                //     sender: i.user_id,
                //     receiver: i.seller_id,
                //     message: i.message,
                //     time: i.timestamp
                //   });
                // }
                // setMessages([...messages, { conv: messages }]);
              });
          });
        })
        .then(() => {
          // const sender = messages.map((message) => message.)
          // const sender = res.data[res.data.length - 1];
          // if (sender.user_id != cookies.user_id) {
          //   addItem(sender);
          // }
        });
    }
  }, []);

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const messageComponent = currentMessages.map(message => (
    <MessageRow
      userid={cookies.user_id}
      users={users}
      message={message}
      clearMessage={() => setCurrentMessages([])}
    />
  ));

  const removeListing = function(e) {
    const temp = arrListing.filter(i => i.id === e);
    setArrListing(arrListing.filter(i => i.id !== e));
    setPrevListings([...prevListings, temp[0]]);
  };
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/default-avatar.png")}
              />
            </div>
            <div className="name">
              <h2 className="title">{userData.name}</h2>
            </div>
          </div>
          <ProfileInformation data={userData} setData={setUserData} />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <h4>Current Listings</h4>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <h4>My Messages</h4>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                   <h4>Previous Listings</h4>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab}>
            <TabPane className="text-center" tabId="1" id="follows">
              {arrListing.length === 0 && (
                <h3 className="text-muted">No current listings!</h3>
              )}
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {arrListing.map(list => (
                      <ProfileListSection
                        removeListing={e => removeListing(e)}
                        list={list}
                        current={true}
                      />
                    ))}
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              {messageComponent.length > 0 && (
                <div>
                  <Row>
                    <Col>
                      <p>Sender</p>
                    </Col>
                    <Col className="ml-auto mr-auto">
                      <p>Message</p>
                    </Col>
                    <Col>
                      <p>Date</p>
                    </Col>
                  </Row>
                  <hr />
                </div>
              )}
              {!messageComponent.length ? (
                <h3 className="text-muted">Your inbox is empty!</h3>
              ) : (
                messageComponent
              )}
            </TabPane>
            <TabPane className="text-center" tabId="3" id="following">
              {prevListings.length === 0 && (
                <h3 className="text-muted">No previous listings!</h3>
              )}
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {prevListings.map(prevlist => (
                      <ProfileListSection list={prevlist} current={false} />
                    ))}
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;

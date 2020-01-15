import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NewVehicleListingHeader from "components/Headers/NewVehicleListingHeader.js";
import VehicleProfileCarousel from "components/Sections/VehicleProfileCarousel.js";
import VehicleProfileDescription from "components/Sections/VehicleProfileDescription.js";
import MapsSection from "components/Sections/MapsSection.js";
import { useLocation } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import axios from "axios";


export default function VehicleListing() {
  let data = useLocation();

  console.log("This is the new data: ", data.state.result);

  document.documentElement.classList.remove("nav-open");
  const [cookies, setCookie] = useCookies(["name", "user_id"]);
  useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <IndexNavbar />
      <NewVehicleListingHeader data={data.state.result} />
      <VehicleProfileCarousel data={data.state.result} />
      <VehicleProfileDescription data={data.state.result} />
      <MapsSection data={data.state.result}/>
    </>
  );
}

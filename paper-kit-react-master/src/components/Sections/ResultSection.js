import React from "react";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionSearchCards from "views/index-sections/SectionSearchCards";

export default function ResultSection(props) {
  console.log(props.results);
  return (
    <div>
      {/* <h1>Results</h1> */}
      <SectionSearchCards results={props.results} />
      {/* <SectionCarousel /> */}
    </div>
  );
}

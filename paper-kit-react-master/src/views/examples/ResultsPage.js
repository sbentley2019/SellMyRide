import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function ResultsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <IndexNavbar/>
     <h1>SEARCH RESULTS GO HERE!!!!@</h1>
    </>
  );
}

export default ResultsPage;

import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ResultsPageHeader from "components/Headers/ResultsPageHeader.js";
import SectionSearchCards from "views/index-sections/SectionSearchCards";

function ResultsPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ResultsPageHeader />
      <SectionSearchCards />
    </>
  );
}

export default ResultsPage;

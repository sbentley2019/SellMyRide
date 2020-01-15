import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import SearchPageHeader from "components/Headers/SearchPageHeader.js";
    
function SearchPage() {
  const [results, setResults] = useState([]);
  const [cookies, setCookie] = useCookies(["name", "user_id"]);

  useEffect(() => {}, [results]);

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
      <SearchPageHeader setResults={results => setResults(results)} results={results}/>
    </>
  );
}


export default SearchPage;

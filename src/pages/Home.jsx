import React from "react";
import Navbar from "../components/Navbar";
import TopMost from "../components/TopMost";
import Jumbotron from "../components/Jumbotron";
import SubHead from "../components/SubHead";
function HomePage() {
  return (
    <div>
      <TopMost />
      <Navbar />
      <Jumbotron />
      <SubHead />
    </div>
  );
}

export default HomePage;

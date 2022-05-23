import React from "react";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Machinary from "./Machinary";
import Review from "./Review";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Machinary></Machinary>
      <BusinessSummery></BusinessSummery>
      <Review></Review>
    </div>
  );
};

export default Home;

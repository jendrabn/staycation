import React, { useEffect, useRef } from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimonial from "../parts/Testimonial";
import Footer from "../parts/Footer";
import { connect } from "react-redux";
import { fetchPage } from "../store/actions/page";

function LandingPage(props) {
  const refMostPicked = useRef(null);
  const { page, fetchPage } = props;

  useEffect(() => {
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!page.LandingPage) {
      fetchPage(`/landing-page`, "landingPage");
    }
  });

  if (!page.hasOwnProperty("landingPage")) return null;

  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={page.landingPage.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={page.landingPage.mostPicked}
      />
      <Categories data={page.landingPage.category} />
      <Testimonial data={page.landingPage.testimonial} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);

import React, { useEffect } from "react";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Testimonial from "../parts/Testimonial";
import Footer from "../parts/Footer";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { checkoutBooking } from "../store/actions/checkout";
import { fetchPage } from "../store/actions/page";
import { useParams } from "react-router-dom";
import Activities from "../parts/Activities";

function DetailPage(props) {
  let { id } = useParams();
  const { page, fetchPage } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!page[id]) {
      fetchPage(`/detail-page/${id}`, id).then((response) => {
        document.title = `Staycation | ${response.title}`;
      });
    }
  });

  if (!page[id]) return null;

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header {...props} />
      <PageDetailTitle breadcrumb={breadcrumb} data={page[id]} />
      <FeaturedImage data={page[id].imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7 pe-5">
            <Fade bottom>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                itemDetails={page[id]}
                startBooking={props.checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={page[id].activityId} />
      <Testimonial data={page[id].testimonial} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailPage
);

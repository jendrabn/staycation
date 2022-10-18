import React from "react";
import Star from "../elements/Star";
import TestimoniAccent from "../assets/images/testimonial-landingpages-frame.jpg";
import Button from "../elements/Button";
import Fade from "react-reveal/Fade";
import { BASE_API_URL } from "../configs";

export default function Testimonial({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero position-relative"
              style={{ margin: "30px 0 0 30px" }}
            >
              <img
                src={`${BASE_API_URL}/${data.imageUrl}`}
                alt="Testimonial"
                className=" position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimoniAccent}
                alt="Testimonial Frame"
                className=" position-absolute"
                style={{ margin: "-30px 0 0 -30px" }}
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: "40px" }}>{data.name}</h4>
            <Star value={data.rate} width={20} height={20} spacing={4}></Star>
            <h5 className="h2 fw-light line-height-2 my-2">{data.content}</h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>

            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
                isLarge
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

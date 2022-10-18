import React from "react";
import ImageHero from "../assets/images/img_hero.jpg";
import ImageHeroFrame from "../assets/images/img_hero_frame.jpg";
import IconCities from "../assets/images/icons/icon-cities.svg";
import IconTraveler from "../assets/images/icons/icon-traveler.svg";
import IconTreasure from "../assets/images/icons/icon-treasure.svg";
import Button from "../elements/Button";
import numberFormat from "../utils/formatNumber";
import Fade from "react-reveal/Fade";

export default function Hero(props) {
  const { travellers, treasures, cities } = props.data;

  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-4">
      <Fade>
        <div className="row align-items-center">
          <div className="col pe-lg-5">
            <h1 className="fw-bolder lh-base mb-3">
              Forget Busy Work, Start Next Vacation
            </h1>
            <p
              className="mb-4 fw-light text-gray-500"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5 btn-show-me-now"
              isPrimary
              hasShadow
              isLarge
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row " style={{ marginTop: 80 }}>
              <div className="col">
                <img
                  width="36"
                  height="36"
                  src={IconTraveler}
                  alt={`${travellers} Travellers`}
                />
                <div className="mt-3">
                  {numberFormat(travellers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travellers
                  </span>
                </div>
              </div>
              <div className="col">
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${treasures} Treasures`}
                />
                <div className="mt-3">
                  {numberFormat(treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </div>
              </div>
              <div className="col">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${cities} Cities`}
                />
                <div className="mt-3">
                  {numberFormat(cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-none d-md-block">
            <div className="position-relative ps-3" style={{ height: "450px" }}>
              <img
                className="img-fluid position-absolute"
                src={ImageHero}
                alt="Hero"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                className="img-fluid position-absolute"
                src={ImageHeroFrame}
                alt="Hero Frame"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

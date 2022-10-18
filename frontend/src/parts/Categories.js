import React from "react";
import Button from "../elements/Button";
import Fade from "react-reveal/Fade";
import { BASE_API_URL } from "../configs";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    if (category.itemId.length === 0) return null;

    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade bottom delay={500 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular <span className="fw-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={`${BASE_API_URL}/${item.imageId[0].imageUrl}`}
                          alt={item.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          href={`/properties/${item._id}`}
                          type="link"
                          className="stretched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{item.name}</h5>
                        </Button>
                        <span className="text-gray-500">{item.country}</span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}

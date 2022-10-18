import React from "react";
import { BASE_API_URL } from "../configs";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h2>About the place</h2>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width="38"
                src={`${BASE_API_URL}/${feature.imageUrl}`}
                alt={feature.name}
                className="d-block mb-2"
              />
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 fw-light">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}

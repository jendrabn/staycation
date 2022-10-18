import React from "react";
import Button from "../elements/Button";
import PropTypes from "prop-types";

export default function IconText({ className }) {
  return (
    <Button
      className={`brand-icon-text ${className}`}
      type="link"
      href="/"
      style={{ outline: "none" }}
    >
      Stay<span>cation.</span>
    </Button>
  );
}

IconText.propTypes = {
  className: PropTypes.string,
};

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Button(props) {
  const {
    children,
    type,
    href,
    target,
    isExternal,
    isPrimary,
    isDanger,
    isSuccess,
    isDisabled,
    isBlock,
    isLoading,
    isSmall,
    isLarge,
    isLight,
    hasShadow,
    style,
  } = props;

  const className = [props.className];

  if (isPrimary) className.push("btn-primary");
  if (isDanger) className.push("btn-danger");
  if (isSuccess) className.push("btn-success");
  if (isLight) className.push("btn-light");
  if (isSmall) className.push("btn-sm");
  if (isLarge) className.push("btn-lg");
  if (isBlock) className.push("w-100");
  if (hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (isDisabled || isLoading) {
    if (isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={style}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm mx-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </span>
        ) : (
          children
        )}
      </span>
    );
  }

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className.join(" ")}
          style={style}
          target={target === "_blank" ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          to={href}
          className={className.join(" ")}
          style={style}
          onClick={onClick}
        >
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={className.join(" ")} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  style: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isLight: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  hasShadow: PropTypes.bool,
};

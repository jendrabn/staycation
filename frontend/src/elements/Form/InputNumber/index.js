import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    // const patternNumeric = new RegExp("[0-9]*");
    // const isNumeric = patternNumeric.test(value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text minus" onClick={minus}>
            -
          </div>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          readOnly
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
          className="form-control"
        />
        <div className="input-group-append">
          <div className="input-group-text plus" onClick={plus}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  isSuffixPlural: PropTypes.bool,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};

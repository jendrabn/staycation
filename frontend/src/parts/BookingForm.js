import React, { useState, useEffect } from "react";
import Button from "../elements/Button";
import { InputDate, InputNumber } from "../elements/Form";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function BookingForm(props) {
  let navigate = useNavigate();

  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    const countDuration = new Date(endDate - startDate).getDate();
    setData((prevData) => ({
      ...prevData,
      duration: countDuration,
    }));
    return () => {};
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(
      startDate.setDate(startDate.getDate() + +data.duration - 1)
    );
    setData((prevData) => ({
      ...prevData,
      date: {
        ...prevData.date,
        endDate: endDate,
      },
    }));
    return () => {};
  }, [data.duration]);

  const startBooking = () => {
    props.startBooking({
      _id: props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });

    navigate("/checkout");
  };

  const { itemDetails } = props;

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 fw-light">per {itemDetails.unit}</span>
      </h5>

      <label className="mb-2" htmlFor="duration">
        How long you will stay?
      </label>
      <InputNumber
        max={30}
        isSuffixPlural
        suffix={" night"}
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label className="mb-2" htmlFor="date">
        Pick a date
      </label>
      <InputDate onChange={updateData} name="date" value={data.date} />

      <h6 className="text-gray-500 fw-light" style={{ marginBottom: 40 }}>
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data.duration} {itemDetails.unit}
        </span>
      </h6>

      <Button className="btn w-100" hasShadow isPrimary onClick={startBooking}>
        Continue to Book
      </Button>
    </div>
  );
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func,
};

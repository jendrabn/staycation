const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const BookingSchema = new Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  invoice: {
    type: String,
    required: true,
  },
  itemId: {
    _id: {
      type: ObjectId,
      ref: "Item",
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  total: {
    type: Number,
    required: true,
  },
  bankId: {
    type: ObjectId,
    ref: "Bank",
  },
  memberId: {
    type: ObjectId,
    ref: "Member",
  },
  payments: {
    proofPayment: {
      type: String,
      required: true,
    },
    bankFrom: {
      type: String,
      required: true,
    },
    accountHolder: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Process",
    },
  },
});

module.exports = model("Booking", BookingSchema);

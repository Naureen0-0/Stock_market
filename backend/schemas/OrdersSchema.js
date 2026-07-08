const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0.01,
    },
    percent: String,
    mode: {
      type: String,
      required: true,
      enum: ["BUY", "SELL"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { OrdersSchema };

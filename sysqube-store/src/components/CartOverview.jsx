import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";

const CartOverview = ({ cartItems, onNext, removeCartItem }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col">
      <h2 className=" text-xl font-bold flex justify-center">
        <LocalMallOutlinedIcon />
        My Cart
      </h2>
      <section className="flex justify-between">
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-around">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-36 object-cover"
              />
              <p>{item.name}</p>
              <p>
                <span>Each</span>
                <span className="font-bold">{item.price}</span>
              </p>
              <p>
                <span>Quantity</span>
                <span>{item.quantity}</span>
              </p>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
              <button>Remove</button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 mb-3">
            <TextField
              id="promo"
              label="Enter Promo Code"
              variant="outlined"
              size="small"
            />
            <button
              className="bg-slate-600 text-white rounded-md px-5 "
              onClick={onNext}
            >
              Enter
            </button>
          </div>

          <p className="flex justify-between">
            <span>Shipping cost</span>
            <span>TBD</span>
          </p>

          <p className="flex justify-between">
            <span>Discount</span>
            <span>-Rs.0</span>
          </p>

          <p className="flex justify-between">
            <span>Tax</span>
            <span>TBD</span>
          </p>

          <p className="flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span>Rs.{subtotal.toFixed(2)}</span>
          </p>

          <button
            className="bg-slate-600 text-white rounded-md px-5 py-2 mt-3"
            onClick={onNext}
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default CartOverview;

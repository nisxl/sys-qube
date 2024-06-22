import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, MenuItem, Select, TextField } from "@mui/material";

const CartOverview = ({
  cartItems,
  onNext,
  removeCartItem,
  updateQuantity,
}) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (event, itemId) => {
    updateQuantity(itemId, parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-col">
      <h2 className=" text-xl font-bold flex justify-center">
        <LocalMallOutlinedIcon />
        My Cart
      </h2>
      <section className="flex flex-col md:flex-row justify-between gap-24 px-4   my-6">
        <div className="flex flex-col gap-9 w-full border-t-2  py-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-wrap justify-between">
              <div className="flex gap-4">
                <img
                  src={`../images/${item.image}`}
                  alt={item.name}
                  className="w-28 h-36 object-cover"
                />
                <div className="flex flex-col items-start text-gray-400">
                  <p className="text-black font-semibold">{item.name}</p>
                  <p>
                    <span>Color: {item.color}</span>
                  </p>
                  <p>
                    <span>Size: {item.size}</span>
                  </p>
                  <p>
                    <span>{item.stock ? "In stock" : "Out of stock"}</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                <p className="flex flex-col items-start">
                  <span>Each</span>
                  <span className="font-bold">{item.price}</span>
                </p>
                <div className="flex flex-col items-start">
                  <span>Quantity</span>

                  <Select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    variant="outlined"
                    size="small"
                    style={{ width: "80px" }}
                  >
                    {[...Array(item.stock).keys()].map((n) => (
                      <MenuItem key={n + 1} value={n + 1}>
                        {n + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <p className="flex flex-col items-start">
                  <span>Total</span>
                  <span>{item.quantity * item.price}</span>
                </p>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => removeCartItem(item.id)}
                  sx={{ width: "20px", height: "20px", padding: "20px" }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </div>
            </div>
          ))}
          <div className="border-t-2 flex justify-between px-6 py-6 font-semibold">
            <span>{cartItems.length} items</span>{" "}
            <span> Rs.{subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
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

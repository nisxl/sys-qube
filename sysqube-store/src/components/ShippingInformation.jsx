import React, { useState } from "react";
import TextField from "@mui/material/TextField";
const ShippingInformation = ({
  shippingInfo,
  onPrev,
  onNext,
  setShippingInfo,
}) => {
  const [form, setForm] = useState(shippingInfo);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShippingInfo(form);
    onNext();
  };
  console.log("form", form);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-2">
          <TextField
            name="fullName"
            label="Full Name"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.fullName}
            fullWidth
          />

          <TextField
            name="address"
            label="Address"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.address}
            fullWidth
          />
        </div>
        <div className="flex gap-2">
          <TextField
            name="city"
            label="City"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.city}
            fullWidth
          />

          <TextField
            name="state"
            label="State/Province"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.state}
            fullWidth
          />

          <TextField
            name="zipCode"
            label="Zip Code"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.zipCode}
            fullWidth
          />
        </div>
        <div className="flex gap-2">
          <TextField
            name="country"
            label="Country"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.country}
            fullWidth
          />

          <TextField
            name="phoneNumber"
            label="Phone Number"
            id="outlined-size-small"
            size="small"
            onChange={handleChange}
            value={form.phoneNumber}
            fullWidth
          />
        </div>

        <button type="button" onClick={onPrev}>
          Back to Cart
        </button>
        <button
          className="bg-black text-white rounded-md px-5 py-2"
          type="submit"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default ShippingInformation;

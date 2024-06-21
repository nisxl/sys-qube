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

  return (
    <div>
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.fullName}
        />

        <TextField
          label="Address"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.address}
        />

        <TextField
          label="City"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.city}
        />

        <TextField
          label="State/Province"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.state}
        />

        <TextField
          label="Zip Code"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.zipCode}
        />

        <TextField
          label="Country"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.country}
        />

        <TextField
          label="Phone Number"
          id="outlined-size-small"
          size="small"
          onChange={handleChange}
          value={form.phoneNumber}
        />

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

import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { InputLabel } from "@mui/material";
const PaymentInformation = ({
  paymentInfo,
  onPrev,
  onNext,
  setPaymentInfo,
}) => {
  const [form, setForm] = useState(paymentInfo);
  const [paymentType, setPaymentType] = useState("card");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentInfo(form);
    onNext();
  };

  const handleClick = (type) => {
    setPaymentType(type);
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <div className="flex justify-center gap-6">
        <article
          className={`flex items-center w-52 justify-center py-2 border rounded-md cursor-pointer ${
            paymentType === "card" ? "border-black bg-gray-100" : "border"
          }`}
          onClick={() => handleClick("card")}
        >
          <span>
            <CreditCardIcon />
          </span>
          <span>Card</span>
        </article>
        <article
          className={`flex w-52 items-center justify-center py-2 border rounded-md cursor-pointer ${
            paymentType === "fonepay" ? "border-black bg-gray-100" : "border"
          }`}
          onClick={() => handleClick("fonepay")}
        >
          <span>
            <PhoneAndroidIcon />
          </span>
          <span>fonepay</span>
        </article>
      </div>
      {paymentType === "card" && (
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" gutterBottom align="left">
            Cardholder Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="cardholderName"
            value={form.cardholderName}
            onChange={handleChange}
            placeholder="Cardholder Name"
            required
            margin="none"
            size="small"
            sx={{ marginBottom: "8px" }}
          />
          <Typography variant="body1" gutterBottom align="left">
            Card Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            required
            margin="none"
            size="small"
            sx={{ marginBottom: "8px" }}
          />
          <div className="flex justify-around gap-2">
            <div className="w-full">
              <Typography variant="body1" gutterBottom align="left">
                Expiration Date
              </Typography>
              <TextField
                variant="outlined"
                name="expirationDate"
                value={form.expirationDate}
                onChange={handleChange}
                placeholder="Expiration Date (MM/YY)"
                required
                margin="none"
                fullWidth
                size="small"
              />
            </div>
            <div className="w-full">
              <Typography variant="body1" gutterBottom align="left">
                CVV
              </Typography>
              <TextField
                variant="outlined"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
                margin="none"
                size="small"
                fullWidth
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-black text-white rounded-md px-5 py-2 "
              onClick={onPrev}
            >
              Back to Shipping
            </button>

            <button
              className="bg-black text-white rounded-md px-5 py-2"
              type="submit"
              onClick={onNext}
            >
              Review Order
            </button>
          </div>
        </form>
      )}
      {paymentType === "fonepay" && (
        <div>
          {/* Add fonepay form or details here */}
          <p>Payment with fonepay is not yet implemented.</p>
          <Button variant="contained" color="primary" onClick={onPrev}>
            Back to Shipping
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentInformation;

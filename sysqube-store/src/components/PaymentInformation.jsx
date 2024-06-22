import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { InputLabel } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PaymentInformation = ({
  paymentInfo,
  onPrev,
  onNext,
  setPaymentInfo,
  paymentMethod,
  setPaymentMethod,
}) => {
  const [form, setForm] = useState(paymentInfo);
  // const [paymentType, setPaymentType] = useState("card");
  console.log("payment", form);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentInfo(form);
    console.log("loll", form);
    onNext();
  };

  const handleClick = (type) => {
    // setPaymentType(type);
    setPaymentMethod(type);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
      <div className="flex justify-center gap-6">
        <article
          className={`flex items-center w-52 justify-center py-2 border rounded-md cursor-pointer ${
            paymentMethod === "card" ? "border-black bg-gray-100" : "border"
          }`}
          onClick={() => handleClick("card")}
        >
          <span>
            <CreditCardIcon />
          </span>
          <span>Card</span>
        </article>
        {paymentMethod === "card" && (
          <CheckCircleIcon className="ml-[-40px] mt-[-10px] " />
        )}
        <article
          className={`flex w-52 items-center justify-center py-2 border rounded-md cursor-pointer ${
            paymentMethod === "fonepay" ? "border-black bg-gray-100" : "border"
          }`}
          onClick={() => handleClick("fonepay")}
        >
          <span>
            <PhoneAndroidIcon />
          </span>
          <span>fonepay</span>
        </article>
        {paymentMethod === "fonepay" && (
          <CheckCircleIcon className="ml-[-40px] mt-[-10px]" />
        )}
      </div>
      {paymentMethod === "card" && (
        <form onSubmit={handleSubmit}>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            sx={{ fontSize: "15px", fontWeight: "600" }}
          >
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
            sx={{ marginBottom: "12px" }}
          />
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            sx={{ fontSize: "15px", fontWeight: "600" }}
          >
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
            sx={{ marginBottom: "12px" }}
          />
          <div className="flex justify-around gap-2 mb-[12px]">
            <div className="w-full">
              <Typography
                variant="body1"
                gutterBottom
                align="left"
                sx={{ fontSize: "15px", fontWeight: "600" }}
              >
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
              <Typography
                variant="body1"
                gutterBottom
                align="left"
                sx={{ fontSize: "15px", fontWeight: "600" }}
              >
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
      {paymentMethod === "fonepay" && (
        <form onSubmit={handleSubmit}>
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            sx={{ fontSize: "15px", fontWeight: "600" }}
          >
            Account Holder Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="accountHolderName"
            value={form.accountHolderName}
            onChange={handleChange}
            placeholder="Account Holder Name Name"
            required
            margin="none"
            size="small"
            sx={{ marginBottom: "12px" }}
          />
          <Typography
            variant="body1"
            gutterBottom
            align="left"
            sx={{ fontSize: "15px", fontWeight: "600" }}
          >
            Account Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="accountNumber"
            value={form.accountNumber}
            onChange={handleChange}
            placeholder="Account Number"
            required
            margin="none"
            size="small"
            sx={{ marginBottom: "12px" }}
          />

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
            >
              Review Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PaymentInformation;

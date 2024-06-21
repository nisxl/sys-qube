// src/components/OrderSummary.js
import React from "react";

const OrderSummary = ({ cartItems, shippingInfo, paymentInfo, onPrev }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 10; // Assuming a fixed shipping cost
  const taxes = subtotal * 0.1; // Assuming a 10% tax rate
  const total = subtotal + shippingCost + taxes;

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
      <p>Taxes: ${taxes.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <h3>Shipping Information</h3>
      <p>{shippingInfo.fullName}</p>
      <p>{shippingInfo.address}</p>
      <p>
        {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zipCode}
      </p>
      <p>{shippingInfo.country}</p>
      <p>{shippingInfo.phoneNumber}</p>
      <h3>Payment Information</h3>
      <p>Cardholder Name: {paymentInfo.cardholderName}</p>
      <p>Card Number: **** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
      <button type="button" onClick={onPrev}>
        Back to Payment
      </button>
      <button>Place Order</button>
    </div>
  );
};

export default OrderSummary;

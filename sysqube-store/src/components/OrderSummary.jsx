import React from "react";

const OrderSummary = ({
  cartItems,
  shippingInfo,
  paymentInfo,
  onPrev,
  paymentMethod,
  onNext,
}) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 10;
  const taxes = subtotal * 0.1;
  const total = subtotal + shippingCost + taxes;

  console.log("nischaldon", paymentInfo);
  console.log("payment method", paymentMethod);
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex flex-col gap-1 p-4 border-2 rounded-md">
        <h2 className="text-base font-semibold">Payment</h2>
        {paymentMethod === "card" && (
          <p className="flex justify-between">
            <span className="text-gray-400">Card Holder Name</span>
            <span>{paymentInfo.cardholderName}</span>
          </p>
        )}
        {paymentMethod === "card" && (
          <p className="flex justify-between text-gray-400">
            <span>
              Card Number: **** **** **** {paymentInfo?.cardNumber?.slice(-4)}
            </span>
            <span>{paymentInfo?.expirationDate}</span>
          </p>
        )}

        {paymentMethod === "fonepay" && (
          <p className="flex justify-between text-gray-400">
            <span>AC Number: </span>
            <span>{paymentInfo?.accountNumber}</span>
          </p>
        )}

        {paymentMethod === "fonepay" && (
          <p className="flex justify-between text-gray-400">
            <span>AC Holder Name: </span>
            <span>{paymentInfo?.accountHolderName}</span>
          </p>
        )}
      </div>
      <div className="flex gap-1 flex-col p-4 border-2 rounded-md">
        <h2 className="text-base font-semibold">Shipping address</h2>
        <p className="flex justify-between text-gray-400">
          <span>Name</span>
          <span>{shippingInfo.fullName}</span>
        </p>
        <p className="flex justify-between text-gray-400">
          <span>Address</span>
          <span>
            {shippingInfo.address}
            {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zipCode}
          </span>
        </p>
        <p className="flex justify-between text-gray-400">
          <span>Country</span>
          <span>{shippingInfo.country}</span>
        </p>

        <p className="flex justify-between text-gray-400">
          <span>Phone number</span>
          <span>{shippingInfo.phoneNumber}</span>
        </p>

        <p>{shippingInfo.country}</p>
        <p>{shippingInfo.phoneNumber}</p>
      </div>
      <div className="flex flex-col p-4 gap-1 bg-gray-50">
        <h2 className="text-base font-semibold">Order Summary</h2>

        <p className="flex justify-between">
          <span className="text-gray-400">Subtotal:</span>
          <span>Rs.{subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Shipping Cost:</span>
          <span>Rs.{shippingCost.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span className="text-gray-400">Taxes:</span>
          <span>Rs. {taxes.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span>Total:</span>
          <span>{total.toFixed(2)}</span>
        </p>
      </div>

      <p>
        {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zipCode}
      </p>
      <button
        className="bg-white text-black rounded-md px-5 py-2"
        type="button"
        onClick={onPrev}
      >
        Back to Payment
      </button>
      <button
        type="submit"
        className="bg-black text-white rounded-md px-5 py-2"
        onClick={onNext}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;

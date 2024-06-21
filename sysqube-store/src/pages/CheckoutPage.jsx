import React, { useState } from "react";
import CartOverview from "../components/CartOverview";
import PaymentInformation from "../components/PaymentInformation";
import OrderSummary from "../components/OrderSummary";
import ShippingInformation from "../components/ShippingInformation";
const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      price: 49.99,
      quantity: 1,
    },
  ]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div className="checkout-container font-poppins">
      {/* <ProgressBar step={step} /> */}
      {step === 1 && (
        <CartOverview
          cartItems={cartItems}
          onNext={handleNextStep}
          removeCartItem={removeCartItem}
        />
      )}
      {step === 2 && (
        <ShippingInformation
          shippingInfo={shippingInfo}
          onPrev={handlePrevStep}
          onNext={handleNextStep}
          setShippingInfo={setShippingInfo}
        />
      )}
      {step === 3 && (
        <PaymentInformation
          paymentInfo={paymentInfo}
          onPrev={handlePrevStep}
          onNext={handleNextStep}
          setPaymentInfo={setPaymentInfo}
        />
      )}
      {step === 4 && (
        <OrderSummary
          cartItems={cartItems}
          shippingInfo={shippingInfo}
          paymentInfo={paymentInfo}
          onPrev={handlePrevStep}
        />
      )}
    </div>
  );
};

export default CheckoutPage;

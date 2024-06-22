import React, { useState } from "react";
import CartOverview from "../components/CartOverview";
import PaymentInformation from "../components/PaymentInformation";
import OrderSummary from "../components/OrderSummary";
import ShippingInformation from "../components/ShippingInformation";
import ProgressBar from "../components/common/ProgressBar";
import ThankYouMessage from "../components/ThankYouMessage";
const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "item1.jpg",
      price: 29.99,
      quantity: 1,
      color: "Brown",
      size: "S",
      stock: 5,
    },
    {
      id: 2,
      name: "Product 2",
      image: "item2.jpg",
      price: 49.99,
      quantity: 1,
      color: "Cream",
      size: "M",
      stock: 2,
    },
  ]);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("card");
  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeCartItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  // const removeCartItem = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };
  return (
    <div className="font-poppins">
      {/* <ProgressBar step={step} /> */}
      <ProgressBar activeStep={step - 1} />
      {/* {steps[step]} */}
      {step === 1 && (
        <CartOverview
          cartItems={cartItems}
          onNext={handleNextStep}
          removeCartItem={removeCartItem}
          updateQuantity={updateQuantity}
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
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      )}
      {step === 4 && (
        <OrderSummary
          cartItems={cartItems}
          shippingInfo={shippingInfo}
          paymentInfo={paymentInfo}
          onPrev={handlePrevStep}
          paymentMethod={paymentMethod}
          onNext={handleNextStep}
        />
      )}
      {step === 5 && <ThankYouMessage />}
    </div>
  );
};

export default CheckoutPage;

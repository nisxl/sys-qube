import { useState } from "react";

import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CheckoutPage />
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import CheckoutPage from "./pages/CheckoutPage";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <CheckoutPage />
    </>
  );
}

export default App;

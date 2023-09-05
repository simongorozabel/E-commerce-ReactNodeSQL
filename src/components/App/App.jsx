import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../common/Navbar/Navbar";
import Cart from "../common/Cart/Cart";
import { useState } from "react";
import Footer from "../common/Footer/Footer";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = (e) => {
    e.preventDefault();
    setIsCartVisible(!isCartVisible);
  };
  return (
    <>
      <Navbar updateCartVisible={toggleCartVisibility} />

      <main className="App__main">
        <Outlet />
      </main>

      <Cart
        isVisible={isCartVisible}
        updateCardVisible={toggleCartVisibility}
      />

      <Footer />
    </>
  );
};

export default App;

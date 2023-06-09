import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../common/Navbar/Navbar";
import Cart from "../common/Cart/Cart";
import { useState } from "react";

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <>
      <Navbar updateCardVisible={toggleCartVisibility} />

      <main>
        <Outlet />
      </main>

      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default App;

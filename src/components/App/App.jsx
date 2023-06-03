import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../common/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

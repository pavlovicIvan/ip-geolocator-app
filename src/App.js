// React
import React from "react";
import "./App.css";

// Custom components
import Header from "./layout/Header";
import Geolocator from "./components/Geolocator";
import Footer from "./layout/Footer";

const App = () => (
  <div className="containerCenter">
    <Header />
    <Geolocator />
    <Footer />
  </div>
);

export default App;

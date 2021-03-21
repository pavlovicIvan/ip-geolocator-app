// React
import React from "react";
import "./App.css";

// Custom components
import Header from "./layout/Header";
import Geolocator from "./components/Geolocator";

const App = () => (
  <div className="containerCenter">
    <Header />
    <Geolocator />
  </div>
);

export default App;

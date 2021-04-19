// React
import React, { useState, useEffect } from "react";

// Custom functions
import { callApi } from "../helpers/functions";

// Custom components
import TableDisplay from "./TableDisplay";
import MapView from "./MapView";

// Custom strings
const api = "https://freegeoip.app/json/";

const Geolocator = () => {
  const [customIP, setCustopmIP] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    callApi(api, setLoading, setResult);
  }, []);

  useEffect(() => {
    setCustopmIP(result.ip || "");
  }, [result]);

  const handleSearch = (event) => {
    event.preventDefault();

    callApi(`${api}${customIP}`, setLoading, setResult);
  };

  return (
    <div className="containerMain">
      <form onSubmit={(event) => handleSearch(event)}>
        <input
          type="text"
          value={customIP}
          onChange={(event) => setCustopmIP(event.target.value)}
        />
        <input type="submit" value="SEARCH" />
      </form>
      {loading ? (
        <>
          <div className="skeletonTable" />
          <div className="skeletonMap" />
        </>
      ) : (
        <>
          <TableDisplay result={result} />
          <MapView result={result} />
        </>
      )}
    </div>
  );
};

export default Geolocator;

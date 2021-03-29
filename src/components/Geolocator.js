// React
import React, { useState, useEffect } from "react";

// Custom functions
import { callApi, formatKey } from "../helpers/functions";

// Custom components
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
          <table>
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key}>
                  <th>{formatKey(key)}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <MapView result={result} />
        </>
      )}
    </div>
  );
};

export default Geolocator;

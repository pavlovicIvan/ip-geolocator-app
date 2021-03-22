// React
import React, { useState, useEffect } from "react";

// Maps
import { Map, Marker } from "pigeon-maps";

// Custom functions
import { callApi, formatKey } from "../helpers/functions";

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
        <label>
          Enter IP
          <input
            type="text"
            value={customIP}
            onChange={(event) => setCustopmIP(event.target.value)}
          />
        </label>
        <input type="submit" value="SEARCH" />
      </form>
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
      {result && (
        <Map
          height={300}
          center={[result.latitude, result.longitude]}
          defaultZoom={13}
        >
          <Marker
            width={50}
            color="#fc0349"
            anchor={[result.latitude, result.longitude]}
          />
        </Map>
      )}
    </div>
  );
};

export default Geolocator;

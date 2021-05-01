// React, is-ip
import React, { useState, useEffect } from "react";
import isIp from "is-ip";

// Custom functions
import { callApi } from "../../helpers/functions";

// Custom components
import TableDisplay from "../TableDisplay/index";
import MapView from "../MapView/index";

// Style
import styles from "./Geolocator.module.css";

// Custom strings
const api = "https://freegeoip.app/json/";

const Geolocator = () => {
  const [customIP, setCustopmIP] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    callApi(api, setLoading, setResult);
  }, []);

  useEffect(() => {
    setCustopmIP(result.ip || "");
  }, [result]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (isIp(customIP)) {
      callApi(`${api}${customIP}`, setLoading, setResult);
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  return (
    <div className={styles.containerMain}>
      <form onSubmit={(event) => handleSearch(event)}>
        <input
          type="text"
          value={customIP}
          onChange={(event) => setCustopmIP(event.target.value)}
        />
        <input type="submit" value="SEARCH" />
      </form>
      {validation && (
        <div className={styles.validationText}> IP address is not valid </div>
      )}
      {loading ? (
        <>
          <div className={styles.skeletonTable} />
          <div className={styles.skeletonMap} />
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

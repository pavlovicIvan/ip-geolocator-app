// React
import React from "react";

// Style
import styles from "./TableDisplay.module.css";

// Custom functions
import { formatKey } from "../../helpers/functions";

const TableDisplay = ({ result }) => (
  <table>
    <tbody>
      {Object.entries(result).map(([key, value]) => (
        <tr key={key}>
          <th>{formatKey(key)}</th>
          <td>{value || "-"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableDisplay;

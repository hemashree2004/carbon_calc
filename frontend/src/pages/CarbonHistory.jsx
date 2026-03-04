import React, { useEffect, useState } from "react";

function CarbonHistory() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("carbonLogs")) || [];
    setLogs(stored);
  }, []);

  return (
    <div className="container">
      <h2>Carbon History</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transport</th>
            <th>Food</th>
            <th>Energy</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.transport.toFixed(2)}</td>
              <td>{log.food.toFixed(2)}</td>
              <td>{log.energy.toFixed(2)}</td>
              <td>{log.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarbonHistory;
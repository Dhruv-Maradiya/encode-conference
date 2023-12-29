import React from "react";
import "../assets/css/importantdates.css";

const Importantdates = () => {
  return (
    <div className="impdates-container">
      <h2 className="dates-heading">Important Dates</h2>
      <table className="dates-table">
        <thead>
          {/* <tr>
          <th>S. No.</th>
          <th>Category</th>
          <th>Amount (INR)</th>
          <th>Benefits</th>
        </tr> */}
        </thead>
        <tbody>
          <tr>
            <td>Call for Abstracts deadline</td>
            <td>10 Jan 2024</td>
          </tr>
          <tr>
            <td>Acceptance notification</td>
            <td>15 Jan 2024</td>
          </tr>
          <tr>
            <td>Early registration deadline</td>
            <td>20 Jan 2024</td>
          </tr>
          <tr>
            <td>Regular registration deadline</td>
            <td>30 Jan 2024</td>
          </tr>
          <tr>
            <td>Conference dates</td>
            <td>16 & 17 Feb 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Importantdates;

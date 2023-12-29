import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/itenary.css";

const Sponsorship = () => {
  return (
    <div>
      <Navbar />
      <div className="sponsorship-container">
        <h2 className="sponsorship-heading">Conference Sponsorship</h2>
        <table className="sponsorship-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Category</th>
              <th>Amount (INR)</th>
              <th>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Diamond</td>
              <td>300000</td>
              <td>10 free delegate registrations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Gold</td>
              <td>200000</td>
              <td>7 free delegate registrations</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Silver</td>
              <td>100000</td>
              <td>5 free delegate registrations</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bronze</td>
              <td>50000</td>
              <td>2 free delegate registrations</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Sponsorship;

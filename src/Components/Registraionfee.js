import React from "react";
import "../assets/css/registrationfee.css";

const Registraionfee = () => {
  return (
    <>
      <div className="regFee">
        <div className="regHead">
          <h2>Registration fee</h2>
        </div>

        <div className="regData">
          <div className="regDataField">
            <div className="regDataTable">
              <table>
                <thead>
                  <p className="table-heading">
                    Early bird registration up to 20 January 2024
                  </p>
                  <tr>
                    <th>Category</th>
                    {/* <th data-priority="2">Early bird registration up to 30 December 2023 */}
                    <th>Indian* Delegate</th>
                    <th>Foreign** Delegate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Industry</td>
                    <td>8000</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Academic and Research Insttiute</td>
                    <td>6000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>
                      Research scholar/Post Doc and Research Associates with a
                      valid ID card
                    </td>
                    <td>4000</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>UG/PG student with a valid ID card</td>
                    <td>2000</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>
                      Spouse / Accompanying person without registration kit
                    </td>
                    <td>2000</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>

              <table>
                <thead>
                  <p className="table-heading">
                    Registration after 30 December 2023 & Spot Registration
                  </p>
                  <tr>
                    <th>Category</th>
                    {/* <th data-priority="2">Early bird registration up to 30 December 2023 */}
                    <th>Indian* Delegate</th>
                    <th>Foreign** Delegate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Industry</td>
                    <td>10000</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>Academic and Research Insttiute</td>
                    <td>8000</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>
                      Research scholar/Post Doc and Research Associates with a
                      valid ID card
                    </td>
                    <td>5000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>UG/PG student with a valid ID card</td>
                    <td>3000</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>
                      Spouse / Accompanying person without registration kit
                    </td>
                    <td>3000</td>
                    <td>200</td>
                  </tr>
                </tbody>
              </table>
              <div className="payment-text">
                <a
                  href="https://onlinepayment.pdpu.ac.in/conferences"
                  className="text-payment"
                >
                  {" "}
                  Click here for Payment{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registraionfee;

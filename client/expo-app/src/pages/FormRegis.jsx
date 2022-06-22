import React from "react";
import RegisInput from "../components/Register";
import "../css/register.css";

const FormRegis = () => {
  return (
    <div
      className="container d-flex justify-content-center my-5"
    >
      <div className="col-xl-10">
        <div class="card bg-regis">
          <div class="card-body">
            <RegisInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegis;

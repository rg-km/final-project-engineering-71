import React from "react";
import RegisInput from "../components/Register";
import "../css/register.css";

import Gambar from "../assets/img-thumbnail-register.png";
import { useNavigate } from "react-router-dom";

const FormRegis = () => {
  const navigate = useNavigate();
  return (
    <section className="register py-5">
      <div className="container h-100">
        <div className="text-end">
          <button
            className="btn btn-primary shadow bg-purple"
            onClick={() => navigate("/")}
          >
            Back to Home &nbsp;<i class="fa-solid fa-angles-right"></i>
          </button>
        </div>

        <div className="card border-0 shadow-lg rounded-3 mt-5">
          <div className="card-body d-lg-flex py-4">
            <div className="col-lg-6 col-12 pe-lg-3">
              <RegisInput />
            </div>
            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
              <img
                src={Gambar}
                alt="Illustration Register"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegis;

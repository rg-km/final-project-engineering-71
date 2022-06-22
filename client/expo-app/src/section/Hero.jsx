import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="background-overlay">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-6 text-center">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>

          <center>
            <Link to="/register" className="btn btn-custom">
              Get Started
            </Link>
          </center>
        </div>
      </div>
    </section>
  );
}

export default Hero;

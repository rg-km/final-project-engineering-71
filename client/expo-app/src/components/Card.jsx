import React from "react";
import gambar from "../assets/contoh-image-karya.jpg";

function Card({ image, username, title, category, description }) {
  return (
    <>
      {Array(6)
        .fill(1)
        .map((_, i) => {
          return (
            <div class="col">
              <div class="card h-100">
                <img src={gambar} class="card-img-top" alt={title}></img>
                <div class="card-body pb-0">
                  <h5 class="card-title">Robotic Gear</h5>
                  <p className="card-text">
                    <ul style={{ padding: "0 0 0 18px" }}>
                      <li>Muhammad Riko</li>
                      <li>IT 4.0 Robotic</li>
                      <li>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Card;

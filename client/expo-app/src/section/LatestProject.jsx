import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import Card from "../components/Card";

export default function LatestProject() {
  // const [card, setCard] = React.useState([]);
  // const getCard = async () => {
  //   const res = await axios.get("http://localhost:8080/api/latestProject");
  //   setCard(res.data.data);
  // };

  // const listCard = card.map((item, index) => {
  //   return (
  //     <Card
  //       key={index}
  //       image={item.image}
  //       username={item.username}
  //       title={item.title}
  //       category={item.category}
  //       description={item.description}
  //     />
  //   );
  // });

  // React.useEffect(() => {
  //   getCard();
  // }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "80px", marginBottom: "100px" }}
    >
      <h2 className="text-center" style={{ color: "#8142D0" }}>
        Latest Project
      </h2>

      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 mt-5 mb-5 justify-content-center">
        <Card />
      </div>

      <center>
        <center>
          <Link to="/latest-project" className="btn btn-custom">
            See More
          </Link>
        </center>
      </center>
    </div>
  );
}

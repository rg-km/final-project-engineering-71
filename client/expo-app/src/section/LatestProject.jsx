import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import Card from "../components/Card";
import datas from "../api/LatestProject";

export default function LatestProject() {
  // const [card, setCard] = React.useState([]);
  // const getCard = async () => {
  //   const res = await axios.get("http://localhost:8080/api/latestProject");
  //   setCard(res.data.data);
  // };

  // const listProject = card.map((item, index) => {
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

  const listProject = datas.Project.map((item) => {
    return (
      <Card
        key={datas.Project.id}
        image={item.imgSrc}
        username={item.author.fullname}
        title={item.title}
        category={item.category}
        description={item.description}
      />
    );
  });

  return (
    <div
      className="container poppins"
      style={{ marginTop: "80px", marginBottom: "100px" }}
    >
      <div className="text-center">
        <h3 style={{ color: "#8142D0" }}>Latest Project</h3>
        <p>the latest list of student projects</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 my-5 justify-content-center">
        {listProject}
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

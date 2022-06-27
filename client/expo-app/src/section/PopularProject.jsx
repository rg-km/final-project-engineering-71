import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import Card from "../components/Card";
import datas from "../api/PopularProject";

export default function PopularProject() {
  // const [card, setCard] = React.useState([]);
  // const getCard = async () => {
  //   const res = await axios.get("http://localhost:8080/api/popular");
  //   setCard(res.data.data);
  // };

  // const listPopular = card.map((item, index) => {
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

  const listPopular = datas.Popular.map((item) => {
    return (
      <Card
        key={datas.Popular.id}
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
        <h3 style={{ color: "#8142D0" }}>Popular Project</h3>
        <p>list of student popular projects</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 my-5 justify-content-center">
        {listPopular}
      </div>

      <center>
        <center>
          <Link to="/popular-project" className="btn btn-custom">
            See More
          </Link>
        </center>
      </center>
    </div>
  );
}

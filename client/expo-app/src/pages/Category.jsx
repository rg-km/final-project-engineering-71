import React, {useEffect} from "react";
import axios from "axios";

function Category() {
  const [category, setCategory] = React.useState([]);

  const getCategory = async () => {
    const response = await axios.get("http://localhost:8080/api/category");
    setCategory(response.data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  let listCard = [
    {
      id: 1,
      title: "Robotic Gear 1",
    },
    {
      id: 2,
      title: "Robotic Gear 2",
    },
    {
      id: 3,
      title: "Robotic Gear 3",
    },
    {
      id: 4,
      title: "Robotic Gear 4",
    },
    {
      id: 5,
      title: "Robotic Gear 5",
    },
    {
      id: 6,
      title: "Robotic Gear 6",
    },
    {
      id: 7,
      title: "Robotic Gear 7",
    },
    {
      id: 8,
      title: "Robotic Gear 8",
    },
    {
      id: 9,
      title: "Robotic Gear 9",
    },
    {
      id: 10,
      title: "Robotic Gear 10",
    },
    {
      id: 11,
      title: "Robotic Gear 11",
    },
    {
      id: 12,
      title: "Robotic Gear 12",
    },
    {
      id: 13,
      title: "Robotic Gear 13",
    },
    {
      id: 14,
      title: "Robotic Gear 14",
    },
    {
      id: 15,
      title: "Robotic Gear 15",
    },
    {
      id: 16,
      title: "Robotic Gear 16",
    },
    {
      id: 17,
      title: "Robotic Gear 17",
    },
    {
      id: 18,
      title: "Robotic Gear 18",
    },
    {
      id: 19,
      title: "Robotic Gear 19",
    },
    {
      id: 20,
      title: "Robotic Gear 20",
    },
  ];

  return (
    <div className="container mt-5" style={{ marginBottom: "100px" }}>
      <h2 className="text-center" style={{ color: "#8142D0" }}>
        All Category
      </h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center mt-5">
        {listCard.map((item) => (
          <div class="col">
            <div class="card text-center">
              <div class="card-body">
                <i class="fs-4 mb-2 fa-solid fa-user"></i>
                <h5 class="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

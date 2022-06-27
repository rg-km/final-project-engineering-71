import React, {useEffect} from "react";
import axios from "axios";

import datas from '../api/Category';

function Category() {
  const [category, setCategory] = React.useState([]);

  const getCategory = async () => {
    const response = await axios.get("http://localhost:8080/api/category");
    setCategory(response.data);
  };

  const listCategory = datas.category;

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container poppins" style={{ marginTop: "130px", marginBottom: "100px" }}>
      <h3 className="text-center" style={{ color: "#8142D0" }}>
        All Category
      </h3>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center mt-5">
        {listCategory.map((item) => (
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <i className={`fs-4 mb-3 ${item.icon}`}></i>
                <h5 className="card-title">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

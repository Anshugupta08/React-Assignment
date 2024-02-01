import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        console.log("Main data: ", data);

        console.log("Step 3: Got data form API");
        setProducts(data);
      })
      .catch((err) => {
        console.log("Step 3: Got Error from API");
        console.log("Error : ", err);
        setProducts([]);
      });
  }, []);

  console.log("1. Re-Render: ", products);

  return (
    <>
      <Link to="/Search"> Back To Search Page</Link> <hr />
      {/* <Link to="/{item.id}"> go to </Link> */}
      {products && (
        <div className="box-container">
          {products.map((item, index) => (
            <div key={index} className="data-box">
              <img src={item.image} alt={item.title} />
              <hr />
              <h2> {item.title}</h2>
              <h4> Price : ₹ {item.price}</h4>
              <p>
                <strong>Description : </strong>
                {item.description}
              </p>
              <h4>In stock {item.rating.count}</h4>
              <h4>Rating {item.rating.rate}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowProducts;

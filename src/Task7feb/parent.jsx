import { useCallback, useEffect, useState } from "react";
import Child from "./child";

const Parent = () => {
  const [products, setProducts] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log("Got error from API");
        console.error(err);
        setProducts([]);
      });
  }, []);
  console.log("Re-Render", backgroundColor);
  const changeBackgroundColor = useCallback((id) => {
    // setBackgroundColor("green");
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          item.isActive = !item.isActive;
        }
        return item;
      });
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <Child
            // product={product}
            // image={product.image}
            // title={product.title}
            // id={product.id}
            // isActive={product.isActive}
            key={product.id}
            // description={product.description}
            {...product}
            bg={setBackgroundColor}
            onClick={changeBackgroundColor}
          />
        ))}
      </div>
    </>
  );
};

export default Parent;

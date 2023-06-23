import { useState } from "react";
import { useEffect } from "react";
import productservice from "./../../../services/ProductService";
import ProductItem from "./../../../components/ProductItem";
// import { useParams } from "react-router-dom";

function Product() {
  // const {page} = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  useEffect(function () {
    (async function () {
      await productservice.getProductAll(limit).then(function (result) {
        setProducts(result.data.products);
      });
    })();
  }, [limit]);
  return (
    <section className="content">
      <div className="product">
        {products.map(function (product, index) {
          return <ProductItem key={index} product={product} />;
        })}
      </div>
      <div className="text-center my-3">
        <button className="btn btn-success" onClick={() => setLimit(limit + 10)}>
          Xem thêm
        </button>
      </div>
    </section>
  );
}

export default Product;

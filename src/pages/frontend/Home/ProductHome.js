import ProductItem from "../../../components/ProductItem";
import { useEffect } from "react";
import { useState } from "react";
import productservice from "./../../../services/ProductService";
import { Link } from "react-router-dom";

function ProductHome(props) {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);
  // useEffect(
  //   function () {
  //     (async function () {
  //       await productservice
  //         .getProductHome(limit, props.category.id)
  //         .then(function (result) {
  //           setProducts(result.data.products);
  //         });
  //     })();
  //   },
  //   [limit]
  // );
  useEffect(() => {
    productservice.getProductHome(limit, props.category.id).then((res) => {
      setProducts(res.data.products);
    });
  }, [limit]);

  if (products != null) {
    return (
      <div className="container-product">
        <div className="product">
          <h3 className="text-left text-success">{props.category.name}</h3>
          {products?.map(function (product, index) {
            return <ProductItem key={index} product={product} />;
          })}
        </div>
        <div className="text-center my-3">
          <Link onClick={() => setLimit(limit + 4)} className="btn btn-success">
            Xem thêm
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>Hahahaha</div>;
  }
}
export default ProductHome;

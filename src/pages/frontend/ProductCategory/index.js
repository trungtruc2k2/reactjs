import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/ProductItem";
import categoryservice from "../../../services/CategoryService";
import { useParams } from "react-router-dom";

function ProductCategory() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState([]);
  //   const [limit, setLimit] = useState(10);
  useEffect(function () {
    (async function () {
      try {
        const infocategory = await categoryservice.getBySlug(slug);
        const catid = infocategory.data.category.id;
        const infoproduct = await productservice.getProductByCategoryId(10, catid);
        setProducts(infoproduct.data.products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <section className="content">
      <div className="product">
        {products?.map(function (product, index) {
          return <ProductItem key={index} product={product} />;
        })}
      </div>
      {/* <div className="text-center my-3">
        <button
          className="btn btn-success"
          onClick={() => setLimit(limit + 8)}
        >
          Xem thêm
        </button>
      </div> */}
    </section>
  );
}
export default ProductCategory;

import { useState } from "react";
import { useEffect } from "react";
import productservice from "./../../../services/ProductService";
import { useParams } from "react-router-dom";
import { urlImage } from "./../../../config";
import ProductItem from "./../../../components/ProductItem";

function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [product_other, setProductOther] = useState([]);
  useEffect(
    function () {
      (async function () {
        await productservice.getProductBySlug(slug).then(function (result) {
          if (result.data.success === true) {
            setProduct(result.data.product);
            setProductOther(result.data.product_other);
          }
        });
      })();
    },
    [slug]
  );
  return (
    <section className="mainContent">
      <div className="container m-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={urlImage + "product/" + product.image}
              alt={product.image}
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <h3>Giá Ưu Đãi: <span style={{fontSize:"36px"}}>{product.price} vnđ</span></h3>
            <h4>Giá Cũ: <span style={{textDecorationLine:"line-through",fontSize:"20px"}}>{product.price_sale} vnđ</span></h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>{product.detail}</p>
          </div>
        </div>
        <h3>Sản phẩm cùng loại</h3>
        <div className="row">
          <div className="col-md-12">
            {product_other.map(function (product, index) {
              return <ProductItem product={product} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetail;

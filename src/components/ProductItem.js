import { urlImage } from "./../config";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <div className="product-category text-center">
      <Link to={"/product-detail/" + props.product.slug}>
        <img
          src={urlImage + "product/" + props.product.image}
          className="img-fluid"
          alt="hinhanh"
        />
      </Link>
      <div className="name-product">
        <Link to={"/product-detail/" + props.product.slug}>
          {props.product.name}
        </Link>
      </div>
      <div className="price-product">{props.product.price} vnđ</div>
      <div className="price-sale-product">{props.product.price_sale} vnđ</div>
      <button className="buy">Mua</button>
    </div>
  );
}
export default ProductItem;

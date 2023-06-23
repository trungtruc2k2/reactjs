import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";
import { urlImage } from "./../../../config";

function ProductShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getById(id).then(function (result) {
        setProduct(result.data.product);
      });
    })();
  }, []);
  function productDelete(id) {
    productservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/product", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/product">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/product/update/" + product.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => productDelete(product.id)}
            >
              <FaTrash />
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: 300 }}>Tên trường</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Hình ảnh</th>
              <td>
                <img
                  src={urlImage + "product/" + product.image}
                  alt="hinhanh"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>Tên sản phẩm</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{product.slug}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{product.price}</td>
            </tr>
            <tr>
              <th>Price_sale</th>
              <td>{product.price_sale}</td>
            </tr>
            <tr>
              <th>Ngày tạo</th>
              <td>{product.create_at}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{product.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductShow;

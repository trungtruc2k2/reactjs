import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import { urlImage } from './../../../config';

function ProductList() {
  const [statusdel, setStatusDelete] = useState(0);
  const [product, setProduct] = useState([]);
  useEffect(
    function () {
      (async function () {
        await productservice.getAll().then(function (result) {
          setProduct(result.data.product);
        });
      })();
    },
    [statusdel]
  );
  function productDelete(id) {
    productservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">SẢN PHẨM</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/product/create">
              <FaPlus />
              Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body text-center">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Slug</th>
              <th>Price</th>
              <th>Price_sale</th>
              <th>Ngày tạo</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {product.map(function (product, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "product/" + product.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{ width: 100 }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.slug}</td>
                  <td>{product.price}</td>
                  <td>{product.price_sale}</td>
                  <td>{product.created_at}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/product/show/" + product.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{product.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductList;

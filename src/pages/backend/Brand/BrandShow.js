import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import brandservice from "../../../services/BrandService";
import { urlImage } from "./../../../config";

function BrandShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [brand, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getById(id).then(function (result) {
        setCategory(result.data.brand);
      });
    })();
  }, []);

  function brandDelete(id) {
    brandservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/brand", { replace: true });
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/brand">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/brand/update/" + brand.id}
            >
              <FaEdit />
            </Link>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => brandDelete(brand.id)}
            >
              <FaTrash />
            </button>
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
                  src={urlImage + "brand/" + brand.image}
                  alt="hinhanh"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>Tên danh mục</th>
              <td>{brand.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{brand.slug}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{brand.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BrandShow;

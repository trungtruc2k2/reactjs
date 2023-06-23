import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../services/BrandService";
import { useEffect, useState } from "react";
import { urlImage } from './../../../config';

function BrandList() {
  const [statusdel, setStatusDelete] = useState(0);
  const [brand, setBrand] = useState([]);
  useEffect(
    function () {
      (async function () {
        await brandservice.getAll().then(function (result) {
          setBrand(result.data.brand);
        });
      })();
    },
    [statusdel]
  );
  function brandDelete(id) {
    brandservice.remove(id).then(function (result) {
      alert(result.data.message);
      setStatusDelete(result.data.id);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">THƯƠNG HIỆU</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/brand/create">
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
              <th>Tên danh mục</th>
              <th>Slug</th>
              <th>Ngày tạo</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {brand.map(function (brand, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "brand/" + brand.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{width:100}}
                    />
                  </td>
                  <td>{brand.name}</td>
                  <td>{brand.slug}</td>
                  <td>{brand.created_at}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/brand/show/" + brand.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{brand.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BrandList;

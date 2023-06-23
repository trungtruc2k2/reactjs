import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import { urlImage } from "./../../../config";

function CategoryShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id).then(function (result) {
        setCategory(result.data.category);
      });
    })();
  }, []);

  function categoryDelete(id) {
    categoryservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/category", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT DANH MỤC</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/category">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/category/update/" + category.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => categoryDelete(category.id)}
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
                  src={urlImage + "category/" + category.image}
                  alt="hinhanh"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>Tên danh mục</th>
              <td>{category.name}</td>
            </tr>
            <tr>
              <th>Danh mục cha</th>
              <td>{category.parent_id}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{category.slug}</td>
            </tr>
            <tr>
              <th>Ngày tạo</th>
              <td>{category.create_at}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{category.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryShow;

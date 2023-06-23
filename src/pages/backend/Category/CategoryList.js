import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import categoryservice from "../../../services/CategoryService";
import { useEffect, useState } from "react";
import { urlImage } from "./../../../config";

function CategoryList() {
  const [category, setCategory] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  // useEffect(
  //   function () {
  //     (async function () {
  //       await categoryservice.getAll().then(function (result) {
  //         setCategory(result.data.category);
  //       });
  //     })();
  //   },
  //   [statusdel]
  // );
  useEffect(() => {
    categoryservice.getAll().then((res) => {
      setCategory(res.data.category);
    });
  }, [statusdel]);

  function categoryDelete(id) {
    categoryservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">DANH MỤC</strong>
          </div>
          <div className="col-6 text-end">
            <Link
              className="btn btn-sm btn-success"
              to="/admin/category/create"
            >
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
              <th>Danh mục cha</th>
              <th>Slug</th>
              <th>Ngày tạo</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {category.map(function (category, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "category/" + category.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{ width: 100 }}
                    />
                  </td>
                  <td>{category.name}</td>
                  <td>{category.parent_id}</td>
                  <td>{category.slug}</td>
                  <td>{category.created_at}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/category/show/" + category.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{category.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CategoryList;

import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";

function MenuShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getById(id).then(function (result) {
        setMenu(result.data.menu);
      });
    })();
  }, []);
  function menuDelete(id) {
    menuservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/menu", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT DANH SÁCH</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/menu">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/menu/update/" + menu.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => menuDelete(menu.id)}
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
              <th>Tên danh sách</th>
              <td>{menu.name}</td>
            </tr>
            <tr>
              <th>Link</th>
              <td>{menu.link}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{menu.type}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{menu.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuShow;

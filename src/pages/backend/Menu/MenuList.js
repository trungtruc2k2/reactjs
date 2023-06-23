import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import menuservice from "../../../services/MenuService";
import { useEffect, useState } from "react";

function MenuList() {
  const [statusdel, setStatusDelete] = useState(0);
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenu(result.data.menu);
      });
    })();
  }, [statusdel]);
  function menuDelete(id) {
    menuservice.remove(id).then(function (result) {
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
            <Link
              className="btn btn-sm btn-success"
              to="/admin/menu/create"
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
              <th>Tên danh sách</th>
              <th>Link</th>
              <th>Type</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {menu.map(function (menu, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{menu.name}</td>
                  <td>{menu.link}</td>
                  <td>{menu.type}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/menu/show/"+menu.id}
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      className="btn btn-sm btn-primary me-1"
                      to={"/admin/menu/update/"+menu.id}
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      className="btn btn-sm btn-danger"
                      onClick={() => menuDelete(menu.id)}
                    >
                      <FaTrash />
                    </Link>
                  </td>
                  <td>{menu.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MenuList;

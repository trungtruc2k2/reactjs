import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import userservice from "../../../services/UserService";
import { useEffect, useState } from "react";
import { urlImage } from './../../../config';

function UserList() {
  const [user, setUser] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  useEffect(
    function () {
      (async function () {
        await userservice.getAll().then(function (result) {
          setUser(result.data.user);
        });
      })();
    },
    [statusdel]
  );
  function userDelete(id) {
    userservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">TÀI KHOẢN</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/user/create">
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
              <th>Tên tài khoản</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Username</th>
              <th>Password</th>
              <th>Địa chỉ</th>
              <th>Roles</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {user.map(function (user, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "user/" + user.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{ width: 100 }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.address}</td>
                  <td>{user.roles}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/user/show/" + user.id}
                    >
                      <FaRegEye />
                    </Link>
                    <Link
                      className="btn btn-sm btn-primary me-1"
                      to={"/admin/user/update/" + user.id}
                    >
                      <FaEdit />
                    </Link>
                    <Link
                      className="btn btn-sm btn-danger"
                      onClick={() => userDelete(user.id)}
                    >
                      <FaTrash />
                    </Link>
                  </td>
                  <td>{user.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserList;

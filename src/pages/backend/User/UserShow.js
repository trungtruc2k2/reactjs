import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import userservice from "../../../services/UserService";
import { urlImage } from "./../../../config";

function UserShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getById(id).then(function (result) {
        setUser(result.data.user);
      });
    })();
  }, []);
  function userDelete(id) {
    userservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/user", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT TÀI KHOẢN</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/user">
              Về danh sách
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
                  src={urlImage + "user/" + user.image}
                  alt="hinhanh"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>Tên tài khoản</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Số điện thoại</th>
              <td>{user.phone}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{user.password}</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>{user.address}</td>
            </tr>
            <tr>
              <th>Roles</th>
              <td>{user.roles}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{user.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserShow;

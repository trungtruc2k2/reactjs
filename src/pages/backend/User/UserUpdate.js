import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userservice from "../../../services/UserService";

function UserUpdate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [user, setUser] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getById(id).then(function (result) {
        const tmp = result.data.user;
        // setUser(tmp);
        setName(tmp.name);
        setEmail(tmp.email);
        setPhone(tmp.phone);
        setStatus(tmp.status);
        setUsername(tmp.username);
        setPassword(tmp.password);
        setAddress(tmp.address);
        setRoles(tmp.roles);
      });
    })();
  }, []);
  // const [user, setUser] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getAll().then(function (result) {
        setUser(result.data.user);
      });
    })();
  }, []);
  async function userUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var user = new FormData();
    const image = document.querySelector("#image");
    user.append("name", name);
    user.append("email", email);
    user.append("phone", phone);
    user.append("username", username);
    user.append("password", password);
    user.append("address", address);
    user.append("roles", roles);
    user.append("status", status);
    if (image.files.length === 0) {
      user.append("image", "");
    } else {
      user.append("image", image.files[0]);
    }
    console.log(image.files[0]);
    await userservice.update(user,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/user", { replace: true });
    });
  }
  return (
    <form onSubmit={userUpdate} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">CẬP NHẬT DANH MỤC</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/user">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên tài khoản</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <textarea
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="roles">Roles</label>
                <input
                  type="text"
                  name="roles"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserUpdate;

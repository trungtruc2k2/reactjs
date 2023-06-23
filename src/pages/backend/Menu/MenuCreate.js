import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";

function MenuCreate() {
  const navigate = useNavigate();
  const [menu, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setContact(result.data.menu);
      });
    })();
  }, []);

  const [name, setName] = useState("");
  const [user_id, setUserId] = useState(1);
  const [link, setLink] = useState("");
  const [table_id, setTableId] = useState(1);
  const [type, setType] = useState("");
  const [status, setStatus] = useState(1);
  async function menuStore(event) {
    event.preventDefault();
    var menu = new FormData();
    menu.append("name", name);
    menu.append("user_id", user_id);
    menu.append("link", link);
    menu.append("table_id", table_id);
    menu.append("type", type);
    menu.append("status", status);
    await menuservice.create(menu).then(function (res) {
      alert(res.data.message);
      navigate("/admin/menu", { replace: true });
    });
  }
  return (
    <form onSubmit={menuStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM DANH SÁCH</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/menu">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên danh sách</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link">Link</label>
                <textarea
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="type">Type</label>
                <textarea
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-md-3">
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
      </div>
    </form>
  );
}

export default MenuCreate;

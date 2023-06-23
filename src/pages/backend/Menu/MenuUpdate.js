import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";

function MenuUpdate() {
  const navigate = useNavigate();

  const [user_id, setUserId] = useState(1);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [table_id, setTableId] = useState(1);
  const [sort_order, setSortOrder] = useState(1);
  const [parent_id, setParentId] = useState(0);
  const [type, setType] = useState("");
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getById(id).then(function (result) {
        const tmp = result.data.menu;
        // setMenu(tmp);
        setName(tmp.name);
        setLink(tmp.link);
        setType(tmp.type);
        setStatus(tmp.status);
      });
    })();
  }, []);
  // const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenu(result.data.menu);
      });
    })();
  }, []);
  async function MenuUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var menu = new FormData();
    menu.append("user_id", user_id);
    menu.append("name", name);
    menu.append("link", link);
    menu.append("table_id", table_id);
    menu.append("sort_order", sort_order);
    menu.append("parent_id", parent_id);
    menu.append("type", type);
    menu.append("status", status);
    // menu.forEach(function(v,k){
    //   console.log(k+"---"+v);
    // })
    await menuservice.update(menu,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/menu", { replace: true });
    });
  }
  return (
    <form onSubmit={MenuUpdate} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">CẬP NHẬT DANH SÁCH</strong>
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
    </form>
  );
}

export default MenuUpdate;

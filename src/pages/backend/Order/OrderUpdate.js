import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import orderservice from "../../../services/OrderService";

function OrderUpdate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [user_id, setUserId] = useState(1);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getById(id).then(function (result) {
        const tmp = result.data.order;
        // setOrder(tmp);
        setName(tmp.name);
        setPhone(tmp.phone);
        setEmail(tmp.email);
        setStatus(tmp.status);
        setAddress(tmp.address);
        setNote(tmp.note);
      });
    })();
  }, []);
  // const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrder(result.data.order);
      });
    })();
  }, []);
  async function orderUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var order = new FormData();
    order.append("name", name);
    order.append("user_id", user_id);
    order.append("phone", phone);
    order.append("email", email);
    order.append("address", address);
    order.append("note", note);
    order.append("status", status);
    await orderservice.update(order,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/order", { replace: true });
    });
  }
  return (
    <form onSubmit={orderUpdate} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">CẬP NHẬT ĐƠN HÀNG</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/order">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên đơn hàng</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note">Note</label>
                <textarea
                  name="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                ></textarea>
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

export default OrderUpdate;

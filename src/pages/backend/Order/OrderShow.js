import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import orderservice from "../../../services/OrderService";

function OrderShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getById(id).then(function (result) {
        setOrder(result.data.order);
      });
    })();
  }, []);
  function orderDelete(id) {
    orderservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/order", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/order">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/order/update/"+order.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => orderDelete(order.id)}
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
              <th>Tên đơn hàng</th>
              <td>{order.name}</td>
            </tr>
            <tr>
              <th>Số điện thoại</th>
              <td>{order.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Địa chỉ</th>
              <td>{order.address}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{order.note}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{order.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderShow;
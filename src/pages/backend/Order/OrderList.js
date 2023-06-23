import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";

function OrderList() {
  const [order, setOrder] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrder(result.data.order);
      });
    })();
  }, [statusdel]);
  function orderDelete(id) {
    orderservice.remove(id).then(function (result) {
      alert(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">ĐƠN HÀNG</strong>
          </div>
          <div className="col-6 text-end">
            <Link
              className="btn btn-sm btn-success"
              to="/admin/order/create"
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
              <th>Tên đơn hàng</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Address</th>
              <th>Note</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {order.map(function (order, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.email}</td>
                  <td>{order.address}</td>
                  <td>{order.note}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/order/show/"+order.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{order.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default OrderList;

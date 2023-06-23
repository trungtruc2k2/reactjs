import { Link, useParams,useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";

function ContactShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [contact, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getById(id).then(function (result) {
        setContact(result.data.contact);
      });
    })();
  }, []);
  function contactDelete(id) {
    contactservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/contact", { replace: true });
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT LIÊN HỆ</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/contact">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/contact/update/"+contact.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => contactDelete(contact.id)}
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
              <th>Tên liên hệ</th>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <th>Tiêu đề</th>
              <td>{contact.title}</td>
            </tr>
            <tr>
              <th>Nội dung</th>
              <td>{contact.content}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>Số điện thoại</th>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{contact.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactShow;
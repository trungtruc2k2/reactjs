import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import contactservice from "../../../services/ContactService";
import { useEffect, useState } from "react";

function ContactList() {
  const [statusdel, setStatusDelete] = useState(0);
  const [contact, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getAll().then(function (result) {
        setContact(result.data.contact);
      });
    })();
  }, [statusdel]);
  function contactDelete(id) {
    contactservice.remove(id).then(function (result) {
      alert(result.data.message);
      setStatusDelete(result.data.id);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">LIÊN HỆ</strong>
          </div>
          <div className="col-6 text-end">
            <Link
              className="btn btn-sm btn-success"
              to="/admin/contact/create"
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
              <th>Tên liên hệ</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {contact.map(function (contact, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.title}</td>
                  <td>{contact.content}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/contact/show/"+contact.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{contact.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ContactList;

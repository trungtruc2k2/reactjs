import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";

function ContactUpdate() {
  const navigate = useNavigate();

  const [user_id, setUserId] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [replay_id, setReplayId] = useState(1);
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [contact, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getById(id).then(function (result) {
        const tmp = result.data.contact;
        // setContact(tmp);
        setName(tmp.name);
        setEmail(tmp.email);
        setPhone(tmp.phone);
        setTitle(tmp.title);
        setContent(tmp.content);
        setStatus(tmp.status);
      });
    })();
  }, []);
  // const [contact, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getAll().then(function (result) {
        setContact(result.data.contact);
      });
    })();
  }, []);
  async function ContactUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var contact = new FormData();
    contact.append("user_id", user_id);
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("replay_id", replay_id);
    contact.append("status", status);
    // contact.forEach(function(v,k){
    //   console.log(k+"---"+v);
    // })
    await contactservice.update(contact,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/contact", { replace: true });
    });
  }
  return (
    <form onSubmit={ContactUpdate} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM LIÊN HỆ</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/contact">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên liên hệ</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <textarea
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="content">Content</label>
                <textarea
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                ></input>
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

export default ContactUpdate;

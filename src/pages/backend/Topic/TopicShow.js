import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import topicservice from "../../../services/TopicService";
import { urlImage } from './../../../config';

function TopicShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [topic, setTopic] = useState([]);
  useEffect(function () {
    (async function () {
      await topicservice.getById(id).then(function (result) {
        setTopic(result.data.topic);
      });
    })();
  }, []);
  function topicDelete(id) {
    topicservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/topic", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT DANH MỤC</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/topic">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/topic/update/"+topic.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => topicDelete(topic.id)}
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
              <th>Tên danh mục</th>
              <td>{topic.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{topic.slug}</td>
            </tr>
            <tr>
              <th>Danh mục cha</th>
              <td>{topic.parent_id}</td>
            </tr>
            <tr>
              <th>Chi tiết</th>
              <td>{topic.detail}</td>
            </tr>
            <tr>
              <th>Ngày tạo</th>
              <td>{topic.create_at}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{topic.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopicShow;
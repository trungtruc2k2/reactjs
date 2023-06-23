import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import topicservice from "../../../services/TopicService";
import { useEffect, useState } from "react";

function TopicList() {
  const [topic, setTopic] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  useEffect(function () {
    (async function () {
      await topicservice.getAll().then(function (result) {
        setTopic(result.data.topic);
      });
    })();
  }, [statusdel]);
  function topicDelete(id) {
    topicservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHỦ ĐỀ</strong>
          </div>
          <div className="col-6 text-end">
            <Link
              className="btn btn-sm btn-success"
              to="/admin/topic/create"
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
              <th>Tên chủ đề</th>
              <th>Slug</th>
              <th>Danh mục cha</th>
              <th>Chi tiết</th>
              <th>Ngày tạo</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {topic.map(function (topic, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{topic.name}</td>
                  <td>{topic.slug}</td>
                  <td>{topic.parent_id}</td>
                  <td>{topic.detail}</td>
                  <td>{topic.created_at}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/topic/show/"+topic.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{topic.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TopicList;

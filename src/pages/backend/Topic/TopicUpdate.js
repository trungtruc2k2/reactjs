import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import topicservice from "../../../services/TopicService";

function TopicUpdate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parent_id, setParentId] = useState(1);
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [topic, setTopic] = useState([]);
  useEffect(function () {
    (async function () {
      await topicservice.getById(id).then(function (result) {
        const tmp = result.data.topic;
        // setTopic(tmp);
        setName(tmp.name);
        setSlug(tmp.slug);
        setMetakey(tmp.metakey);
        setMetadesc(tmp.metadesc);
        setDetail(tmp.detail);
        setStatus(tmp.status);
      });
    })();
  }, []);
  // const [topic, setTopic] = useState([]);
  useEffect(function () {
    (async function () {
      await topicservice.getAll().then(function (result) {
        setTopic(result.data.topic);
      });
    })();
  }, []);
  async function TopicUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var topic = new FormData();
    topic.append("name", name);
    topic.append("slug", slug);
    topic.append("parent_id", parent_id);
    topic.append("metakey", metakey);
    topic.append("metadesc", metadesc);
    topic.append("detail", detail);
    topic.append("status", status);
    await topicservice.update(topic,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/topic", { replace: true });
    });
  }
  return (
    <form onSubmit={TopicUpdate} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">CẬP NHẬT DANH MỤC</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/topic">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên chủ đề</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="metadesc">Mô tả</label>
                <textarea
                  name="metadesc"
                  value={metadesc}
                  onChange={(e) => setMetadesc(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="detail">Chi tiết</label>
                <textarea
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="parent_id">Danh mục cha</label>
                <select
                  name="parent_id"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Danh mục cha</option>
                  {topic.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.parent_id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
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

export default TopicUpdate;

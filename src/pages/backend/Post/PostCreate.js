import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";

function PostCreate() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getAll().then(function (result) {
        setPost(result.data.post);
      });
    })();
  }, []);
  const [topic_id, setTopicId] = useState(1);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [detail, setDetail] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState(1);
  async function postStore(event) {
    event.preventDefault();
    var post = new FormData();
    const image = document.querySelector("#image");
    post.append("topic_id", topic_id);
    post.append("title", title);
    post.append("slug", slug);
    post.append("metakey", metakey);
    post.append("metadesc", metadesc);
    post.append("detail", detail);
    post.append("type", type);
    post.append("status", status);
    post.append("image", image.files[0]);
    if (image.files.length === 0) {
      post.append("image","");
    } else {
      post.append("image", image.files[0]);
    }
    console.log(image.files[0]);
    await postservice.create(post).then(function (res) {
      alert(res.data.message);
      navigate("/admin/post", { replace: true });
    });
  }
  return (
    <form onSubmit={postStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM BÀI VIẾT</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/post">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
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
                <label htmlFor="detail">Detail</label>
                <textarea
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
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
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="image">Hình ảnh</label>
                <input type="file" id="image" className="form-control" />
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

export default PostCreate;

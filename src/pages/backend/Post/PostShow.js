import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import { urlImage } from "./../../../config";

function PostShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getById(id).then(function (result) {
        setPost(result.data.post);
      });
    })();
  }, []);
  function postDelete(id) {
    postservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/post", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT BÀI VIẾT</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/post">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/post/update/" + post.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => postDelete(post.id)}
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
              <th>Hình ảnh</th>
              <td>
                <img
                  src={urlImage + "post/" + post.image}
                  alt="hinhanh"
                  className="img-fluid"
                  style={{ width: 100 }}
                />
              </td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{post.slug}</td>
            </tr>
            <tr>
              <th>Detail</th>
              <td>{post.detail}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{post.type}</td>
            </tr>
            <tr>
              <th>Từ khóa</th>
              <td>{post.metakey}</td>
            </tr>
            <tr>
              <th>Mô tả</th>
              <td>{post.metadesc}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{post.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostShow;

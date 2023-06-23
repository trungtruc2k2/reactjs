import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import postservice from "../../../services/PostService";
import { useEffect, useState } from "react";
import { urlImage } from './../../../config';

function PostList() {
  const [post, setPost] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  useEffect(
    function () {
      (async function () {
        await postservice.getAll().then(function (result) {
          setPost(result.data.post);
        });
      })();
    },
    [statusdel]
  );
  function postDelete(id) {
    postservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">BÀI VIẾT</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/post/create">
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
              <th>Hình ảnh</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Detail</th>
              <th>Type</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {post.map(function (post, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "post/" + post.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{ width: 100 }}
                    />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.slug}</td>
                  <td>{post.detail}</td>
                  <td>{post.type}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/post/show/" + post.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{post.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PostList;

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";

function CategoryUpdate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id).then(function (result) {
        const tmp = result.data.category;
        setName(tmp.name);
        setSlug(tmp.slug);
        setMetakey(tmp.metakey);
        setMetadesc(tmp.metadesc);
        setStatus(tmp.status);
        setParentId(tmp.parent_id);
        setSortOrder(tmp.sort_order);
      });
    })();
  }, []);
  // const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.category);
      });
    })();
  }, []);
  async function CategoryUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var category = new FormData();
    const image = document.querySelector("#image");
    category.append("name", name);
    category.append("slug", slug);
    category.append("metakey", metakey);
    category.append("metadesc", metadesc);
    category.append("parent_id", parent_id);
    category.append("sort_order", sort_order);
    category.append("status", status);
    if (image.files.length === 0) {
      category.append("image", "");
    } else {
      category.append("image", image.files[0]);
    }
    category.forEach(function (v, k) {
      console.log(k + "---" + v);
    });
    await categoryservice.update(category, id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/category", { replace: true });
    });
  }
  return (
    <form onSubmit={CategoryUpdate}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM DANH MỤC</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/category">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="slug">Slug</label>
                <textarea
                  name="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                ></textarea>
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
                  {category.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  name="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Sắp xếp</option>
                  {category.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.sort_order + 1}>
                        Sau:{cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
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

export default CategoryUpdate;

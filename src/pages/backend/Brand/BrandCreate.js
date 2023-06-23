import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import brandservice from "../../../services/BrandService";

function BrandCreate() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrand(result.data.brand);
      });
    })();
  }, []);
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [status, setStatus] = useState(1);
  async function brandStore(event) {
    event.preventDefault();
    var brand = new FormData();
    const image = document.querySelector("#image");
    brand.append("name", name);
    brand.append("metakey", metakey);
    brand.append("metadesc", metadesc);
    brand.append("sort_order", sort_order);
    brand.append("status", status);
    brand.append("image", image.files[0]);
    if (image.files.length === 0) {
      brand.append("image","");
    } else {
      brand.append("image", image.files[0]);
    }
    console.log(image.files[0]);
    await brandservice.create(brand).then(function (res) {
      alert(res.data.message);
      navigate("/admin/brand", { replace: true });
    });
  }
  return (
    <form onSubmit={brandStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM THƯƠNG HIỆU</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/brand">
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
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  name="sort_order"
                  value={sort_order}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Sắp xếp</option>
                  {brand.map(function (cat, index) {
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

export default BrandCreate;

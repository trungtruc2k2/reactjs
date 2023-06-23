import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import productservice from "../../../services/ProductService";

function ProductCreate() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getAll().then(function (result) {
        setProduct(result.data.product);
      });
    })();
  }, []);
  const [category_id, setCategoryId] = useState(1);
  const [brand_id, setBrandId] = useState(1);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [price, setPrice] = useState("");
  const [price_sale, setPriceSale] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState(1);
  async function ProductStore(event) {
    event.preventDefault();
    var product = new FormData();
    const image = document.querySelector("#image");
    product.append("category_id", category_id);
    product.append("brand_id", brand_id);
    product.append("qty", qty);
    product.append("name", name);
    product.append("slug", slug);
    product.append("price", price);
    product.append("price_sale", price_sale);
    product.append("metakey", metakey);
    product.append("metadesc", metadesc);
    product.append("detail", detail);
    product.append("status", status);
    if (image.files.length === 0) {
      product.append("image", "");
    } else {
      product.append("image", image.files[0]);
    }
    console.log(image.files[0]);
    product.forEach(function(v,k){
      console.log(k+"---"+v);
    })
    await productservice.create(product).then(function (res) {
      alert(res.data.message);
      navigate("/admin/product", { replace: true });
    });
  }
  return (
    <form onSubmit={ProductStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-6">
              <strong className="text-primary">THÊM SẢN PHẨM</strong>
            </div>
            <div className="col-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-2">
                Lưu
              </button>
              <Link className="btn btn-sm btn-info" to="/admin/product">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên sản phẩm</label>
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
                <label htmlFor="price">Giá</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price_sale">Giá sale</label>
                <input
                  type="text"
                  name="price_sale"
                  value={price_sale}
                  onChange={(e) => setPriceSale(e.target.value)}
                  className="form-control"
                />
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

export default ProductCreate;

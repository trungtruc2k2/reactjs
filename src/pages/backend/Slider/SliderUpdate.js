import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import sliderservice from "../../../services/SliderService";

function SliderUpdate() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [position, setPosition] = useState("");
  const [sort_order, setSortOrder] = useState(0);
  const [status, setStatus] = useState(1);

  const { id } = useParams();

  const [slider, setSlider] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getById(id).then(function (result) {
        const tmp = result.data.slider;
        // setSlider(tmp);
        setName(tmp.name);
        setLink(tmp.link);
        setPosition(tmp.position);
        setStatus(tmp.status);
        setSortOrder(tmp.sort_order);
      });
    })();
  }, []);
  // const [slider, setSlider] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getAll().then(function (result) {
        setSlider(result.data.slider);
      });
    })();
  }, []);
  async function sliderUpdate(event) {
    event.preventDefault();
    // alert("Thành công");
    var slider = new FormData();
    slider.append("name", name);
    slider.append("link", link);
    slider.append("position", position);
    slider.append("sort_order", sort_order);
    slider.append("status", status);
    await sliderservice.update(slider,id).then(function (res) {
      alert(res.data.message);
      navigate("/admin/slider", { replace: true });
    });
  }
  return (
    <form onSubmit={sliderUpdate} method="post">
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
              <Link className="btn btn-sm btn-info" to="/admin/slider">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên slider</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="link">Link</label>
                <textarea
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="position">Position</label>
                <textarea
                  name="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
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
                  {slider.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.sort_order}>
                        Sau:{cat.name}
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

export default SliderUpdate;

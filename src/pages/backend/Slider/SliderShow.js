import { Link, useParams, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import sliderservice from "../../../services/SliderService";
import { urlImage } from "./../../../config";

function SliderShow() {
  const { id } = useParams("id");
  const navigate = useNavigate();
  const [slider, setSlider] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getById(id).then(function (result) {
        setSlider(result.data.slider);
      });
    })();
  }, []);
  function sliderDelete(id) {
    sliderservice.remove(id).then(function (result) {
      alert(result.data.message);
      navigate("/admin/slider", { replace: true });
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT SLIDER</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-info me-1" to="/admin/slider">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/slider/update/" + slider.id}
            >
              <FaEdit />
            </Link>
            <Link
              className="btn btn-sm btn-danger"
              onClick={() => sliderDelete(slider.id)}
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
              <img
                src={urlImage + "slider/" + slider.image}
                alt="hinhanh"
                className="img-fluid"
                style={{ width: 200 }}
              />
            </tr>
            <tr>
              <th>Tên slider</th>
              <td>{slider.name}</td>
            </tr>
            <tr>
              <th>Link</th>
              <td>{slider.link}</td>
            </tr>
            <tr>
              <th>Position</th>
              <td>{slider.position}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{slider.id}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SliderShow;

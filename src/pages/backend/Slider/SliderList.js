import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import sliderservice from "../../../services/SliderService";
import { useEffect, useState } from "react";
import { urlImage } from "./../../../config";

function SliderList() {
  const [slider, setSlider] = useState([]);
  const [statusdel, setStatusDelete] = useState(0);
  useEffect(
    function () {
      (async function () {
        await sliderservice.getAll().then(function (result) {
          setSlider(result.data.slider);
        });
      })();
    },
    [statusdel]
  );
  function sliderDelete(id) {
    sliderservice.remove(id).then(function (result) {
      console.log(result.data.message);
      setStatusDelete(result.data.id);
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">SLIDER</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success" to="/admin/slider/create">
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
              <th>Tên slider</th>
              <th>Link</th>
              <th>Position</th>
              <th>Chức năng</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {slider.map(function (slider, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img
                      src={urlImage + "slider/" + slider.image}
                      alt="hinhanh"
                      className="img-fluid"
                      style={{width:200}}
                    ></img>
                  </td>
                  <td>{slider.name}</td>
                  <td>{slider.link}</td>
                  <td>{slider.position}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/slider/show/" + slider.id}
                    >
                      <FaRegEye />
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
                  </td>
                  <td>{slider.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SliderList;

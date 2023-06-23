import { useState } from "react";
import { useEffect } from "react";
import sliderservice from "../../../services/SliderService";
import { urlImage } from "../../../config";

function Slideshow() {
  // const [sliders, setSliders] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await sliderservice.getByPosition("slideshow").then(function (result) {
  //       setSliders(result.data.sliders);
  //     });
  //   })();
  // }, []);

  const Listslider = [
    {
      name: "Slider 01",
      image:
        "https://thietkehaithanh.com/wp-content/uploads/2019/06/huong-dan-thiet-ke-banner-dien-thoai-bang-photoshop.jpg",
    },
    {
      name: "Slider 02",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/198985/Slider/vi-vn-huawei-p30-lite-thumbvideo.jpg",
    },
    {
      name: "Slider 03",
      image:
        "https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2020/01/Huawei-P30-Lite-New-ra-mat-1.jpg",
    },
  ];
  return (
    <section className="myslider">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {Listslider.map(function (slider, index) {
            if (index === 0) {
              return (
                <div className="carousel-item active" key={index}>
                  <img
                    src={slider.image}
                    className="d-block w-100"
                    alt={slider.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Huawei P30 Lite</h5>
                    <p>
                      P30 Lite có màn hình 6.0 inch Full HD+, thiết kế giọt nước
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item" key={index}>
                  <img
                    src={slider.image}
                    className="d-block w-100"
                    alt={slider.image}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Huawei P30 Lite</h5>
                    <p>Attractive and affordable, with excellent cameras.</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Slideshow;

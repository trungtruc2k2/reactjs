import Slideshow from "./Slideshow";
import Category1 from "../../../assets/images/category/category1.jpg";
import Category2 from "../../../assets/images/category/category2.jpg";
import Category3 from "../../../assets/images/category/category3.jpg";
import Category4 from "../../../assets/images/category/category4.jpg";
import Category5 from "../../../assets/images/category/category5.jpg";
import Category6 from "../../../assets/images/category/category6.jpg";
import Category7 from "../../../assets/images/category/category7.jpg";
import Category8 from "../../../assets/images/category/category8.jpg";
import Category9 from "../../../assets/images/category/category9.jpg";
import Category10 from "../../../assets/images/category/category10.jpg";
import Category11 from "../../../assets/images/category/category11.jpg";
import { useState } from "react";
import { useEffect } from "react";
import categoryservice from "../../../services/CategoryService";
import ProductHome from "./ProductHome";
import { Link } from "react-router-dom";

function Home() {
  const [categorys, setCategorys] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await categoryservice.getCategoryByParentId(0).then(function (result) {
  //       setCategorys(result.data.categorys);
  //     });
  //   })();
  // }, []);
  useEffect(() => {
    categoryservice.getCategoryByParentId(0).then((res) => {
      setCategorys(res.data.categorys);
    });
  }, []);

  return (
    <section className="content">
      <div className="slider">
        <Slideshow />
      </div>

      <div className="category">
        <Link to="/" className="category-title">
          <img src={Category1} className="img-fluid" alt="hinhanh" />
          <div className="name-category">iPhone</div>
        </Link>
        <div className="category-title">
          <img src={Category2} className="img-fluid" alt="hinhanh" />
          <div className="name-category">SamSung</div>
        </div>
        <div className="category-title">
          <img src={Category3} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Oppo</div>
        </div>
        <div className="category-title">
          <img src={Category4} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Xiaomi</div>
        </div>
        <div className="category-title">
          <img src={Category5} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Vivo</div>
        </div>
        <div className="category-title">
          <img src={Category6} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Realme</div>
        </div>
        <div className="category-title">
          <img src={Category7} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Vertu</div>
        </div>
        <div className="category-title">
          <img src={Category8} className="img-fluid" alt="hinhanh" />
          <div className="name-category">iPhone cũ</div>
        </div>
        <div className="category-title">
          <img src={Category9} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Huawei</div>
        </div>
        <div className="category-title">
          <img src={Category10} className="img-fluid" alt="hinhanh" />
          <div className="name-category">OnePlus</div>
        </div>
        <div className="category-title">
          <img src={Category11} className="img-fluid" alt="hinhanh" />
          <div className="name-category">Nokia</div>
        </div>
        {categorys.map(function (category, index) {
          return <ProductHome key={index} category={category} />;
        })}
      </div>
    </section>
  );
}

export default Home;

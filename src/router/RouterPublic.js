import Home from "../pages/frontend/Home/Home";
import Introduce from "../pages/frontend/Introduce/Introduce";
import Product from "../pages/frontend/Product/Product";
import Contact from "../pages/frontend/Contact/Contact";
import Endow from "../pages/frontend/Endow/Endow";
import News from "../pages/frontend/News/News";
import Popularity from "../pages/frontend/Popularity/Popularity";
import ProductDetail from './../pages/frontend/Product/ProductDetail';
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductBrand from "../pages/frontend/ProductBrand";

const RouterPublic = [
  { path: "/", component: Home },
  { path: "/introduce", component: Introduce },
  { path: "/product", component: Product },
  { path: "/product-detail/:slug", component: ProductDetail },
  { path: "/product-category/:slug", component: ProductCategory },
  { path: "/product-brand/:slug", component: ProductBrand },
  { path: "/contact", component: Contact },
  { path: "/endow", component: Endow },
  { path: "/news", component: News },
  { path: "/popularity", component: Popularity },
];
export default RouterPublic;

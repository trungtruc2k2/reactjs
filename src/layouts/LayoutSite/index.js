import { Outlet, Link } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// để link boostrap ở đây để các con của nó dùng luôn

//hàm index nhưng đặt tên là LayoutSite trùng với thư mục tên do người build đặt
function LayoutSite() {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
}
export default LayoutSite;

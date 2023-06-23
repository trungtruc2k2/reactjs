import { Link } from "react-router-dom";
import menuservice from "../../services/MenuService";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

function Menu() {
  const [menus, setMenus] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await menuservice.getByParentId("mainmenu", 0).then(function (result) {
  //       setMenus(result.data.menus);
  //     });
  //   })();
  // }, []);
  useEffect(() => {
    menuservice.getByParentId("mainmenu", 0).then((res) => {
      setMenus(res.data.menus);
    });
  }, []);

  return (
    <section className="menu">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link
              className="navbar-brand text-black d-md-none d-sm-block"
              to="/"
            >
              Smartpoint
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {menus.map(function (menu, index) {
                  return <MenuItem key={index} menu={menu} />;
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Menu;

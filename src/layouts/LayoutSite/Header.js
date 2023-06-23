import React from "react";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaCashRegister, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import "./HeaderStyle.css";
function Header() {
  return (
    <section className="header">
      {/* container de phan noi khong bi thut ra ngoai */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2">
            {/* khong dung the a dung the link */}
            <div className="logoheader">
              <div>
                <Link>
                  <img src={Logo} className="img-fluid" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-1">
            <div className="logan-fluid">
              <h2>Smartpoint</h2>
            </div>
          </div>
          <div className="col-xl-4 pt-4">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-3 pt-3">
            <div className="account">
              <ul className="menutop">
                <li>
                  <Link>
                    <FaCashRegister /> REGISTER
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaSignInAlt /> LOGIN
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menuunder">
              <p>Chất lượng luôn luôn ưu tiên</p>
            </div>
          </div>
          <div className="col-xl-2">
            <Link>
              <div className="cart">
                <FaShoppingCart />
                <p>0</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

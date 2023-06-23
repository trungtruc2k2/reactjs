import { Link } from "react-router-dom";
import Payment1 from "../../assets/images/payment/payment1.jpg";
import Payment2 from "../../assets/images/payment/payment2.jpg";
import Payment3 from "../../assets/images/payment/payment3.jpg";
import Payment4 from "../../assets/images/payment/payment4.jpg";
import Payment5 from "../../assets/images/payment/payment5.jpg";
import Payment6 from "../../assets/images/payment/payment6.jpg";
import Payment7 from "../../assets/images/payment/payment7.jpg";
import Payment8 from "../../assets/images/payment/payment8.jpg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="grid__column-4">
        <h5 className="footer__heading">Đối tác thanh toán</h5>
        <img src={Payment1} alt="img" />
        <img src={Payment2} alt="img" />
        <img src={Payment3} alt="img" />
        <img src={Payment4} alt="img" />
        <img src={Payment5} alt="img" />
        <img src={Payment6} alt="img" />
        <img src={Payment7} alt="img" />
        <img src={Payment8} alt="img" />
      </div>
      <div className="grid__column-4">
        <h5 className="footer__heading">Về chúng tôi</h5>
        <ul className="footer-list">
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Đặt hàng
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Liên hệ chúng tôi
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid__column-4">
        <h5 className="footer__heading">Theo dõi chúng tôi trên</h5>
        <ul className="footer-list">
          <li className="footer-item">
            <Link to="https://www.facebook.com/" className="footer-item__link">
              Facebook
            </Link>
          </li>
          <li className="footer-item">
            <Link to="https://www.instagram.com/" className="footer-item_icon footer-item__link">
              Instargram
            </Link>
          </li>
          <li className="footer-item">
            <Link to="https://www.youtube.com/" className="footer-item_icon footer-item__link">
              Youtube
            </Link>
          </li>
        </ul>
      </div>
      <div className="grid__column-4">
        <h5 className="footer__heading">Khác</h5>
        <ul className="footer-list">
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Chính sách mua hàng
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Chính sách bảo hành
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Chính sách vận chuyển
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#" className="footer-item__link">
              Chính sách đổi trả
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

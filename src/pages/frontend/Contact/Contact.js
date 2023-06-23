import { Link } from "react-router-dom";
import "../../../layouts/LayoutSite/HeaderStyle.css";
function Contact() {
  return (
    <div className="content" style={{ height: 500 }}>
      <div className="container">
        <div className="col-md-3">
          <h3>Thông tin liên hệ</h3>
          <p className="p-bottom">
            Website bán các mặt hàng điện tử là đơn vị chủ quản, chịu trách
            nhiệm và thực hiện các giao dịch liên quan quá trình mua và đặt
            trước sản phẩm. Hỗ trợ khách hàng nhanh chóng nhất.
          </p>
          <div className="contact-box">
            <p className="add">
              <strong>Địa chỉ: </strong>Khu phố 2, Hiệp Bình Chánh, TP Thủ Đức
            </p>
            <p className="phone">
              <strong>Điện thoại: </strong>
              <Link to="tel:19002549">19002549</Link>
            </p>
            <p className="mail">
              <strong>Email: </strong>
              <Link to="#">nguyenkiet0049@gmail.com</Link>
            </p>
          </div>
          <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7527918654805!2d106.71462017167869!3d10.830220734623458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752880eb1dd5f7%3A0xf5c98a33a9bd7425!2zxJAuIDQ1LCBIaeG7h3AgQsOsbmggQ2jDoW5oLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1687256027886!5m2!1svi!2s"
            style={{ border: 0, width: 1100, height: 450 , marginTop:"100px"}}
          ></iframe>
        </div>
        </div>
        <div className="col-md-7">
          <form
            method="post"
            id="contact"
            accept-charset="UTF-8"
            className="has-validation-callback"
          >
            <input name="FormType" type="hidden" value="contact" />
            <input name="utf8" type="hidden" value="true" />
            <input type="hidden" />

            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <label>
                    Họ và tên<span className="required asterisk">*</span>
                  </label>
                  <input
                    placeholder="Nhập họ và tên"
                    type="text"
                    name="name"
                    id="name"
                    className="form-control  form-control-lg"
                    data-validation-error-msg="Không được để trống"
                    data-validation="required"
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <label>
                    Email<span className="required asterisk">*</span>
                  </label>
                  <input
                    placeholder="Nhập địa chỉ Email muốn gửi"
                    type="email"
                    name="email"
                    data-validation="email"
                    data-validation-error-msg="Email sai định dạng"
                    id="email"
                    className="form-control form-control-lg"
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-xs-12">
                <div className="form-group">
                  <label>
                    Điện thoại<span className="required asterisk">*</span>
                  </label>
                  <input
                    placeholder="Nhập số điện thoại"
                    type="tel"
                    name="phone"
                    data-validation-error-msg="Không được để trống"
                    data-validation="required"
                    id="tel"
                    className="number-phone form-control form-control-lg"
                    required=""
                  />
                </div>
              </div>
              <div className="col-sm-12 col-xs-12">
                <label>
                  Nội dung<span className="required asterisk">*</span>
                </label>
                <textarea
                  placeholder="Nội dung liên hệ"
                  name="body"
                  id="comment"
                  className="form-control form-control-lg error"
                  rows="5"
                  data-validation-error-msg="Không được để trống"
                  data-validation="required"
                  required=""
                ></textarea>
                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    className="send btn-style-active"
                  >
                    Gửi tin nhắn
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

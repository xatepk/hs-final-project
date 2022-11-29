import ig from '../img/icons/black/ig.svg';
import vk from '../img/icons/black/vk.svg';
import fb from '../img/icons/black/fb.svg';
import visa from '../img/icons/payment/visa.svg';
import webpay from '../img/icons/payment/webpay.svg';
import verified from '../img/icons/payment/verified.svg';
import mastercard from '../img/icons/payment/mastercard.svg';
import securecode from '../img/icons/payment/securecode.svg';
import belcard from '../img/icons/payment/belcard.svg';

function Information() {
  return (
    <div className="footer__information">
      <div className="footer__networks">
        <p className="footer__networks-title">Мы в соцсетях</p>
        <ul className="footer__networks-list">
          <li className="footer__networks-item">
            <img src={ig} alt="иконка" className="footer__networks-icon" />
          </li>
          <li className="footer__networks-item">
            <img src={vk} alt="иконка" className="footer__networks-icon" />
          </li>
          <li className="footer__networks-item">
            <img src={fb} alt="иконка" className="footer__networks-icon" />
          </li>
        </ul>
      </div>
      <ul className="footer__payment">
        <li className="footer__payment-list">
          <img src={visa} alt="иконка" className="footer__payment-icon" />
        </li>
        <li className="footer__payment-list">
          <img src={webpay} alt="иконка" className="footer__payment-icon" />
        </li>
        <li className="footer__payment-list">
          <img src={verified} alt="иконка" className="footer__payment-icon" />
        </li>
        <li className="footer__payment-list">
          <img src={mastercard} alt="иконка" className="footer__payment-icon" />
        </li>
        <li className="footer__payment-list">
          <img src={securecode} alt="иконка" className="footer__payment-icon" />
        </li>
        <li className="footer__payment-list">
          <img src={belcard} alt="иконка" className="footer__payment-icon" />
        </li>
      </ul>
    </div>
  );
}

export default Information;


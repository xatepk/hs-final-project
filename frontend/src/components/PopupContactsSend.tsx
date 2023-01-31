import { Dispatch, SetStateAction } from "react";

interface PopupProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
function PopupContactsSend({ active, setActive }: PopupProps) {

  function handleButtonClick(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setActive(false);
  }

  return (
    <div className={`contacts__popup ${active && "contacts__popup_active"}`} onClick={()=> setActive(false)}>
      <div className="contacts__popup-content" onClick={(e) => e.stopPropagation()}>
        <p className="contacts__popup-title">Ваше письмо отправлено!</p>
        <p className="contacts__popup-desc">Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
        <button className="contacts__popup-button" onClick={handleButtonClick}>Закрыть окно</button>
      </div>
    </div>
  );
}

export default PopupContactsSend;

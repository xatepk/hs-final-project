interface IShareProps {
  purple?: boolean;
}

function ShareNetworks({ purple }: IShareProps) {
  return (
    <div className="share">
      <p className={`share__title ${purple && 'share__title_purple'}`}>Поделиться</p>
      <ul className="share__list">
        <li className="share__item">
          <button className={`share__button share__button_vk ${purple && 'share__button_purple-vk'}`}></button>
        </li>
        <li className="share__item">
          <button className={`share__button share__button_fb ${purple && 'share__button_purple-fb'}`}></button>
        </li>
        <li className="share__item">
          <button className={`share__button share__button_phone ${purple && 'share__button_purple-phone'}`}></button>
        </li>
        <li className="share__item">
          <button className={`share__button share__button_tg ${purple && 'share__button_purple-tg'}`}></button>
        </li>
        <li className="share__item">
          <button className={`share__button share__button_wa ${purple && 'share__button_purple-wa'}`}></button>
        </li>
      </ul>
    </div>
  );
}

export default ShareNetworks;

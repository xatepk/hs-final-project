interface InputComponentProps {
  type: string;
  name: string;
  placeholder: string;
  img: string;
  error?: boolean;

}

function InputComponent({type, name, placeholder, img, error}: InputComponentProps) {
  return (
    <div className="auth__form-input">
      <img src={img} alt="иконка инпута"
      className="auth__form-item-img" />
      <input type={type} className={`auth__form-item ${error && "auth__form-item_error"}`} required
      name={name} placeholder={placeholder} autoComplete="off" />
    </div>
   );
}

export default InputComponent;

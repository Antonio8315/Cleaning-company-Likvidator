import './Button.css';

export function Button({ children, variant = 'filled', onClick }) {
  const baseStyle = "button-header";

  const variants = {
    filled: "button-header-filled",
    outline: "button-header-outline"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

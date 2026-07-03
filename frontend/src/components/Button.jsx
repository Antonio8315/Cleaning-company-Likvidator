import './Button.css';

export function Button({ children, variant = 'filled', onClick }) {
const baseStyle = "button-header";
  
  // Стилі залежно від варіанту (на прикладі Tailwind)
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
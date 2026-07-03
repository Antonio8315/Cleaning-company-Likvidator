import './CircleIcon.css';

export function CircleIcon({ iconUrl, altText = "іконка" }) {
  return (
    <div className="circle-icon-container">
      <img src={iconUrl} alt={altText} className="circle-icon-image" />
    </div>
  );
}
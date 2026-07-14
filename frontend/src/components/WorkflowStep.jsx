// src/components/WorkflowStep.jsx
import { CircleIcon } from './CircleIcon';
import './WorkflowStep.css';

export function WorkflowStep({ icon, text }) {

  return (
    <div className="workflow-step">
      {/* Перевикористовуємо наш білий кружечок */}
      <CircleIcon iconUrl={icon} altText={text} />
      
      {/* Текст під кружечком */}
      <p className="workflow-step-text">{text}</p>
    </div>
  );
}
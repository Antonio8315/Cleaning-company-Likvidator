// src/sections/Workflow.jsx
import { WorkflowStep } from '../components/WorkflowStep';
import './Workflow.css';

// Імпорт іконок
import iconDoc from '../assets/icons/WorkflowIcons/document.svg';
import iconPhone from '../assets/icons/WorkflowIcons/phone.svg';
import iconCar from '../assets/icons/WorkflowIcons/car.svg';
import iconCheck from '../assets/icons/WorkflowIcons/check.svg';
import iconCash from '../assets/icons/WorkflowIcons/cash.svg';

export function Workflow() {
  const stepsData = [
    { id: 1, icon: iconDoc, text: "ви залишаєте заявку або телефонуєте" },
    { id: 2, icon: iconPhone, text: "менеджер прораховує вартість робіт" },
    { id: 3, icon: iconCar, text: "якщо потрібно то приїжджає до вас на оцінку" },
    { id: 4, icon: iconCheck, text: "якісно виконуємо послуги" },
    { id: 5, icon: iconCash, text: "оплата зручним для вас способом" }
  ];

  return (
    <section className="workflow-section">
      <div className="workflow-header">
        <h2>ЯК МИ ПРАЦЮЄМО</h2>
        <div className="workflow-underline"></div>
      </div>

      {/* Ряд із кроками */}
      <div className="workflow-container">
        {stepsData.map(step => (
          <WorkflowStep key={step.id} icon={step.icon} text={step.text} />
        ))}
      </div>
    </section>
  );
}
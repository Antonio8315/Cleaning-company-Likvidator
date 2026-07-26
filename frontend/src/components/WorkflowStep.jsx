import { CircleIcon } from './CircleIcon';

import './WorkflowStep.css';

export function WorkflowStep({ icon, text }) {

  return (
    <div className="workflow-step">
      <CircleIcon iconUrl={icon} altText={text} />

      <p className="workflow-step-text">{text}</p>
    </div>
  );
}
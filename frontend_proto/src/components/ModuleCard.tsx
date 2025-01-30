import React from 'react';
import '../styles/ModuleCard.css'

interface ModuleCardProps {
  moduleCode: string;
  moduleName: string;
  school: string;
  creditUnits: number;
  description: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  moduleCode,
  moduleName,
  school,
  creditUnits,
  description,
}) => {
  return (
    <div className="module-card">
      <div className="module-code">{moduleCode}</div>
      <div className="module-name">{moduleName}</div>
      <div className="module-info">
        {school} • {creditUnits} Units
      </div>
      <div className="module-description">
        {description}
      </div>
    </div>
  );
};

export default ModuleCard;
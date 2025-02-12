import { Module } from '../module_data';
import '../styles/ModuleCard.css'

type ModuleCardProps = Pick<Module, 'moduleCode' | 'moduleName' | 'school' |'creditUnits' | 'description' |'prerequisites'>;

  function ModuleCard({ moduleCode, moduleName,school, 
    creditUnits, description, prerequisites }: ModuleCardProps) {
  return (
    <div className="module-card">
      <div className="module-header">
        <div className="module-code">{moduleCode}</div>
        <h4 className="module-name">{moduleName}</h4>
        <p className="module-info">
          {school} • {creditUnits} Units
        </p>
      </div>
      
      <p className="module-description">
        {description}
      </p>
      
      {prerequisites.length > 0 && (
        <div className="prerequisites-section">
          <h5 className="prerequisites-title">Prerequisites</h5>
          <div className="prerequisites-container">
            {prerequisites.map((prerequisite, index) => (
              <span 
                key={index} 
                className="prerequisite-tag">
                {prerequisite}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
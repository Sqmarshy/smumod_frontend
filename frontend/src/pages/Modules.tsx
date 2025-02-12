import { useState } from 'react';
import SearchBar from '../components/Searchbar';
import ModuleCard from '../components/ModuleCard';
import { mockModules } from '../module_mock_data';
import type { Module } from '../module_data';
import '../styles/Modules.css';

const Modules = () => {
  const [filteredModules, setFilteredModules] = useState<Module[]>(mockModules);

  const handleFilter = (modules: Module[], query: string) => {
    const filtered = modules.filter(module => 
      module.moduleCode.toLowerCase().includes(query.toLowerCase()) ||
      module.moduleName.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update the filtered modules in the Modules component
    setFilteredModules(filtered);
    
    // Return the filtered results for the SearchBar dropdown
    return filtered;  // Add this return statement
  };

  return (
    <div className="modules-page">
      <SearchBar 
        customFilter={handleFilter}
      />
      <div className="modules-grid">
        {filteredModules.map((module) => (
          <ModuleCard
            key={module.moduleCode}
            {...module}
          />
        ))}
      </div>
    </div>
  );
};

export default Modules;
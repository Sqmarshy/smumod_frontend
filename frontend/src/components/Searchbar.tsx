import { useState, ChangeEvent } from 'react';
import { Module } from '../module_data';
import { mockModules } from '../module_mock_data';
import '../styles/Searchbar.css';

interface SearchBarProps {
  onCourseSelect?: (course: Module) => void;
  customFilter?: (modules: Module[], query: string) => void;
}

function SearchBar({ onCourseSelect }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<Module[]>([]);

  const handleClear = (): void => {
    setSearchTerm('');
    setResults([]);
  };
  
  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    
    if (!query) {
      setResults([]);
      return;
    }

    const filtered = mockModules.filter(module => 
      module.moduleCode.toLowerCase().includes(query) ||
      module.moduleName.toLowerCase().includes(query)
    );
    
    setResults(filtered);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Course code, names and descriptions"
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={handleClear}
            className="clear-button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      
      {results.length > 0 && (
        <div className="search-results">
          {results.map((module) => (
            <div 
              key={module.moduleCode} 
              className="result-item"
              onClick={() => {
                onCourseSelect?.(module);
                handleClear();
              }}
            >
              <span className="module-code">{module.moduleCode}</span>
              <span className="module-name">{module.moduleName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
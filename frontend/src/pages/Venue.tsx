import { useEffect } from 'react';

const Venue: React.FC = () => {
  useEffect(() => {
    window.location.href = 'http://127.0.0.1:8000/docs';
  }, []);
  
  return null;
};

export default Venue;
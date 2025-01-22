import Sidebar from './components/Sidebar';
import TimetableHeader from './components/TimetableHeader';
import TimetableGrid from './components/TimetableGrid';
import Header from './components/Header';
import './index.css'

function App(){
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <TimetableHeader />
          <TimetableGrid />
        </main>
      </div>
    </div>
  );
};
export default App

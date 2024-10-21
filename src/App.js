import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavBar from './components/VerticalNavigation/VerticalNavBar';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="App">
      <div className={`side-bar bg-dark ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <VerticalNavBar toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      </div>
      <div className="main-container">
        <HeaderBar toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="content-container">
          Content goes here
        </div>
      </div>
    </div>
  );
}

export default App;

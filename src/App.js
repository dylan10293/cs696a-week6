import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavBar from './components/VerticalNavigation/VerticalNavBar';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

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
          <Dashboard />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavBar from './components/VerticalNavigation/VerticalNavBar';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <VerticalNavBar />
      </div>
      <div className="main-container">
        <HeaderBar />
        <div className="content-container">
          Content goes here
        </div>
      </div>
    </div>
  );
}

export default App;

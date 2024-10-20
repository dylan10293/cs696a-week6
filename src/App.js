import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerticalNavBar from './components/VerticalNavigation/VerticalNavBar';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <VerticalNavBar />
      </div>
      <div className="main-container">
        <div className="top-bar">
          top-bar goes here
        </div>
        <div className="content-container">
          Content goes here
        </div>
      </div>
    </div>
  );
}

export default App;

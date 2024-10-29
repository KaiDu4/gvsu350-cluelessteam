import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabBar from './components/navBar/NabBar.js'
import HomePage from './components/home/Home.js';

function App() {
  return (
    <div className="App">
      <NabBar/>
      <HomePage/>
    </div>
  );
}

export default App;

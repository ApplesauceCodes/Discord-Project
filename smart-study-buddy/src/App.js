import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizPage from './QuizPage';

function App() {
  return (
  <Router>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
  
          <Route path="/QuizPage" element={<QuizPage />} /> {/* Route for QuizPage */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

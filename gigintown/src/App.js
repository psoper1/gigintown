import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
        <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
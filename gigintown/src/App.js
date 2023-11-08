import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
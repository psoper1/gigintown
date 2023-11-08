import './App.css';
import Logo from './Components/Logo';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
    <div className='logo-container'>
      <Logo />
    </div>
    <Nav />
    </>
  );
}

export default App;
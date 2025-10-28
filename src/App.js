import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produto from './pages/Produto';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto" element={<Produto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Menubar>
    </div>
  );
}

export default App;

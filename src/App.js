import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';
import Menubar from './components/Shared/Menubar/Menubar';
import Login from './components/Pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

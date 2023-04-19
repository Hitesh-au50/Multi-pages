import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import General from './Component/General';

import Images from './Component/Images';
import About from './Component/About';
import Category from './Component/Category';
import Pricing from './Component/Pricing';
import Reservation from './Component/Reservation';
import Submit from './Component/Submit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/general" />} />
          <Route path="/general" element={<General />} />
          <Route path="/galleryImage" element={<Images />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

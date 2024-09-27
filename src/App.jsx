import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './assets/components/Header/Header';
import Navbar from './assets/components/Navbar/Navbar';
import Footer from './assets/components/Footer/Footer';
import Home from './assets/pages/Home/Home';
import DaySales from './assets/pages/Day_sales/Day_sales'

export default function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <header><Header /></header>
        <nav><Navbar /></nav>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/day-sales" element={<DaySales />} />
          </Routes>
        </main>
        <footer><Footer /></footer>
      </div>
    </BrowserRouter>
  )
}
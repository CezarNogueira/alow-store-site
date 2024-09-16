import './App.css';
import Header from './assets/Header/Header';
import Navbar from './assets/Navbar/Navbar';
import Footer from './assets/Footer/Footer';
import Home from './assets/Home/Home';

export default function App() {

  return (
    <div className='container'>
      <header><Header /></header>
      <nav><Navbar /></nav>
      <main><Home /></main>
      <footer><Footer /></footer>
    </div>
  )
}
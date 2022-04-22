import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

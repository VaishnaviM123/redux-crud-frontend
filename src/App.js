import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './pages/Landing';
import PNF from './pages/PNF';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import Notification from './notification/Notification'
import Add from './pages/Add';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration: 3000});
  },[])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path='/single-item' element={<Add />}></Route>
        <Route path="/contactUs" element={<ContactUs/>}></Route>
        <Route path='/*' element={<PNF />}></Route>
      </Routes>
      <Footer />
      <Notification/>
    </div>
  );
}

export default App;

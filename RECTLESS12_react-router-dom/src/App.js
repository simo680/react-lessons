import Header from "./components/Header";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage'
import NotFoundPage from "./pages/NotFoundPage";
import ProfuctInfoPage from "./pages/ProfuctInfoPage";


function App() {
  return (
    <div>
      

       <Router>
       <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<Aboutpage/>}/>
          <Route path="/contacts" element={<Contactpage/>}/>
          <Route path="/product/:id" element={<ProfuctInfoPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
       </Router>

      
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './pages/home';
import Resume from './pages/resume';
import ProjectsSection from './pages/projects';
import Contactpage from './pages/contact';
import AdminPage from './pages/Admin';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App ">
      
      <BrowserRouter>
      <ScrollToTop />
        <Navbar /> {/* Navbar is placed outside Routes to show on all pages */}
        
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/projects" element={<ProjectsSection/>}/>
            <Route path="/contact" element={<Contactpage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
          </Routes>
        </div>
        <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;



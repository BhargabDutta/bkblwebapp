import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Homescreen from './component/Homescreen';
import Contactpage from '../src/component/Contactpage';
import Portfoliopage from './component/Portfoliopage';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Servicepage from './component/Servicepage';
// import Faq from './component/Faq';
import About from './component/About';
import Privacy from './component/Privacy';
import Terms from './component/Terms';
import Blog from './component/Blog';
// import Vertical from "./component/Vertical";
// import Successpt2 from './component/Successpt2';
import Test from "./component/Test";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function App() {

  return (
    <>
    <Router>
    
    <Nav/>
      <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/VR" element={<Servicepage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfoliopage/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Terms" element={<Terms/>} />

      </Routes>
    </Router>
   {/* <Vertical/>  */}
   {/* <Test/> */}
    <Footer/>
    </>
  )
}

export default App;
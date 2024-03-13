import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// import Servicepage_pt2 from '../src/component/Servicepage_pt2';
import Homescreen from './component/Homescreen';
import Contactpage from '../src/component/Contactpage';
import Portfoliopage from './component/Portfoliopage';
// import Footer from './component/Footer';
import NavBar from './component/Navfolder/NavBar';
import Servicepage from './component/Servicepage';
// import Pagee from "./component/Pagee";
import { Route, BrowserRouter , Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        
      <Route index element={<Homescreen />} />
          <Route path="service" element={<Servicepage />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="portfolio" element={<Portfoliopage/>} />
      </Routes>
    </BrowserRouter>
    



      
     
     
    {/* <Servicepage/> */}
  
    {/* <Portfoliopage/> */}
    {/* <Contactpage/> */} 
    
    {/* <Footer/> */}
    </>
  )
}

export default App;
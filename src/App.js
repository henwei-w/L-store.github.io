import './reset.css';
import './rwdControl.css';
import { createContext } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import KidsPage from './components/KidsPage';
import Detail from './components/Detail';
import Footer from './components/Footer';



const data = require("./data.json")
export const content = createContext(data)

function App() {



  return (
    <HashRouter>

        <Navbar />
        
        <div style={{ minHeight: 'calc(100vh - 96px - 8rem)' }}>

        <Routes>

          <Route path="/" element={ <Home /> } />

          <Route path="/women" element={ <WomenPage /> }>
            <Route path=":type" element={ <WomenPage /> }>
              <Route path=":id" element={ <WomenPage /> } />
            </Route>
          </Route>

          <Route path="/men" element={ <MenPage /> }>
            <Route path=":type" element={ <MenPage /> }>
              <Route path=":id" element={ <MenPage /> } />
            </Route>
          </Route>

          <Route path="/kids" element={ <KidsPage /> }>
            <Route path=":type" element={ <KidsPage /> }>
              <Route path=":id" element={ <KidsPage /> } />
            </Route>
          </Route>

          <Route path="/Product_detail" element={ <Detail /> }>
            <Route path=":type" element={ <Detail /> }>
              <Route path=":id" element={ <Detail /> } />
            </Route>
          </Route>

        </Routes>

        </div>

        <Footer />

    </HashRouter>
  );
}

export default App;
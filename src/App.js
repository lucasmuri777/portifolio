import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/layout/Header'

import Container from './components/layout/Container';
import Home from './components/pages/Home'
import Sobre from './components/pages/Sobre'
import Projetos from './components/pages/Projetos'
import Contato from './components/pages/Contato'
import NightModel from './components/layout/NightModel';

function App() {
  return (
    <div className="App">
      <Router>
      <Container>
        <Header/>
          <Routes>
                <Route path="/portifolio/" element={<Home />}/>
                <Route path="/portifolio/sobre" element={<Sobre />}/>
                <Route path="/portifolio/projetos" element={<Projetos />}/>
                <Route path="/portifolio/contato" element={<Contato />}/> 
          </Routes>
          <NightModel/>
        </Container>
        
      </Router>
      
    </div>
  );
}

export default App;

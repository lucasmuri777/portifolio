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
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
                <Route path="/projetos" element={<Projetos />}/>
                <Route path="/contato" element={<Contato />}/> 
          </Routes>
          <NightModel/>
        </Container>
        
      </Router>
      
    </div>
  );
}

export default App;

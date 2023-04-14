import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ACanoeDigital from './pages/ACanoeDigital';
import Programacao from './pages/Programacao';
import Contato from './pages/Contato';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='sobre' element={ <ACanoeDigital /> } />
      <Route path='programacao' element={ <Programacao /> } />
      <Route path='contato' element={ <Contato /> } />
      <Route path='*' element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;

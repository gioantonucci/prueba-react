import Home from './Components/Home';
import RutaUno from './Components/RutaUno';
import RutaDos from './Components/RutaDos'
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route exact path='/rutauno' element={<RutaUno/>}/>
    <Route exact path='/rutados' element={<RutaDos/>}/>
    </Routes>
    </div>
  );
}

export default App;

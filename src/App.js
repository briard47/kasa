import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Locations from './components/Locations/Locations.js';
import About from './components/About/About.js';
import Error from './components/Error/Error.js'


function App() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/logements' element={<Locations />} />
  <Route path='/a-propos' element={<About />} />
  <Route path='/*' element={<Error />} />
</Routes>
  );
}

export default App;

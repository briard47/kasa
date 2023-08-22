import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Locations from './components/Locations/Locations.js';
import About from './components/About/About.js';
import Error from './components/Error/Error.js';

function App() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/logements/:id' element={<Locations />} />
  <Route path='/a-propos' element={<About />} />
  <Route path="/erreur404" element={<Error />}></Route>
  <Route path='/*' element={<Error />} />
</Routes>
  );
}

export default App;

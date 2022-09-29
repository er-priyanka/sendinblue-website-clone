
import './App.css';
import { Footer } from './Components/Footer';
import { NavbarAfter } from './Components/NavbarAfter';
import { NavbarBefore } from './Components/NavbarBefore';
import { AllRoutes } from './Pages.jsx/AllRoutes';
import { Home } from './Pages.jsx/Home';

function App() {
  return (
    <div className="App">
      {/* <NavbarBefore /> */}
      {/* <NavbarAfter /> */}
      <AllRoutes />
      
    </div>
  );
}

export default App;

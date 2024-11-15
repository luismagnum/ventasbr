import Productos from './pages/Productos';
import Navbar from "./components/Navbar";
import MetodosPago from './components/MetodosPago';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Home from './components/Home';

function App() {
  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <Home />
    <div id='productos'>
    <Productos />
    </div>
    <MetodosPago />
    <Footer />
    <Boton />
    </div>
  )
}

export default App

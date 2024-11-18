import Productos from './pages/Productos';
import Navbar from "./components/Navbar";
import MetodosPago from './components/MetodosPago';
import Footer from './components/Footer';
import Boton from './components/Boton';
import Hero from './components/Hero';

function App() {
  return (
    <div className="overflow-x-hidden">
    <Navbar />
    <Hero />
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

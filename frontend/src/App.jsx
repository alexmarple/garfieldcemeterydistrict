import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Documents from './components/Documents';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Info from './components/Info';
import Rules from './components/Rules';
import Alert from './components/Alert';
import Directions from './components/Directions';
import Activities from './components/Activities';

function App() {
  return (
    <>
      <Alert />
      <Header />
      <div className='main'>
        <Hero />
        <Info />
        <Activities />
        <Directions />
        <Gallery />
        <Rules />
        <Documents />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Documents from "./components/Documents";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Rules from "./components/Rules";
import Alert from "./components/Alert";
import Directions from "./components/Directions";

function App() {
  const [alertActive, setAlertActive] = useState(false);
  return (
    <>
      <Header />
      <div className="main">
        <Alert alertActive={alertActive} />

        <Hero />
        <Info />
        <Gallery />
        <Directions />
        <Rules />
        <Documents />

        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

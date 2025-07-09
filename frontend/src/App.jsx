import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Documents from "./components/Documents";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Rules from "./components/Rules";
// uncomment alerts when an alert is needed
// import Alert from './components/Alert';
import Directions from "./components/Directions";
import Activities from "./components/Activities";

function App() {
  return (
    <>
      {/* <Alert /> */}
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Hero />
        <Info />
        <Activities />
        <Directions />
        <Rules />
        <Documents />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

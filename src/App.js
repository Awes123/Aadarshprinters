import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import "./Assets/Bootsrap/bootstrap.min.css";
import Footer from "./Components/footer";
import Slider from "./Components/Slider";
import Gallery from "./Components/Gallery";
import Services from "./Components/Services";
import Bluebox from "./Components/Bluebox";
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import Whychoosus from "./Components/Whychoosus";
import Commercial from "./Components/Commercial";
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Aboutus />
      <Services />
      <Whychoosus />
      <Commercial />
      <Gallery />
      <Bluebox />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;

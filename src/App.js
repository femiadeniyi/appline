import React from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Feature from "./Components/Feature";
import Track from "./Components/Track";
import Report from "./Components/Report";
import Process from "./Components/Process";
import Pricing from "./Components/Pricing";
import Screen from "./Components/Screen";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Blog from "./Components/Blog";
import Company from "./Components/Company";
import Support from "./Components/Support";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Feature/>
        <Track/>
        <Report/>
        <Process/>
        <Pricing/>
        <Screen/>
        <Testimonials/>
        <Faq/>
        <Blog/>
        <Company/>
        <Support/>
        <Footer/>
    </div>
  );
}

export default App;

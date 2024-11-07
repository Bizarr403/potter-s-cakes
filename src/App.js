import React from "react";
import Nav from "./components/nav";
import Product from "./components/section";
import Footer from "./components/footer";
import Hero from "./components/hero";
import About from "./components/about";
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Product />
      <About />
      <Footer />
    </div>
  );
}

export default App;

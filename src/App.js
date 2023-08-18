import React from "react";
import Navbar from "./componens/Navbar";
import Hero from "./componens/Hero";
import Analytics from "./componens/Analytics";
import NewsLatter from "./componens/NewsLettter";
import Cards from "./componens/Cards";
import Footer from "./componens/Footer";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLatter/>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

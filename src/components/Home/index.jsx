import React from "react";

//import Navbar from "../Navbar";
import About from "./About";
import Hero from "./Hero";
import Products from "./Products";

const Home = () => {
    return ( 
        <>
          <header>
            <Hero />
          </header>
          <main>
            <About />
            <Products />
          </main>
          
        </>
     );
}
 
export default Home;
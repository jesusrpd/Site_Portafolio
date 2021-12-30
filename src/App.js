import React from "react"
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Portafolio from "./components/Portafolio";
import Redes from "./components/Redes";
import Skills from "./components/Skills";
import SobreMi from "./components/SobreMi";
import Trayectoria from "./components/Trayectoria";

const App = ()=>(
    <main className="bg-gradient-to-r from-black to-greyP blackP">
        <Nav/>
        <Info/>
        <SobreMi/>
        <Portafolio/>
        <Trayectoria/>
        <Skills/>
        <Contacto/>
        <Redes/>
        <Footer/>
    </main>

);

export default App
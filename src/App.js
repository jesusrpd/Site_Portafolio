import React from "react"
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
        <Redes/>
    </main>

);

export default App
import React from "react"
import Info from "./components/Info";
import Nav from "./components/Nav";
import Redes from "./components/Redes";
import SobreMi from "./components/SobreMi";

const App = ()=>(
    <main className="bg-gradient-to-r from-black to-greyP blackP">
        <Nav/>
        <Info/>
        <Redes/>
        <SobreMi/>
    </main>

);

export default App
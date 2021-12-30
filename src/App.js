import React from "react"
import Info from "./components/Info";
import Nav from "./components/Nav";
import Redes from "./components/Redes";

const App = ()=>(
    <main className="bg-gradient-to-r from-black to-greyP blackP">
        <Nav/>
        <Info/>
        <Redes/>
    </main>

);

export default App
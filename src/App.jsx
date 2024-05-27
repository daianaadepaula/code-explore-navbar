import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Feminino from "./pages/Feminino";
import Masculino from "./pages/Masculino";
import Infantil from "./pages/Infantil";
import Beleza from "./pages/Beleza";

import Roupas from "./pages/Roupas";
import Calcados from "./pages/Calcados";
import Acessorios from "./pages/Acessorios";
import Brinquedos from "./pages/Brinquedos";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feminino" element={<Feminino />} />
        <Route path="/masculino" element={<Masculino />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/beleza" element={<Beleza />} />
        <Route path="/roupas" element={<Roupas />} />
        <Route path="/calcados" element={<Calcados />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/brinquedos" element={<Brinquedos />} />
      </Routes>
    </Router>
  );
}

export default App;


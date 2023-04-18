import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ACanoeDigital from "./pages/ACanoeDigital";
import Programacao from "./pages/Programacao";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Audio from "./components/Audio";
import WhatsAppFly from "./components/WhatsAppFly";

function App() {
  return (
    <>
      <Audio />

      <WhatsAppFly />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<ACanoeDigital />} />
        <Route path="programacao" element={<Programacao />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

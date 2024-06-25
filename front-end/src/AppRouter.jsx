import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdquisicionesFormulario from "./components/AdquisicionesFormulario";
import Layout from "./Layout";
import Content from "./components/Content";
import AdquisicionList from "./components/AdquisicionList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Content /></Layout>} />
        <Route path="/listar-adquisicion" element={<Layout><AdquisicionList/></Layout>} />
        <Route path="/crear-adquisicion" element={<Layout><AdquisicionesFormulario /></Layout>} />
        <Route path="/actualizar-adquisicion/:id" element={<Layout><AdquisicionesFormulario /></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

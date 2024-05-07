import Container from "./components/container";
import Properties from "./components/properties/Properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tenants from "./components/tenants/Tenants";

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route index element={<div>Home</div>} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/tenants" element={<Tenants />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

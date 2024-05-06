import Container from "./components/container";
import Navbar from "./components/navbar/Navbar";
import Properties from "./components/properties/Properties";
import Sidebar from "./components/sidebar/Sidebar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
      </Container>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>Home</div>} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
    </div>
  );
}

export default App;

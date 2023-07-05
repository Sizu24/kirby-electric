import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

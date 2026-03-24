
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingNav from "./LandingNav";
import CodeL from "./CodeL";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingNav />} />
      <Route path="/ellys-code" element={<CodeL />} />
      {/* <Route path="/elcode-updates" element={<ElcodeUpdates />} /> */}
    </Routes>
  </BrowserRouter>
);

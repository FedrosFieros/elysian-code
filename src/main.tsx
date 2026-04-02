
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingNav from "./LandingNav";
import ELSPARKTV from "./ELSPARKTV";
import ELWORLD from "./ELWORLD";
import "./App.css";
import TheCave from "./CodeLPhase1";
import CodeLPhase2 from "./CodeLPhase2";
import ELSPARK from "./ELSPARK";
import EllysCode from "./EllysCode";
import Metametamorphosis from "./metametamorphosis";
import Characters from "./Characters";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingNav />} />
      <Route path="/codeLphase1" element={<TheCave />} />
      <Route path="/codeLphase2" element={<CodeLPhase2 />} />
      <Route path="/elspark-tv" element={<ELSPARKTV />} />
      <Route path="/elworld" element={<ELWORLD />} />
      <Route path="/elspark" element={<ELSPARK />} />
      <Route path="/ellyscode" element={<EllysCode />} />
      <Route path="/characters" element={<Characters />} />
      { <Route path="/metametamorphosis" element={<Metametamorphosis />} /> }
    </Routes>
  </BrowserRouter>
);

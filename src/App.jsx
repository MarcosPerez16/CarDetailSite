import "./App.css";
import {
  About,
  Services,
  Gallery,
  FAQReviews,
  Contact,
  Navigations,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigations />

      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/faq&reviews" element={<FAQReviews />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;

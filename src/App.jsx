import react from "react";
import Router from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  return <Router />;
}

AOS.init();
export default App;

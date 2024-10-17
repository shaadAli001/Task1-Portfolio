import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Award from "./Pages/Award/Award";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import TechStack from "./Pages/Techstack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeProvider";
import Tada from "react-reveal/Tada";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
      <ToastContainer />
        <Layout />
        <div className="container">
          <About />
        </div>
        <Education />
        <TechStack />
        <Projects />
        <Award />
        <Contact />
        <div
          className="footer ms-3 p-3"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Tada>
            <h4 className="text-center">All Rights Reserved &copy;</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;

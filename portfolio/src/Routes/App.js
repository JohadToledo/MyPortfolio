
import "../assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../container/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      
      <script>var Alert = ReactBootstrap.Alert;</script>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

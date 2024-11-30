
import "./i18n";
import './App.css'
import Layout from './Layout';
import AppRoutes from "./Routes/Routes"
import { BrowserRouter as Router } from "react-router-dom";


function App() {

  return (
    <Router>
    <Layout>
      <AppRoutes />
    </Layout>
  </Router>
  );
}

export default App

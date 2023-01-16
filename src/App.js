import logo from './logo.svg';
import './App.css';
import Home from "./Views/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
     <Home/>
        <Footer />
    </div>
  );
}

export default App;

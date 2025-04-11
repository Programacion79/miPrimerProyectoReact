import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;


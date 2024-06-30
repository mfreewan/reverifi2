import Nav from "./components/NavBar"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
      // <div className="App">
      //   <Header />
      //   <Profile />
      //   <Achievements />
      //   <Listings/>
      //   <Footer />
      // </div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
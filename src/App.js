import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./containers/PageContainer";
import Cart from "./components/cart/Cart";
import { useSelector } from "react-redux";


function App() {
  const { drawer } = useSelector(state => state.drawer);
  return (
    <div className="App">
      <PageContainer>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Details />} />
          </Routes>
          {
            drawer && <Cart />
          }
          <Footer/>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;

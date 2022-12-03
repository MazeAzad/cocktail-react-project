import { useGlobal } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from './pages/home';
import About from "./pages/about";
import SingleCocktail from "./pages/singleCocktail";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path=":cocktailId" element={<SingleCocktail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

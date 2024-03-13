import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./page/home";
import Layout from "./Layout/main";
import Search from "./page/Recherche/search";
import path from "./path";
import Category from "./page/Category/category";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={path.home} element={<Home />} />
          <Route index path={path.search} element={<Search />} />
          <Route index path={path.category} element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

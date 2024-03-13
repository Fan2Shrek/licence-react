import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import path from "./path";
import Home from "./page/home";
import Layout from "./Layout/main";
import Search from "./page/Recherche/search";
import Category from "./page/Category/category";
import Film from "./page/Film/film";
import Like from "./page/Likes/like";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path={path.home} element={<Home />} />
          <Route path={path.search} element={<Search />} />
          <Route path={path.category} element={<Category />} />
          <Route path={path.film} element={<Film />} />
          <Route path={path.likes} element={<Like />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./page/home";
import Layout from "./Layout/main";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;

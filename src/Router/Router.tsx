import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Productos from "../Page/Productos";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

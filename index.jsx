import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Info from "./pages/Info.jsx"
import Artisans from "./pages/Artisans/Artisans.jsx"
import ArtisanDetail from "./pages/Artisans/ArtisanDetail.jsx"
import NotFound from "./pages/NotFound.jsx"
import Layout from "./components/Layout.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Info" element={<Info />} />
          <Route path="artisans" element={<Artisans />} />
          <Route path="artisans/:id" element={<ArtisanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
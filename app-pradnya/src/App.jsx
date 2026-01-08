import React from "react";
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Skills from "./components/skill/Skills";
import Carousal from "./components/carousel/Carousal";
import Themes from "./components/themes/Themes";
import UseMemo from "./components/assignments/UseMemo";
import Search from "./components/assignments/Search";
import Paginate from "./components/pagination/Paginate";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/navbar/Navbar";
import CompanyInfo from "./pages/nested/about/CompanyInfo";
import Career from "./pages/nested/about/Career";
import Services from "./pages/nested/about/Services";

const App = () => {
  const data = [
    { name : 'figma', score: '99%', image : ''},
    { name : 'wordpress', score: '99%', image : ''},
    { name : 'web development', score: '99%', image : ''},
    { name : 'web design', score: '99%', image : ''},
    { name : 'sketch', score: '99%', image : ''},
    { name : 'xd', score: '99%', image : ''},
    { name : 'video editing', score: '99%', image : ''},
    { name : 'mobile app', score: '99%', image : ''},
  ]
  return(
    <>
      <BrowserRouter>
      <Navbar />
      <hr/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/about/" element={<AboutUs />} >
              <Route path="company" element={<CompanyInfo/>} />
              <Route path="career" element={<Career/>} />
              <Route path="services" element={<Services/>} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Outlet />
      </BrowserRouter>

      {/* <Carousal />
      <Skills skill = {data} /> */}
      {/* <Themes /> */}
      {/* <UseMemo /> */}
      {/* <Search /> */}
      {/* <Paginate /> */}
    </>
  )
}
export default App;
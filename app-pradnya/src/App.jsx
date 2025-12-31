import React from "react";
import Skills from "./components/skill/Skills";
import Carousal from "./components/carousel/Carousal";
import Themes from "./components/themes/Themes";
import UseMemo from "./components/assignments/UseMemo";
import Search from "./components/assignments/Search";
import Paginate from "./components/pagination/Paginate";

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
      {/* <Carousal />
      <Skills skill = {data} /> */}
      {/* <Themes /> */}
      {/* <UseMemo /> */}
      {/* <Search /> */}
      <Paginate />
    </>
  )
}
export default App;
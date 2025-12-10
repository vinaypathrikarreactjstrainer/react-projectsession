import React from "react";
import Skills from "./components/skill/Skills";

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
      <Skills skill = {data} />
    </>
  )
}
export default App;
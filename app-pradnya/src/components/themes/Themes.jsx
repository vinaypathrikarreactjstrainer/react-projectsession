import React, { useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Dosa from '../../assets/img/dosa.jpeg';
import './theme.css';

const Themes = () => {
    const [dark, setDark] = useState(true);
    // function - handleThemes
    const handleThemes = () => {
        // toggle
        setDark(!dark);
        alert(dark);
    }
  return (
    <>
      {/* <div className="w-full flex flex-col justify-center items-center"> */}
        <div id= {dark ? 'dark' : 'light'}>
          <header className="w-full p-4 flex font-semibold text-2xl text-orange-300 text-center justify-between items-center">
            <h1>Fusion Software Institute</h1>
            <button onClick={ () => handleThemes()} type="button">
                { dark ? <FaMoon /> : <FaRegSun />}
            </button>
          </header>
          <section
            id="aboutUs"
            className="flex w-full justify-between items-center"
          >
            <div className="w-2/4 image">
                <img src={Dosa} alt="dosa" />
            </div>
            <div className="w-2/4 summry text-2xl">
                Welcome to Fusion Software Training Institute, where innovation meets excellence. Our mission is to empower individuals and professionals with cutting-edge skills in software development and technology. With a curriculum designed by industry experts, we offer hands-on training that prepares you for real-world challenges. Our dedicated instructors provide personalized mentorship, ensuring you gain both technical and soft skills crucial for career success. 
            </div>
          </section>
        </div>
      {/* </div> */}
    </>
  );
};
export default Themes;

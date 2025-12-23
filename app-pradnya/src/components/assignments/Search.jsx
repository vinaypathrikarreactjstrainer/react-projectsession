import React, { useState, useRef, useEffect } from "react";

const Search = () => {
    // list
    const list = ["Amol", "Pradnya", "Rohini", "Vinay", "Priya", "Eshika", "Manish"];

    let inputEle = useRef()
    // state
    const [search, setSearch] = useState('');
    // functions
    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
    }
    const filteredUser = list.filter(
        person => person.toLowerCase().includes(search.toLowerCase())
    );
    console.log('filtered User =>', filteredUser);
    useEffect(() => {
        inputEle.current.value = 'Pradnya'
    }, [search])
  return (
    <>
      <div className="w-full flex justify-center items-center p-8">
        <input type="text" placeholder="Search" className="w-sm border font-bold text-['20px']"
        value = {search}
        ref = {inputEle}
        onChange={ (e) => handleInput(e)}
        />
      </div>
    {/* List of User */}
    {
        filteredUser.map((user, index) => 
            (
                <li key={index}>{user}</li>
            )
        )
    }
    </>
  );
};

export default Search;

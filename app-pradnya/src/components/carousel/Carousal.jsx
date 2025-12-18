import React, {useEffect, useState} from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import './carousel.css';
const images = [
  "https://picsum.photos/id/1018/900/400",
  "https://picsum.photos/id/1025/900/400",
  "https://picsum.photos/id/1035/900/400"
];

const Carousal = () => {
    const [index, setIndex] = useState(0);
    // function
    const prevImg = () => {
        setIndex((prev) => (prev - 1 + images.length ) % images.length)
    } 
    const nextImg = () => {
        setIndex((prev) => (prev - 1 + images.length ) % images.length)
    } 
    return (
        <>
            <div className='carousel'>
                <div className='carousel-inner'>
                    {
                        images.map((img, i) => {
                            return <img key={i} src={img} alt={`slide-${i}`} />
                        })
                    }
                </div>
                <button className='prev' onClick={() => prevImg()}><GrPrevious/></button>
                <button className='next' ><GrNext/></button>
            </div>
        </>
    )
}
export default Carousal;
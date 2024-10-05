import React, { useRef, useState } from "react";
import "../../../assets/css/fashion.css"
import {  brands } from "../../../dynamic/data"
import { styled } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Image=styled('img')({
    width:'100%',
    margin:'8px 15px',
    height:'200px'
  })

const Fashion=()=>{
    const containerRef = useRef()
  const [slideCount, setSlideCount] = useState(0);
  const [moved, setMoved] = useState(false);
  const handleClick = (direction) => {
    setMoved(true);
    let distance = containerRef.current.getBoundingClientRect().x - 5;
    if (direction === "left" && slideCount > 0) {
      setSlideCount(slideCount - 1);
      containerRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideCount <= 7) {
      setSlideCount(slideCount + 1);
      containerRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
};
    return (
    <div className="outer-box">
      <h2>Best Fashion Brands for you</h2>
      <div className="fashion-wrapper">
        <div>
          <ArrowBackIosIcon 
            className="leftf arrow"
            onClick={() => handleClick("left")}
            style={{ display: !moved ? "none" : "initial" }}
          />
        </div>
        <div className="fashion-container" ref={containerRef}>
        {
                brands.map(data=>{
                    return(
                        <div className='fashion-details'>
                            <Image src={data.url} className='img' alt="" />
                            <p>{data.model}</p>
                            <h4>{data.price}</h4>
                        </div>
                    )
                })
            }
        </div>
        <div>
          < ArrowForwardIosIcon
            className="rightf arrow"
            onClick={() => handleClick("right")}
          />
        </div>
       </div>
    </div>
    )
}
export default Fashion
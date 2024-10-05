import React, { useRef, useState } from "react";
import "../../../assets/css/smartphones.css"
import { alaska, smartphones } from "../../../dynamic/data"
import { styled } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Image=styled('img')({
    width:'100%',
    margin:'8px 15px',
    height:'200px'
  })

const Smartphones=()=>{
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
    <div className="outer">
      <h2>Best Deals on Smartphones</h2>
      <div className="wrapper">
        <div>
          <ArrowBackIosIcon 
            className="left arrows"
            onClick={() => handleClick("left")}
            style={{ display: !moved ? "none" : "initial" }}
          />
        </div>
        <div className="phone-container" ref={containerRef}>
        {
                smartphones.map(data=>{
                    return(
                        <div className='phone-details'>
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
            className="right arrows"
            onClick={() => handleClick("right")}
          />
        </div>
       </div>
       <div className="side-banner">
        {
           alaska.map(data=>{
            return(
                <div className="img">
                    <Image src={data.url} />
                </div>
            )
           })
        }
      </div>
    </div>
    )
}
export default Smartphones
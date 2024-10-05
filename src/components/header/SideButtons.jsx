import { Box, Button, styled } from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useState } from "react";
import React from "react"
import { Login } from "../home/Login/Login";
const StyledBox=styled(Box)`
        display:flex;
        justify-content:center;
        margin-left:20px;
        padding:7px;
        height:50px;
        align-items:center;
`
const StyledButton = styled(Button)`
    color:black;
    justify-content: center;
    
    
`
const CustomButtons = () => {
    const [clicked,setClicked]= useState(false)
    const formOpen=()=>{
        setClicked(true)

    }
    const formClosed=()=>{
        setClicked(false)
    }
    return(
        <Box style={{display:"flex",width:"700px",justifyContent:"space-evenly"}}>
            <StyledBox>
            <AccountCircleOutlinedIcon style={{color:"black"}}/>
            <StyledButton onClick={formOpen} on>Login</StyledButton>
            <KeyboardArrowDownOutlinedIcon style={{color:"black"}}/>
            </StyledBox>

            <StyledBox>
            <ShoppingCartOutlinedIcon style={{color:"black"}}/>
            <StyledButton  >Cart</StyledButton>
            </StyledBox>

            <StyledBox>
            <CardGiftcardOutlinedIcon style={{color:"black"}}/>
            <StyledButton  >Become a Seller</StyledButton>
            </StyledBox>

            <StyledBox>
            <MoreVertOutlinedIcon style={{color:"black"}}/>
            </StyledBox>

            <Login clicked={clicked}/>
        </Box>
    )
}
export default CustomButtons
import React from "react"
//photos imported
import logo from '../../assets/images/logo.svg'

//mui components
import {AppBar, styled, Toolbar, Box} from '@mui/material'
//jsx components
import Search from './Search'
import CustomButtons from "./SideButtons"


const StyledAppBar= styled(AppBar)`
    height:64px;
    padding: 8px 5px;
    background: #fff;
    justify-content:center;
`
const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-left: 0px
`
const Header=()=>{
    return(
            <StyledAppBar>
                <Toolbar>
                    <StyledBox>
                        <img src={logo} alt="" style={{width: 150}} />
                    </StyledBox>
                    <Search/>
                    <CustomButtons/>
                </Toolbar>
                
            </StyledAppBar>
    )
}
export default Header
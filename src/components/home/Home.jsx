import React from 'react'
import Top from './Top/Top'
import { Box } from '@mui/material'
import Slider from './Slider/Slider'
import Smartphones from './Smartphones/Smartphones'
import Fashion from './Fashion/Fashion'
import Brands from './Brands/Brands'
import { Banners } from './Banners/Banners'
import { Footer } from '../footer/Footer'

const Home = ()=>{
    return(
        <Box style={{display:"flex",flexDirection:'column'}} >
            <Top/>
            <Slider/>
            <Smartphones/>
            <Fashion/>
            <Brands/>
            <Banners/>
            <Footer/>
        </Box>
    )
}
export default Home
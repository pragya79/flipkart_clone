import React from 'react'
import { Box, InputBase, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchField = styled(Box)`
    background: #E6E6FA;
    margin-left: 20px;
    width: 44%;
    height: 38px;
    justify-content: center;
    border-radius: 7px;
    display: flex
`
const InputField = styled(InputBase)`
        padding-left: 15px;
        width: 400px;
        color: #000;
        font-weight: 500;
        font-size: 16px;
        padding: 9px 7px;
`
const Search = () => {
    return(
        <SearchField>
            <Box style={{justifyContent: "center"}}>
            <SearchIcon style={{color: "#708090",padding:5}}/>
            </Box>
            <InputField placeholder='Search for Products, Brands and More'/>
           

        </SearchField >
    )
}
export default Search
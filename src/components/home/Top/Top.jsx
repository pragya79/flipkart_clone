import { Box, styled, Typography } from "@mui/material"
import { navData } from "../../../dynamic/data"
const Text = styled(Typography)`
    font-size:14px;
    font-weight:600;
    text-align:center;
    color:#3e3e3e;
    font-family:inherit;

`
const Top=()=>{
    return(
        <Box style={{display:"flex",width:"98%",justifyContent:"space-evenly",alignItems:"center",background:"#fff",margin:"7px 14px",textAlign:"center"}}>
            {
                navData.map(data=>{
                    return(
                        <Box style={{alignItems:"center",margin:"10px"}}>
                        <img src={data.url} alt="" width={85} height={80}/>
                        <Text>{data.text}</Text>
                    </Box>
                    )
                })
            }
        </Box>
    )
}
export default Top
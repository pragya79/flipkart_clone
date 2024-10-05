import React from 'react'
import {Dialog} from '@mui/material'
export const Login = ({clicked, setclicked}) => {
    const formClose=()=>{
        setclicked(false)
    }
  return (
    <div>
        <Dialog open={clicked} onClose={formClose}>
            <form action="">
                <h2>Login</h2>
            </form>
        </Dialog>
    </div>
  )
}

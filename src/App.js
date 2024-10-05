import { Box } from '@mui/material';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
function App() {
  return (
    <div >
      <Header/>
      <Box style={{marginTop:"64px",background:"#f2f2f2",height:'screen'}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;

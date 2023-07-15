import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Trending() {
  return (
    <Box>
    <Box sx={{width: "100vw", display:"flex"}}>
      <img
        style={{ width: "25%", height: "300px", margin:"6px"}}
        src="https://www.timberland.com/content/publish/caas/v1/media/343690/data/2adcfc3b4a7db3741c76d40474d90b74/070723-hp-update-womens-sandals-d.jpg"
      ></img>
      <img
        style={{ width: "25%", height: "300px",margin:"6px"}}
        src="https://www.timberland.com/content/publish/caas/v1/media/343698/data/02a1a0cabb03c6a7a2f7752d6fa3af48/070723-hp-update-mens-hiking-us-d.jpg"
      ></img>
      <img
        style={{ width: "25%", height: "300px",margin:"6px"}}
        src="https://www.timberland.com/content/publish/caas/v1/media/343696/data/cc879122dc2ce7263dc9e864fab40b92/070723-hp-update-logo-gear-d.jpg"
      ></img>
      <img
        style={{ width: "25%", height: "300px",margin:"6px"}}
        src="https://www.timberland.com/content/publish/caas/v1/media/343692/data/d92bd86fb0ea93c20a139cf391e16232/070723-hp-update-setra-us-d.jpg"
      ></img>
    </Box>
    <Box sx={{display:"flex"}}>
        <Box sx={{width: "25%"}}>
            <Button sx={{width: "80%",color: "black",padding:2,fontSize:14}}>Up to 30% off Women's Sandals </Button>
            <ChevronRightIcon></ChevronRightIcon>

        </Box>
        <Box sx={{width: "25%"}}>
            <Button sx={{color: "black",padding:2,marginLeft:6,fontSize:14}}>Men's hiking </Button>
            <ChevronRightIcon></ChevronRightIcon>

        </Box>
        <Box sx={{width: "25%"}}>
            <Button sx={{color: "black",padding:2, marginLeft:6,fontSize:14}}>Logo Gear </Button>
            <ChevronRightIcon></ChevronRightIcon>

        </Box>
        <Box sx={{width: "25%"}}>
            <Button sx={{width: "80%",color: "black",padding:2,fontSize:14}}>Men's PRO Work Shoes </Button>
            <ChevronRightIcon></ChevronRightIcon>

        </Box>

      </Box>
    </Box>
  );
}
export default Trending;

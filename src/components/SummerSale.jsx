import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
function SummerSale(){
    return(
        <Box sx={{position:'relative'}}>
            <img
            style={{ width: "100vw", height: "70vh", padding: 0,margin:0}}
            src="https://www.timberland.com/content/publish/caas/v1/media/342284/data/f7eded30a2aa3da9a90932527684ee3a/062923-end-of-season-sale-hp-hero-d.jpg?"
            
          />
          <Box sx={{width:"30vw",display: "flex",flexDirection:"column",margin:2, position:'absolute',bottom:"100px"}}>
            <Typography sx={{color:"white",marginLeft:1.5}}>SUMMER SALE</Typography>
            <Typography sx={{color:"white",marginLeft:1.5}}> SAVE ON WARM-WEATHER ESSENTIALS</Typography>
            <Box>
                <Button sx={{backgroundColor:"white", color: "black", borderRadius:0,margin:1.5,padding:1,fontSize:10}}>MEN</Button>
                <Button sx={{backgroundColor:"white", color: "black", borderRadius:0,margin:1.5,padding:1,fontSize:10}}>WOMEN</Button>
                <Button sx={{backgroundColor:"white", color: "black", borderRadius:0,margin:1.5,padding:1,fontSize:10}}>PRO</Button>
            </Box>
          </Box>
          
            
        </Box>

    );
}

export default SummerSale
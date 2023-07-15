import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
function TopBar(){
    return (
    
    <Box sx={{ width: '100vw', height: '6vh', backgroundColor: "black"}} >
        <Typography sx={{ color: "white", fontSize: '8px', textAlign: "center", textDecoration: 'underline', fontWeight: "bold", paddingTop:'8px' }}>20% OFF FOR NEW MEMBERS + BENEFITS: JOIN NOW</Typography>
    </Box>


    );

}
export default TopBar;

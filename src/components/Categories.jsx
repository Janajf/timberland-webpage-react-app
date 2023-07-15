import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css';
const categories = ["KIDS SUMMER SALE", "MEN'S HIKING", "WOMEN'S HIKING", "MEN'S PRO WORK SHOES", "WOMEN'S SANDALS", "MEN'S CLOTHING"]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Categories() {
  return (
  
    <Box sx={{width: "100vw",backgroundColor:"white"}}>
      <Box sx={{alignItems:"center", paddingBottom:3,margin:0}}><Typography sx={{textAlign:"center", fontSize:16}}>CATEGORIES</Typography></Box>
        <Box sx={{width:"90%",marginLeft:6, marginRight:3}}>
        <Carousel responsive={responsive}>
        {categories.map((categories) =>(
            
            <Button className="categories"
            key={categories}
            sx={{
              color: "black",
              fontSize: 10,
              border: 1,
              borderRadius: 0,
              padding: 2,
              margin: 0
            }}> {categories}</Button>
        ))}
      </Carousel>
        </Box>
      
    </Box>
  );
}
export default Categories;

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const products = [
    {
      id: 1,
      imageurl:
        "https://www.timberland.com/content/publish/caas/v1/media/342292/data/facde44fb92bd4c1a7d6d9cd5cef702c/10061713-hero.png",
      name: "MEN'S TIMBERLAND® PREMIUM 6-INCH WATERPROOF BOOTS",
      price: "$210.00",
      description: "Shop Now",
    },
    {
      id: 2,
      imageurl:
        "https://www.timberland.com/content/publish/caas/v1/media/333284/data/e847c112703c948968ab60a1e819e169/a5rmx001-hero.png",
      name: "MEN'S TIMBERLAND PRO® SETRA COMP-TOE ATHLETIC WORK SNEAKERS",
      price: "$115.00",
      description: "Shop Now",
    },
    {
        id: 3,
        imageurl:
          "https://www.timberland.com/content/publish/caas/v1/media/342246/data/8c32cb6c18272bb76a330d49ed0b52f2/a5ummdr2-hero.png",
        name: "WOMEN'S EVERLEIGH ANKLE STRAP SANDALS",
        price: "$79.99",
        description: "Shop Now",
      },
      {
        id: 4,
        imageurl:
          "https://www.timberland.com/content/publish/caas/v1/media/342242/data/2c3eea31f5482c280809db098761de53/a5vtn231-hero.png",
        name: "WOMEN’S GREENSTRIDE™ MOTION 6 LOW HIKERS",
        price: "$89.99",
        description: "Shop Now",
      },
      {
        id: 5,
        imageurl:
          "https://www.timberland.com/content/publish/caas/v1/media/342300/data/8b3fa24a9eef20744755a94f85afa453/a5thc015-hero.png",
        name: "MEN’S GREENSTRIDE™ MOTION 6 SUPER OXFORD SHOES",
        price: "$109.99",
        description: "Shop Now",
      },
      {
        id: 6,
        imageurl:
          "https://www.timberland.com/content/publish/caas/v1/media/342306/data/97adb2cce912948e7d915f96ac31c156/2731r001-hero.png",
        name: "MEN'S MT. MADDSEN WATERPROOF MID HIKER BOOTS",
        price: "$99.99",
        description: "Shop Now",
      },
      {
        id: 7,
        imageurl:
          "https://www.timberland.com/content/publish/caas/v1/media/342332/data/d61bf6ce6c8835abdf904911f001d31d/a5xd8231-hero.png",
        name: "WOMEN'S LINCOLN PEAK SANDALS",
        price: "$49.99",
        description: "Shop Now",
      },
    
]

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

function BestSellers(){
    return(
        <Box sx={{width:"90%",marginLeft:3, marginRight:3}}>
            <Carousel responsive={responsive}>
            {products.map((product) =>(
                <Box sx={{display: "flex", flexDirection: "column",margin:2 }} key={product.id}>
                     <img src={product.imageurl} alt={product.name} />
                    <Typography sx={{fontSize:10}}>{product.name}</Typography>
                    <Typography>{product.price}</Typography>
                    <Button size="small" sx={{backgroundColor: "black",borderRadius: 0,color: "white",padding:1,fontSize:10}}>{product.description}</Button>

                </Box>
                
            
            
        ))}

        </Carousel>
        </Box>
        

    )
}

export default BestSellers;
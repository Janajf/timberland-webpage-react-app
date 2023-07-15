import TopBar from "./components/TopBar.jsx";
import NavBar from "./components/NavBar.jsx";
import SummerSale from "./components/SummerSale.jsx";
import Categories from "./components/Categories.jsx";
import Trending from "./components/Trending.jsx";
import Outdoors from "./components/Outdoors.jsx";
import BestSellers from "./components/BestSellers.jsx";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";


function App() {
  return (
    <>
      <Box>
        <CssBaseline />
        <TopBar/>
        <NavBar/>
        <SummerSale/> 
        <Categories/>
        <h1>Trending</h1>
        <Trending/>
        <Outdoors/>
        <h1>Best Sellers</h1>
        <BestSellers/>

    
      </Box>
    </>
  );
}

export default App;

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const pages = [
  "EN",
  "Order Status",
  "Help",
  "Chat",
  "Find a Store",
  "Gift Timberland",
  "Favorites",
  "Sign In",
];
const links = ["MEN", "WOMEN", "KIDS", "OUTDOOR", "SALE"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ width: "100vw", height: "15vh", backgroundColor: "white", marginBottom:1}}>
      <Box
        sx={{display: "flex", justifyContent: "flex-end", alignItems:"center"}}
      >
        <Box>
          <img
            style={{ width: 18, height: 12, paddingRight: 0 }}
            src="https://www.timberland.com/_nuxt/US.8b7274a4.svg"
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <Typography
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontSize: 10,
                paddingRight: 1,
                paddingLeft: 1,
                paddingTop: 0,
              }}
            >
              {page}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{display:"flex",marginTop:3, marginLeft:3, marginRight:3}}>
        <Box>
          <img
            style={{ width: 150, height: 26 }}
            src="https://www.timberland.com/img/logo50.svg"
          ></img>
        </Box>
        <Box sx={{display: "flex", padding:1}}>
          {links.map((link) => (
            <Typography
              key={link}
              onClick={handleCloseNavMenu}
              sx={{
                color: "black",
                fontSize: 10,
                paddingRight: 1,
                paddingLeft: 1,
                paddingTop: 0,
              }}
            >
              {link}
            </Typography>
          ))}
        </Box>
        <TextField size="small" defaultValue="Search Timberland" label="Search Timberland" sx={{borderRadius:0,marginLeft:35}}></TextField>
        <Box sx={{backgroundColor:"#cf780e", }}> <SearchIcon sx={{color: "white", width:"30px",height: "30px"}}></SearchIcon></Box>
        <ShoppingBagOutlinedIcon sx={{width:"30px", height: "30px",margin:0.5}}></ShoppingBagOutlinedIcon>
      </Box>
    </Box>
  );
}
export default NavBar;

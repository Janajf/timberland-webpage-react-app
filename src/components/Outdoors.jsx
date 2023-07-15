import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";

function Outdoors() {
  return (
    <Box sx={{ width: "100vw", display: "flex" }}>
      <img
        style={{ width: "60%", height: "350px", marginTop: "10px" }}
        src="https://www.timberland.com/content/publish/caas/v1/media/342280/data/4618822583ca7da3f6a3c681af294bac/062923-end-of-season-sale-hp-secondary-m.jpg"
      ></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 4,
          paddingTop: 15,
          paddingRight: 6,
        }}
      >
        <Typography sx={{ fontSize: 10, textAlign: "center" }}>
          FOR EVERY ADVENTURE UNDER THE SUN
        </Typography>
        <Typography
          sx={{ fontSize: 28, fontFamily: "monospace", textAlign: "center" }}
        >
          EMBRACE THE OUTDOORS
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 0,
              margin: 1.5,
              padding: 1,
              fontSize: 10, 
            }}
          >
            Men's Outdoor
          </Button>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 0,
              margin: 1.5,
              padding: 1,
              fontSize: 10,
            }}
          >
            Women's Outdoor
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Outdoors;

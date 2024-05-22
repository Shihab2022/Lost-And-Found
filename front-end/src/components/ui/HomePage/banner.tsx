import assets from "@/assets";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
const Banner = () => {
  return (
    <>
      {/* <Box sx={{ position: "relative" }}> */}
      {/* <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}> */}
      <Image
        src={assets?.banner}
        //   width={1000}
        height={500}
        style={{
          width: "100%",
          height: "70%",
        }}
        alt="Banner Image"
      />
      {/* </Box> */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          marginX: "250px",
          color: "white",
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h4">
            POWERFUL LOST AND FOUND MADE EASY
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit
            nesciunt optio illum ad enim, exercitationem soluta quo itaque.
            Aspernatur nemo cumque molestiae provident vitae quia aliquam natus
            hic ad.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Button 1</Button>
            <Button variant="contained">Button 1</Button>
          </Stack>
        </Stack>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default Banner;

import assets from "@/assets";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
const Banner = () => {
  return (
    <>
      <Image
        src={assets?.banner}
        height={500}
        style={{
          width: "100%",
          height: "70%",
        }}
        alt="Banner Image"
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          marginX: "250px",
          color: "white",
        }}
      >
        <Stack justifyContent="center" alignItems="center" spacing={0.25}>
          <Typography variant="h3" sx={{ fontWeight: 550 }}>
            POWERFUL LOST AND FOUND MADE EASY
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 400 }}>
            Find what you lost, reunite what you found!
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            recusandae rerum iusto eos impedit eius perspiciatis tempore
            quibusdam
          </Typography>
          <Typography>
            corporis est doloremque amet quidem magnam porro hic pariatur nam
            eveniet dicta reprehenderit explicabo quisquam,
          </Typography>
          <Typography>
            distinctio unde ad esse quos repellendus animi consectetur.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginTop: "15px" }}>
            <Button variant="contained">Report a Lost Item</Button>
            <Button variant="contained">Report a Found Item</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Banner;

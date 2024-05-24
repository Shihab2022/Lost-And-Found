import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import assets from "@/assets";
import Card from "@mui/material/Card";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            {" "}
            Latest
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 600, color: "#5293c4" }}>
            {" "}
            News
          </Typography>
        </Stack>
        <Typography>
          Stay up to date with the latest news about our Lost and Found
          developments.
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ marginY: "30px" }}
        >
          <Card sx={{ width: 300, marginY: "20px" }}>
            <CardActionArea>
              <Image
                height={250}
                width={300}
                src={assets.cardImg1}
                alt="Card image 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lost and Found Real-Time Object Detection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are proud to present the first working prototype of our
                  “Real Time Object Detection? function
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, marginY: "20px" }}>
            <CardActionArea>
              <Image
                height={250}
                width={300}
                src={assets.cardImg2}
                alt="Card image 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lost and Found Fraudsters
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  In the last months, an increased amount of complaints have
                  come our way from our partners
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, marginY: "20px" }}>
            <CardActionArea>
              <Image
                height={250}
                width={300}
                src={assets.cardImg3}
                alt="Card image 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Why charge customers $25 ?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Does your current provider charge your customers for every
                  lost item so that, in the end, your customers is paying for?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default LatestNews;

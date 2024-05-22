import assets from "@/assets";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          background: "#f0f3fc",
          width: "100%",
          paddingY: "50px",
        }}
      >
        <Container sx={{ height: "100%" }}>
          <Grid container spacing={5}>
            <Grid item xs={5}>
              <Image
                height={1000}
                width={500}
                src={assets.about}
                alt="about image"
              />
            </Grid>
            <Grid item xs={7} alignItems="center">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                sx={{ marginTop: "50px" }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Lost And Found Is Our Core
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Business
                </Typography>
                <Typography>
                  {` The Lost and Found App was developed in cooperation with industry leaders from hospitality, aviation and public transportation. In all of our products, we keep both the companies' as well as the passengers' maximum satisfaction in mind.`}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400 }}>
                  We Provide
                </Typography>
                <Box>
                  <Stack direction="row" spacing={1}>
                    <CheckBoxRoundedIcon sx={{ color: "#5293c4" }} />
                    <Typography sx={{ fontWeight: 450 }}>
                      privacy by default (PCI and GDPR compliant)
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckBoxRoundedIcon sx={{ color: "#5293c4" }} />
                    <Typography sx={{ fontWeight: 450 }}>
                      revolutionary Lost and Found Services
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <CheckBoxRoundedIcon sx={{ color: "#5293c4" }} />
                    <Typography sx={{ fontWeight: 450 }}>
                      automated and streamlined Lost and Found processes
                    </Typography>
                  </Stack>
                </Box>
                <Button
                  variant="contained"
                  sx={{ width: "200px" }}
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Get Started
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;

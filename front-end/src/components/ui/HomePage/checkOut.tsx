import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import UpdateIcon from "@mui/icons-material/Update";
import VerifiedIcon from "@mui/icons-material/Verified";
const CheckOut = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          paddingY: "50px",
        }}
      >
        <Container sx={{ height: 700 }}>
          <Grid container spacing={5}>
            <Grid item xs={7} alignItems="center">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                sx={{ marginTop: "50px" }}
              >
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Check Out The Unique Features
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 500 }}>
                  Of Lost & Found App
                </Typography>
                <Typography>
                  {`The Lost and Found App makes your life easier, not only by significantly decreasing your workload. With us, you also increase your service capabilities as well as your customer success rate!`}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    paddingX: "20px",
                    paddingY: "10px",
                    boxShadow: "0 10px 20px 0 rgba(0, 51, 204, .1)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      sx={{
                        height: "60px",
                        width: "60px",
                        background: "#5293c4",
                        borderRadius: "5px",
                      }}
                    >
                      <PhonelinkIcon
                        sx={{ color: "white", fontSize: "2.1rem" }}
                      />
                    </Stack>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        Works On Any Device
                      </Typography>
                      <Typography>
                        Tablets, smartphones, desktop computers and more -
                        connect with any device.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    paddingX: "20px",
                    paddingY: "10px",
                    marginTop: "10px",
                    boxShadow: "0 10px 20px 0 rgba(0, 51, 204, .1)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      sx={{
                        height: "60px",
                        width: "80px",
                        background: "#5293c4",
                        borderRadius: "5px",
                      }}
                    >
                      <UpdateIcon sx={{ color: "white", fontSize: "2.1rem" }} />
                    </Stack>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        Free Updates
                      </Typography>
                      <Typography>
                        {`Innovation doesn't stop - stay up to date on all newest features by joining the Lost & Found network.`}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    paddingX: "20px",
                    paddingY: "10px",
                    marginTop: "10px",
                    boxShadow: "0 10px 20px 0 rgba(0, 51, 204, .1)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      sx={{
                        height: "60px",
                        width: "90px",
                        background: "#5293c4",
                        borderRadius: "5px",
                      }}
                    >
                      <VerifiedIcon
                        sx={{ color: "white", fontSize: "2.1rem" }}
                      />
                    </Stack>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 500 }}>
                        Smart Matching
                      </Typography>
                      <Typography>
                        Automated Smart Matching makes manual searching
                        obsolete. Save time and costs by letting the Lost &
                        Found App
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    height: 700,
                  }}
                >
                  <Box
                    sx={{
                      background: "#5293c4",
                      height: 500,
                      width: 500,
                      borderRadius: "50%",
                      //   marginTop: 30,
                    }}
                  ></Box>
                </Box>
                <Box
                  sx={{ position: "absolute", top: 0, left: 100, height: 400 }}
                >
                  <Box sx={{ height: 400 }}>
                    <Image
                      height={400}
                      width={300}
                      src={assets.img1}
                      alt="image 1"
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CheckOut;

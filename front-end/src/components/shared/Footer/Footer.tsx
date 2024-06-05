import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import {
  Facebook,
  GitHub,
  Twitter,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import assets from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "white", py: 2 }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <Grid item>
              <MuiLink href="#" sx={{ display: "flex", alignItems: "center" }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                />
                <Image src={assets.logo} alt="Logo" />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ fontWeight: "bold" }}
                >
                  Lost and Found
                </Typography>
              </MuiLink>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" gutterBottom>
                Resources
              </Typography>
              <Typography component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    Lost Item
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    Found Item
                  </MuiLink>
                </li>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" gutterBottom>
                Follow us
              </Typography>
              <Typography component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    Linkedin
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    FaceBook
                  </MuiLink>
                </li>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Typography variant="subtitle1" gutterBottom>
                Legal
              </Typography>
              <Typography component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    Privacy Policy
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#" underline="hover" color="textSecondary">
                    Terms &amp; Conditions
                  </MuiLink>
                </li>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary" align="center">
            © 2023{" "}
            <MuiLink href="#" underline="hover">
              Lost & Found
            </MuiLink>
            . All Rights Reserved.
          </Typography>
          <Box sx={{ display: "flex", mt: { xs: 2, sm: 0 } }}>
            <MuiLink href="#" color="textSecondary" sx={{ mr: 2 }}>
              <Facebook />
              <span className="sr-only">Facebook page</span>
            </MuiLink>
            <MuiLink href="#" color="textSecondary" sx={{ mr: 2 }}>
              <GitHub />
              <span className="sr-only">GitHub account</span>
            </MuiLink>
            <MuiLink href="#" color="textSecondary" sx={{ mr: 2 }}>
              <Twitter />
              <span className="sr-only">Twitter page</span>
            </MuiLink>
            <MuiLink href="#" color="textSecondary" sx={{ mr: 2 }}>
              <LinkedIn />
              <span className="sr-only">LinkedIn profile</span>
            </MuiLink>
            <MuiLink href="#" color="textSecondary">
              <Instagram />
              <span className="sr-only">Instagram profile</span>
            </MuiLink>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

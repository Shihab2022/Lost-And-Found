"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import assets from "@/assets";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ background: "transparent" }}
      >
        <Box component={Link} href="/">
          <Image src={assets.logo} alt="Logo" />
        </Box>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
          <Typography component={Link} href="/dashboard/profile">
            Dashboard
          </Typography>
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;

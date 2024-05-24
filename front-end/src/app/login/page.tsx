"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { loginUserApi } from "@/services/auth";
import CForm from "@/components/froms/CFroms";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/Schema/loginSchema";
import CInputField from "@/components/froms/CInput";
import { FieldValues } from "react-hook-form";
export default function Login() {
  const handleLogin = async (values: FieldValues) => {
    console.log({ values });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <CForm
          onSubmit={handleLogin}
          resolver={zodResolver(loginValidationSchema)}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item md={12}>
              <CInputField
                name="email"
                label="Email"
                type="email"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={12}>
              <CInputField
                name="password"
                label="Password"
                type="password"
                fullWidth={true}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              margin: "10px 0px",
            }}
            fullWidth={true}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </CForm>
      </Box>
    </Container>
  );
}

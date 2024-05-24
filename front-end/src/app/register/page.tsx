"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CInputField from "@/components/froms/CInput";
import CForm from "@/components/froms/CFroms";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/Schema/registerSchema";
import { FieldValues} from "react-hook-form";
export default function Register() {
  const handleRegister = async (values: FieldValues) => {
    console.log({values})
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
          Sign up
        </Typography>
        <CForm
          onSubmit={handleRegister}
          resolver={zodResolver(registerValidationSchema)}
          defaultValues={{
            email: "",
            password: "",
            firstName:"",
            lastName:''
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CInputField
                label="First Name"
                type="text"
                fullWidth={true}
                name="firstName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CInputField
                label="Last Name"
                type="text"
                fullWidth={true}
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <CInputField
                label="Email Address"
                type="email"
                fullWidth={true}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <CInputField
                label="Password"
                type="password"
                fullWidth={true}
                name="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </CForm>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

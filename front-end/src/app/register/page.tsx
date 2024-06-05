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
import CInputField from "@/components/froms/CInput";
import CForm from "@/components/froms/CFroms";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/Schema/registerSchema";
import { FieldValues } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/auth";

export default function Register() {
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    try {
      const res = await registerUser({
        ...values,
        profile: {
          bio: "",
        },
      });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        router.push("/login");
      }
    } catch (error) {
      console.log({ error });
    }
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
        <Link href="/">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <CForm
          onSubmit={handleRegister}
          resolver={zodResolver(registerValidationSchema)}
          defaultValues={{
            email: "",
            password: "",
            name: "",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CInputField
                label="Usr Name"
                type="text"
                fullWidth={true}
                name="name"
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
            <Link href="/login">Already have an account? Login</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

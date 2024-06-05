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
import CForm from "@/components/froms/CFroms";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/Schema/loginSchema";
import CInputField from "@/components/froms/CInput";
import { FieldValues } from "react-hook-form";
import { loginUserApi } from "@/services/auth";
import { toast } from "sonner";
import { setToken } from "@/utils/storage";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUserApi(values);
      if (res?.data?.success) {
        const token = res.data.data.token;
        toast.success(res?.data?.message);
        setToken(token);
        router.push("/");
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login in
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
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/register">Already have an account? Register</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

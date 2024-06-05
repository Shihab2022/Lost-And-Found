"use client";
import { updateProfileSchema } from "@/Schema/updateProfile";
import CForm from "@/components/froms/CFroms";
import { initialProfileProps } from "@/contants/common";
import { getUserInfo, updateUserInfo } from "@/services/auth";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CInputField from "@/components/froms/CInput";
import { toast } from "sonner";
const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(initialProfileProps);
  const [isEdit, setIsEdit] = useState(false);
  const getUser = async () => {
    try {
      const res = await getUserInfo({});
      const userInfo = res.data.data.user;
      setProfileInfo(userInfo);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await updateUserInfo(values);
      console.log({ res });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setProfileInfo(res?.data?.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <Stack>
        <Typography variant="h5">Your Name :{profileInfo?.name} </Typography>
        <Typography>Your Email :{profileInfo?.email} </Typography>
        <Typography>
          Are you want to change your information ?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Yes
          </Link>{" "}
          /{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            No
          </Link>{" "}
        </Typography>
      </Stack>
      {isEdit && (
        <Box sx={{ marginTop: "30px" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginY: "15px" }}
          >
            {" "}
            Update Your Profile Info
          </Typography>
          <CForm
            onSubmit={handleSubmit}
            resolver={zodResolver(updateProfileSchema)}
            defaultValues={{
              email: profileInfo?.email || "",
              name: profileInfo?.name || "",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CInputField
                  label="Usr Name"
                  type="text"
                  fullWidth={true}
                  name="name"
                  required={false}
                />
              </Grid>
              <Grid item xs={12}>
                <CInputField
                  label="Email Address"
                  type="email"
                  fullWidth={true}
                  name="email"
                  required={false}
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
        </Box>
      )}
    </>
  );
};

export default Profile;

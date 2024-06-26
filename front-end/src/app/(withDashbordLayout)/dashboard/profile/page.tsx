"use client";
import { updatePass, updateProfileSchema } from "@/Schema/updateProfile";
import CForm from "@/components/froms/CFroms";
import { initialProfileProps } from "@/contants/common";
import { changePassword, getUserInfo, updateUserInfo } from "@/services/auth";
import { Box, Button, Grid, Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CInputField from "@/components/froms/CInput";
import { toast } from "sonner";
import { removeToken } from "@/utils/storage";
import { useRouter } from "next/navigation";
const Profile = () => {
  const [profileInfo, setProfileInfo] = useState(initialProfileProps);
  const [isEdit, setIsEdit] = useState(false);
  const [isPassChange, setIsPassChange] = useState(false);
  const router = useRouter();
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
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setProfileInfo(res?.data?.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const handlePasswordChange = async (value: FieldValues) => {
    try {
      const res = await changePassword({ ...value, id: profileInfo.id });
      console.log({ res });
      if (res.data.success) {
        toast.success("password change , login again !");
        removeToken();
        router.refresh();
        router.push("/login");
      } else {
        toast.error("something went wrong ");
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
        <Typography>
          Are you want to change your Password ?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsPassChange(true);
            }}
          >
            Yes
          </Link>{" "}
          /{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsPassChange(false);
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
              Update
            </Button>
          </CForm>
        </Box>
      )}
      {isPassChange && (
        <Box sx={{ marginTop: "30px" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginY: "15px" }}
          >
            {" "}
            Update Your Password
          </Typography>
          <CForm
            onSubmit={handlePasswordChange}
            resolver={zodResolver(updatePass)}
            defaultValues={{
              password: "",
              updatedPass: "",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CInputField
                  label="Old Password"
                  type="password"
                  fullWidth={true}
                  name="password"
                  required={false}
                />
              </Grid>
              <Grid item xs={12}>
                <CInputField
                  label="New Password"
                  type="password"
                  fullWidth={true}
                  name="updatedPass"
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
              Update Password
            </Button>
          </CForm>
        </Box>
      )}
    </>
  );
};

export default Profile;

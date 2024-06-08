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
import CInputField from "@/components/froms/CInput";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { getToken } from "@/utils/storage";
import CSelectField from "@/components/froms/CSelectField";
import Link from "next/link";
import { Status } from "@/contants/fakeData";
import { claimSchema } from "@/Schema/claimSchema";
import { createClaim, getMyFoundItem } from "@/services/auth";
const FoundItem = () => {
  const router = useRouter();
  const token = getToken();
  if (!token) {
    router.push("/login");
  }
  const [foundItem, setFound] = React.useState([]);
  const getFounded = async () => {
    try {
      const res = await getMyFoundItem({});
      if (res.data.success) {
        setFound(res.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  console.log({ foundItem });
  React.useEffect(() => {
    getFounded();
  }, []);
  const submitFoundItem = async (values: FieldValues) => {
    console.log({ values });
    try {
      const selectedFoundItem: any = foundItem.find(
        (i: any) => i?.foundItemName === values.foundItemId
      );
      console.log({ selectedFoundItem });
      const data = {
        userId: selectedFoundItem?.userId,
        foundItemId: selectedFoundItem?.id,
        status: values?.status,
        distinguishingFeatures: values?.distinguishingFeatures,
      };
      const res = await createClaim(data);
      console.log({ res });
    } catch (error) {}
  };
  return (
    <>
      <Container component="main" maxWidth="xl">
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
            Add Now Claim
          </Typography>
          <CForm
            onSubmit={submitFoundItem}
            resolver={zodResolver(claimSchema)}
            defaultValues={{
              foundItemId: "",
              location: "",
              distinguishingFeatures: "",
            }}
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={12}>
                <CSelectField
                  name="foundItemId"
                  label="Found item"
                  fullWidth={true}
                  required={true}
                  items={foundItem.map((c: any) => c?.foundItemName)}
                />
              </Grid>
              <Grid item md={12}>
                <CSelectField
                  name="status"
                  label="Status"
                  fullWidth={true}
                  required={true}
                  items={Status.map((c) => c?.name)}
                />
              </Grid>
              <Grid item md={12}>
                <CInputField
                  name="distinguishingFeatures"
                  label="Description"
                  type="text"
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
              Submit
            </Button>
          </CForm>
        </Box>
      </Container>
    </>
  );
};

export default FoundItem;

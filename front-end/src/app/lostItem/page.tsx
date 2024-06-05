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
import { lostItemSchema } from "@/Schema/lostItemSchema";
import CDatePicker from "@/components/froms/CDatePicker";
import { useRouter } from "next/navigation";
import { getToken } from "@/utils/storage";
import { createLostItem, getCategory } from "./../../services/lostItem";
import CSelectField from "@/components/froms/CSelectField";
import Link from "next/link";
type TCategory = {
  name: string;
  id: string;
};
const initial: TCategory[] = [
  {
    name: "",
    id: "",
  },
];
const LostItem = () => {
  const [category, setCategory] = React.useState(initial);
  const router = useRouter();
  const token = getToken();
  if (!token) {
    router.push("/login");
  }
  const submitLostItem = async (values: FieldValues) => {
    console.log({ values });
    const { category: categoryName, brand, ...rest } = values;
    const info = {
      categoryId: category!?.find((c) => c!.name === categoryName)?.id,
      foundItemName: brand,
      date: new Date(),
      ...rest,
    };
    try {
      const res = await createLostItem(info);
      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
    console.log({ info });
  };
  const getItemCategory = async () => {
    try {
      const res = await getCategory(undefined);
      if (res?.success) {
        setCategory(res?.data?.data);
      }
    } catch (err) {
      console.log({ err });
    }
  };
  React.useEffect(() => {
    getItemCategory();
  }, []);
  console.log({ category });
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
            Add Your Lost Item
          </Typography>
          <CForm
            onSubmit={submitLostItem}
            resolver={zodResolver(lostItemSchema)}
            defaultValues={{
              category: "",
              brand: "",
              color: "",
              distinguishing: "",
              location: "",
            }}
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={6}>
                <CSelectField
                  name="category"
                  label="Category"
                  fullWidth={true}
                  required={true}
                  items={category.map((c) => c.name)}
                />
              </Grid>
              <Grid item md={6}>
                <CInputField
                  name="brand"
                  label="Brand Name"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <CInputField
                  name="color"
                  label="Color"
                  type="text"
                  fullWidth={true}
                />
              </Grid>

              <Grid item md={6}>
                <CInputField
                  name="distinguishing"
                  label="Distinguishing"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <CInputField
                  name="location"
                  label="Location"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <CDatePicker name="date" label="Date" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <CInputField
                  name="number"
                  label="Phone number"
                  type="number"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <CInputField
                  name="email"
                  label="Email"
                  type="email"
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

export default LostItem;

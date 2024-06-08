"use client";
import LostItemTable from "@/components/table/table";
import { deleteLostItems, getMyLostItem } from "@/services/auth";
import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toast } from "sonner";
import Link from "next/link";
const LostItem = () => {
  const [lostItem, setLostItem] = useState([]);
  const getLostItem = async () => {
    try {
      const res = await getMyLostItem({});
      if (res.data.success) {
        setLostItem(res.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getLostItem();
  }, []);
  const handleDelete = async (row: any) => {
    try {
      const res = await deleteLostItems(row);
      if (res.data.success) {
        getLostItem();
        toast.success("Delete Successfully !");
      }
    } catch (error) {
      console.log({ error });
    }
  };
  const columns = [
    {
      id: "foundItemName",
      label: "Name",
      minWidth: 120,
    },

    { id: "color", label: "Color", minWidth: 120 },
    {
      id: "category",
      label: "Category",
      minWidth: 120,
      format: (row: any) => row.category.name,
    },
    { id: "distinguishing", label: "Description", minWidth: 120 },
    {
      id: "createdAt",
      label: "Created At",
      minWidth: 120,
      format: (row: any) => new Date(row.createdAt).toISOString().split("T")[0],
    },
    { id: "location", label: "Location", minWidth: 120 },
    { id: "number", label: "Number", minWidth: 120 },
    { id: "email", label: "Email", minWidth: 120 },
    {
      id: "delete",
      label: "Delete",
      minWidth: 120,
      format: (row: any) => (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(row)}>
            <DeleteOutlineIcon sx={{ color: "red" }} />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h4" sx={{ marginY: "20px" }}>
          Your Lost Item
        </Typography>
        <Link href="/lostItem">
          <Button variant="contained">Add New Items</Button>
        </Link>
      </Stack>
      <LostItemTable rows={lostItem} columns={columns} />
    </div>
  );
};

export default LostItem;

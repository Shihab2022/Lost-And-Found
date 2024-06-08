"use client";
import LostItemTable from "@/components/table/table";
import { deleteFoundItems, getMyFoundItem } from "@/services/auth";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toast } from "sonner";
const LostItem = () => {
  const [foundItem, setFound] = useState([]);
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
  useEffect(() => {
    getFounded();
  }, []);
  const handleDelete = async (row: any) => {
    try {
      const res = await deleteFoundItems(row);
      if (res.data.success) {
        getFounded();
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
      <Typography variant="h4" sx={{ marginY: "20px", textAlign: "center" }}>
        Your Found Item
      </Typography>
      <LostItemTable rows={foundItem} columns={columns} />
    </div>
  );
};

export default LostItem;

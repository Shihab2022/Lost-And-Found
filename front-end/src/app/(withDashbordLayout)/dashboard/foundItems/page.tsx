"use client";
import LostItemTable from "@/components/table/table";
import { getMyFoundItem } from "@/services/auth";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

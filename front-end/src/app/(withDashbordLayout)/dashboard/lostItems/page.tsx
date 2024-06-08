"use client";
import LostItemTable from "@/components/table/table";
import { getMyLostItem } from "@/services/auth";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
        Your Lost Item
      </Typography>
      <LostItemTable rows={lostItem} columns={columns} />
    </div>
  );
};

export default LostItem;

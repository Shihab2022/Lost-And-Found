"use client";
import LostItemTable from "@/components/table/table";
import { deleteFoundItems, getMyFoundItem } from "@/services/auth";
import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toast } from "sonner";
import { getMyClaim } from "@/services/lostItem";
import Link from "next/link";
const Claim = () => {
  const [claimItem, setClaimItem] = useState([]);
  const getFounded = async () => {
    try {
      const res = await getMyClaim({});
      if (res.data.success) {
        setClaimItem(res.data.data);
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
  console.log({ claimItem });
  const columns = [
    {
      id: "foundItem",
      label: "Name",
      minWidth: 120,
      format: (row: any) => row.foundItem.foundItemName,
    },
    {
      id: "foundItem",
      label: "Color",
      minWidth: 120,
      format: (row: any) => row.foundItem.color,
    },
    {
      id: "foundItem",
      label: "Location",
      minWidth: 120,
      format: (row: any) => row.foundItem.location,
    },
    {
      id: "status",
      label: "Status",
      minWidth: 120,
    },

    { id: "createdAt", label: "Created At", minWidth: 120 },
    {
      id: "user",
      label: "Created Bt",
      minWidth: 120,
      format: (row: any) => row?.foundItem?.user?.name,
    },
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
          Your Claim
        </Typography>
        <Link href="/claim">
          <Button variant="contained">New Claim</Button>
        </Link>
      </Stack>
      <LostItemTable rows={claimItem} columns={columns} />
    </div>
  );
};

export default Claim;

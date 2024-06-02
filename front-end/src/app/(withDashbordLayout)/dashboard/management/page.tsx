"use client";

import LostItemTable from "@/components/table/table";
import { deleteUserInfo, getAllUserInfo } from "@/services/auth";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { toast } from "sonner";
const Management = () => {
  const [allUser, setAllUser] = useState([]);
  const getUser = async () => {
    try {
      const res = await getAllUserInfo({});
      if (res.data.success) {
        setAllUser(res.data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const handleDelete = async (row: any) => {
    try {
      const res = await deleteUserInfo(row);
      if (res.data.success) {
        const remainUser = allUser?.filter((u: any) => u.id !== row.id);
        setAllUser(remainUser);
        toast.success("User deleted ");
      }
    } catch (error) {}
  };
  const columns = [
    {
      id: "name",
      label: "Name",
      minWidth: 120,
    },

    { id: "email", label: "Email", minWidth: 120 },
    {
      id: "role",
      label: "Role",
      minWidth: 120,
    },
    { id: "createdAt", label: "Created At", minWidth: 120 },
    {
      id: "delete",
      label: "Delete User",
      minWidth: 120,
      format: (row: any) => (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleDelete(row)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];
  return (
    <div>
      <LostItemTable rows={allUser} columns={columns} />
    </div>
  );
};

export default Management;

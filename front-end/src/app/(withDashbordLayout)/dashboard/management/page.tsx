"use client";

import LostItemTable from "@/components/table/table";
import {
  deleteUserInfo,
  getAllUserInfo,
  updateUsersInfo,
} from "@/services/auth";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { MenuItem, Select, Tooltip } from "@mui/material";
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
  const handleChange = async (v: any) => {
    try {
      const res = await updateUsersInfo(v);
      if (res.data.success) {
        getUser();
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
      format: (row: any) => (
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={row?.role}
          label="Age"
          onChange={(e) => handleChange({ id: row.id, role: e.target.value })}
        >
          <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
          <MenuItem value={"USER"}>USER</MenuItem>
        </Select>
      ),
    },
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
            <DeleteOutlineIcon sx={{ color: "red" }} />
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

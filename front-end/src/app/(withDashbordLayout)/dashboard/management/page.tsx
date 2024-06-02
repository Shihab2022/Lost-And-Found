"use client";

import LostItemTable from "@/components/table/table";
import { getAllUserInfo } from "@/services/auth";
import { useEffect, useState } from "react";

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
  ];
  return (
    <div>
      <LostItemTable rows={allUser} columns={columns} />
    </div>
  );
};

export default Management;

"use client";
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { useRouter } from "next/navigation";
import { getToken } from "@/utils/storage";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const token = getToken();
  if (!token) {
    router.push("/login");
  }
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default CommonLayout;

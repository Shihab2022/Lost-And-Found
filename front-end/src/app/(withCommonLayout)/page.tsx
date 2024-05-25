"use client";
import AboutUs from "@/components/ui/HomePage/aboutUs";
import Banner from "@/components/ui/HomePage/banner";
import CheckOut from "@/components/ui/HomePage/checkOut";
import LatestNews from "@/components/ui/HomePage/latestNews";
import { useRouter } from "next/navigation";
import { getToken } from "@/utils/storage";
const HomePage = () => {
  const router = useRouter();
  const token = getToken();
  if (!token) {
    router.push("/login");
  }

  return (
    <>
      <Banner />
      <AboutUs />
      <CheckOut />
      <LatestNews />
    </>
  );
};

export default HomePage;

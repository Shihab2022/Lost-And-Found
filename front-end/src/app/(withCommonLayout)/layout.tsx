import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          background: "white",
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <Navbar />
        </Box>
      </Box>

      <div className="min-h-screen">{children}</div>
      <Footer />
    </Box>
  );
};

export default CommonLayout;

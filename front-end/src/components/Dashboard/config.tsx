import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import CurtainsClosedOutlinedIcon from "@mui/icons-material/CurtainsClosedOutlined";
import JoinFullOutlinedIcon from "@mui/icons-material/JoinFullOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
export const userItem = [
  {
    title: "Profile",
    path: `/profile`,
    icon: AccountCircleOutlinedIcon,
  },
  {
    title: "My Claim",
    path: `/claim`,
    icon: NightsStayOutlinedIcon,
  },
  {
    title: "Lost Items",
    path: `/lostItems`,
    icon: BathroomOutlinedIcon,
  },
  {
    title: "Found Items",
    path: `/foundItems`,
    icon: CurtainsClosedOutlinedIcon,
  },
];

export const adminItem = [
  {
    title: "Profile",
    path: `/profile`,
    icon: AccountCircleOutlinedIcon,
  },
  {
    title: "User Management",
    path: `/management`,
    icon: JoinFullOutlinedIcon,
  },
  {
    title: "Activity",
    path: `/activity`,
    icon: CelebrationOutlinedIcon,
  },
];

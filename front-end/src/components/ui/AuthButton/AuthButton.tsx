// import { getUserInfo, removeUser } from "@/services/auth.services";
import { getToken, removeToken } from "@/utils/storage";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  //   const userInfo = getUserInfo();
  const router = useRouter();
  const token = getToken();
  const handleLogOut = () => {
    removeToken();
    router.refresh();
  };
  return (
    <>
      {token ? (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Button color="error" onClick={handleLogOut}>
            Logout
          </Button>
          <Button component={Link} href="/dashboard/profile">
            My Profile
          </Button>
        </Stack>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;

import { logout } from "@/app/actions/authAction";
import { Button } from "../button/Button";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <Button
        label="Logout"
        style={{
          padding: "0 1rem",
        }}
        variant={"destructive"}
      />
    </form>
  );
};

export default LogoutButton;

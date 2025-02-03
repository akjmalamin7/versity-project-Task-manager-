import useLoggedOut from "@/hooks/useLoggedOut";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";
import { Link } from "react-router-dom";

const AppDrawer = () => {
const {handleLogout} = useLoggedOut()
  return (
    <Card className="w-[180px]" radius="sm">
      <Card.CardHeader>
        <Text size="md" color="white">
          <Link to={"/profile"} className="w-100 flex">Profile</Link>
        </Text>
      </Card.CardHeader>
      <Card.CardBody>
        <Button variant="text" className=" h-auto md:h-auto py-0" width="full" onClick={handleLogout}>
          <Text size="md" color="white">
            Log out
          </Text>
        </Button>
      </Card.CardBody>
    </Card>
  );
};

export default AppDrawer;

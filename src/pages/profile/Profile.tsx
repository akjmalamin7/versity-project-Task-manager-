import Container from "@/components/common/container/Container";
import { useGetProfileQuery } from "@/redux/features/profile/profileApi";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Input from "@/shared/ui/input";
import InputFile from "@/shared/ui/inputFile";

const Profile = () => {
  // Use the hook to fetch profile data
  const { data, error, isLoading } = useGetProfileQuery();
  const user = data?.data[0];
  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Error occurred</div>;
  return (
    <Container width="sm">
      <Card radius="sm">
        <Card.CardBody padding="lg">
          <div className="grid grid-cols-1 gap-y-[20px] md:gap-y-[50px]">
            <div className=" flex justify-center">
              <div className="w-[150px] h-[150px] rounded-[20px] overflow-hidden">
                <img
                  src={user?.photo || ""}
                  alt={user?.firstName || "Profile Picture"}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <form>
                <div className="grid grid-cols-2 gap-[12px] lg:gap-[20px]">
                  <div className="col-span-2">
                    <InputFile color="light" size="md" type="text" className="" />
                  </div>
                  <div>
                    <Input color="light" size="md" type="text" className="" placeholder="First Name" />
                  </div>
                  <div>
                    <Input color="light" size="md" type="text" className="" placeholder="Last Name" />
                  </div>
                  <div>
                    <Input color="light" size="md" type="email" className="" placeholder="Your Email" />
                  </div>
                  <div>
                    <Input color="light" size="md" type="text" className="" placeholder="Your Phone" />
                  </div>
                  <div className="col-span-2 justify-end flex">
                    <Button color="white" type="submit" disabled>Update</Button>
                  </div>
                </div>
              </form>
            </div>
            {/* Add more profile details here */}
          </div>
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default Profile;

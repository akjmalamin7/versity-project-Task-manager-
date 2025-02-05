import DeleteIcon from "@/assets/icons/deleteIcon";
import EditIcon from "@/assets/icons/editIcon";
import { TaskModel } from "@/shared/redux/features/tasks/task.models";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import DateFormate from "@/shared/ui/dateFormate";
import Tag from "@/shared/ui/tag/Tag";
import Text from "@/shared/ui/text";

const TaskCard = ({ title, description, status }: TaskModel) => {
  return (
    <Card cardStyle="border" className="border-gray-400 overflow-hidden">
      <Card.CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex gap-[5px]">
            <DateFormate />
            <div className="flex items-center">
              <Button
                variant="text"
                className="h-[auto] py-[0px] px-[0px] md:h-[auto] lg:cursor-pointer"
              >
                <EditIcon />
              </Button>
              <Button
                variant="text"
                className="h-[auto] py-[0px] px-[0px] md:h-[auto] lg:cursor-pointer"
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
          <div>
            <Tag tag={status || "new"} />
          </div>
        </div>
      </Card.CardHeader>
      <Card.CardBody padding="md">
        <Text element="h3" color="white" size="lg" fontWeight="medium" className="mb-[10px]">
          {title || ""}
        </Text>
        <Text element="p" size="md" fontWeight="regular" color="white">
          {description || ""}
        </Text>
      </Card.CardBody>
    </Card>
  );
};

export default TaskCard;

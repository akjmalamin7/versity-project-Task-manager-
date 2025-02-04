import { TaskModel } from "@/redux/features/tasks/task.models";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Tag from "@/shared/ui/tag/Tag";
import Text from "@/shared/ui/text";

const TaskCard = ({ title, description, status }: TaskModel) => {
  return (
    <Card cardStyle="border" className="border-gray-400 overflow-hidden">
      <Card.CardHeader>
        <Text element="h3">{title || ""}</Text>
      </Card.CardHeader>
      <Card.CardBody>
        <Text element="h3">{description || ""}</Text>
      </Card.CardBody>
      <Card.CardHeader>
        <div>
          <div>
            <Button>edit</Button>
          </div>
          <div>
            <Button>delete</Button>
          </div>
          <div>
            <Tag tag={status || "new"} />
          </div>
        </div>
      </Card.CardHeader>
    </Card>
  );
};

export default TaskCard;

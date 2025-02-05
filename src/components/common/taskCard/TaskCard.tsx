import DeleteIcon from "@/assets/icons/deleteIcon";
import EditIcon from "@/assets/icons/editIcon";
import { TaskModel } from "@/shared/redux/features/tasks/task.models";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import DateFormate from "@/shared/ui/dateFormate";
import Tag from "@/shared/ui/tag/Tag";
import Text from "@/shared/ui/text";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteTask from "../deleteTask";
import SelectStatus from "../selectStatus/SelectStatus";

const TaskCard = ({ title, description, status, _id }: TaskModel) => {
  const [visible, setVisible] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(status || "");
  const handleVisibleTag = () => {
    setVisibleTag((prev) => !prev);
  };
  const handleVisible = (id?: string) => {
    setSelectedId(id || null);
    setVisible((prev) => !prev);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };
  return (
    <>
      <Card cardStyle="border" className={`border-gray-400 overflow-hidden  ${_id}`}>
        <Card.CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex gap-[5px]">
              <DateFormate />
              <div className="flex items-center">
                <Link to={`/tasks/${_id}`}><EditIcon /></Link>
                <Button
                  variant="text"
                  className="h-[auto] px-0 lg:cursor-pointer"
                  onClick={() => handleVisible(_id)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </div>
            <div>
              {visibleTag ? (
                <div>
                  <SelectStatus
                    _id={_id || ""} // Ensure _id is a string
                    value={selectedStatus}
                    onChange={handleStatusChange}
                    defaultSelectText="Select Status"
                    name="status"
                    setVisibleTag={setVisibleTag}
                  />
                </div>
              ) : (
                <Button
                  type="button"
                  variant="text"
                  className="lg:cursor-pointer"
                  onClick={handleVisibleTag}
                >
                  <Tag tag={status || "new"} />
                </Button>
              )}
            </div>
          </div>
        </Card.CardHeader>
        <Card.CardBody padding="md">
          <Text element="h3" color="white" size="lg" fontWeight="medium" className="mb-2">
            {title || ""}
          </Text>
          <Text element="p" size="md" fontWeight="regular" color="white">
            {description || ""}
          </Text>
        </Card.CardBody>
      </Card>
      {visible && selectedId && <DeleteTask title={title} onCancel={handleVisible} getDeletedId={selectedId} />}
    </>
  );
};

export default TaskCard;

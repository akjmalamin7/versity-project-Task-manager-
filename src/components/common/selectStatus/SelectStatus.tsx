import { useUpdateTaskByStatusMutation } from "@/shared/redux/features/tasks/taskApi";
import Button from "@/shared/ui/button";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";
import { Select } from "@/shared/ui/select";
import Text from "@/shared/ui/text";
import React, { useState } from "react";
interface Props {
  defaultSelectText?: string;
  value?: string | null; // Allow null here
  name?: string;
  className?: string;
  setVisibleTag: React.Dispatch<React.SetStateAction<boolean>>;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  _id?: string | null; // Allow null for _id
}

const SelectStatus = ({
  _id,
  className,
  setVisibleTag,
  defaultSelectText,
  name,
  onChange,
  value,
}: Props) => {
  const [updateTaskByStatus, { error, isLoading }] = useUpdateTaskByStatusMutation();
  const [selectedStatus, setSelectedStatus] = useState(value || "");
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleSaveClick = async () => {
    if (!_id || !selectedStatus) {
      return;
    }

    const dataToSend = { id: _id, status: selectedStatus };

    try {
      await updateTaskByStatus(dataToSend).unwrap();
      setVisibleTag(false);
    } catch (err) {
      console.error("Error updating task status:", err);
    }
  };

  let content = null;
  if (isLoading) {
    return (content = <Loader type="regular" />);
  } else if (!isLoading && error) {
    return (content = <Message message="Something went wrong!" />);
  } else {
    content = (
      <Select
        className={`${className} text-gray-200 xl:h-[30px]`}
        size="sm"
        onChange={handleSelectChange}
        name={name}
        value={selectedStatus}
      >
        <option value="" className="text-gray-300">
          {defaultSelectText}
        </option>
        <option value="new" className="text-gray-950">
          New
        </option>
        <option value="progress" className="text-gray-950">
          In Progress
        </option>
        <option value="completed" className="text-gray-950">
          Completed
        </option>
        <option value="canceled" className="text-gray-950">
          Canceled
        </option>
      </Select>
    );
  }
  return (
    <div className="flex items-center gap-[4px]">
      {content}
      <div className="flex items-center">
        <Button
          variant="text"
          size="size-1"
          color="white"
          className="lg:cursor-pointer"
          onClick={handleSaveClick}
        >
          <Text size="md" color="white">
            Save
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default SelectStatus;

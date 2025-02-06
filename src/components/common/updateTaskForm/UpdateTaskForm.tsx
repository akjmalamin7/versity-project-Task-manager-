import { TaskModel } from "@/shared/redux/features/tasks/task.models";
import { TASK_SCHEMA } from "@/shared/redux/features/tasks/task.shema";
import { useUpdateTaskMutation, useViewTaskQuery } from "@/shared/redux/features/tasks/taskApi"; // API mutation import
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Input from "@/shared/ui/input";
import TextArea from "@/shared/ui/textArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTaskForm = () => {
  const { _id: taskId } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useViewTaskQuery(taskId);
  const getTask = data?.data;
  const [task, setTask] = useState<TaskModel | null>(null);
  const getStatus = data?.data?.status;
  const [updateTask, { isLoading: isUpdating }] = useUpdateTaskMutation();
  useEffect(() => {
    if (getTask) {
      setTask(getTask || {});
    }
  }, [getTask]);

  // Set up react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TaskModel>({
    resolver: yupResolver(TASK_SCHEMA),
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || "new",
    },
  });

  // Reset form when task data is updated
  // Reset form with updated task data
  useEffect(() => {
    if (task) {
      reset({
        title: task.title || "",
        description: task.description || "",
        status: task.status || "new",
      });
    }
  }, [task, reset]);

  // Handle form submit
  const onSubmit: SubmitHandler<TaskModel> = async (data) => {
    try {
      await updateTask({ id: taskId, data }).unwrap();
      navigate(`/${getStatus}`);
      reset();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !task) return <div>Error loading task</div>;

  return (
    <Card>
      <Card.CardBody padding="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-[30px] py-[20px]">
            <div>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input {...field} size="md" color="light" placeholder="Task Name" />
                )}
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextArea {...field} size="md" color="light" placeholder="Task Description" />
                )}
              />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                color="white"
                disabled={!isValid || isUpdating}
                loading={isUpdating}
              >
                {isUpdating ? "Updating..." : "Update"}
              </Button>
            </div>
          </div>
        </form>
      </Card.CardBody>
    </Card>
  );
};

export default UpdateTaskForm;

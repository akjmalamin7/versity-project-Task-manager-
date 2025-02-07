import { TaskModel } from "@/shared/redux/features/tasks/task.models";
import { TASK_SCHEMA } from "@/shared/redux/features/tasks/task.shema";
import { useCreateTaskMutation } from "@/shared/redux/features/tasks/taskApi";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Input from "@/shared/ui/input";
import Text from "@/shared/ui/text";
import TextArea from "@/shared/ui/textArea";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },reset
  } = useForm<TaskModel>({
    resolver: yupResolver(TASK_SCHEMA),
    defaultValues: {
      title: "",
      description: "",
      status:"new"
    },
  });
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const onSubmit: SubmitHandler<TaskModel> = async (data) => {
    try {
      const result = await createTask(data).unwrap();
      toast(result.message)

      reset();
    } catch (err) {
      console.error("Creating failed:", err);
    }
  };
  return (
    <Card>
      
      <Card.CardBody padding="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-[30px] py-[20px]">
            <div>
              <Input {...register("title")} size="md" color="light" placeholder="Task Name" />
              {errors.title && (
                <Text size="sm" className="text-red-500">
                  {errors.title.message}
                </Text>
              )}
            </div>
            <div>
              <TextArea
                {...register("description")}
                size="md"
                color="light"
                placeholder="Task Description"
              />
              {errors.description && (
                <Text size="sm" className="text-red-500">
                  {errors.description.message}
                </Text>
              )}
            </div>
            <div className="flex justify-end">
              <Button loading={isLoading} disabled={!isValid} type="submit" color="white">
                {isLoading === true ? "Creating..." : "Create"}
              </Button>
            </div>
          </div>
        </form>
      </Card.CardBody>
    </Card>
  );
};

export default CreateTaskForm;

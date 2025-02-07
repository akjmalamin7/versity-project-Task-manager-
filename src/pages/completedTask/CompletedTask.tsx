import Container from "@/components/common/container/Container";
import PageHeader from "@/components/common/pageHeader";
import TaskCard from "@/components/common/taskCard/TaskCard";
import { useGetCompletedTaskQuery } from "@/shared/redux/features/tasks/taskApi";
import Card from "@/shared/ui/card";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";

const CompletedTask = () => {
  const { data, error, isLoading } = useGetCompletedTaskQuery(undefined);

  let content = null;
  let errorOrEmptyContent = null;
  if (isLoading) {
    errorOrEmptyContent = <Loader />;
  } else if (error) {
    const errorMessage =
      "data" in error && error.data && typeof error.data === "object"
        ? (error.data as { message?: string }).message || "Something went wrong"
        : "Something went wrong";
    errorOrEmptyContent = <Message message={errorMessage} />;
  } else {
    const tasks = data?.data ?? [];
    if (tasks.length === 0) {
      errorOrEmptyContent = <Message message="No Task found" />;
    } else {
      content = tasks.map((task) => (
        <TaskCard
          key={task._id}
          _id={task._id || ""}
          title={task.title || ""}
          description={task.description || ""}
          status={task.status || "new"}
        />
      ));
    }
  }

  return (
    <Container width="lg">
      <PageHeader title="Completed Tasks" />
      <Card>
        <Card.CardBody padding="md">
          {data?.data?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] lg:gap-[25px] ">
              {content}
            </div>
          ) : (
            <div className="py-[40px] relative">{errorOrEmptyContent}</div>
          )}
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default CompletedTask;

import Container from "@/components/common/container/Container";
import PageHeader from "@/components/common/pageHeader";
import TaskCard from "@/components/common/taskCard/TaskCard";
import { useGetAllTaskQuery } from "@/shared/redux/features/tasks/taskApi";
import Card from "@/shared/ui/card";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";

const AllTask = () => {
  const { data, error, isLoading } = useGetAllTaskQuery();
  const tasks = data?.data ?? [];
  let content = null;
  let errorOrEmptyContent = null;
  if (isLoading) {
    errorOrEmptyContent = <Loader />;
  } else if (!isLoading && error) {
    const errorMessage =
      "data" in error && error.data && typeof error.data === "object"
        ? (error.data as { message?: string }).message || "Something went wrong"
        : "Something went wrong";

    errorOrEmptyContent = <Message message={errorMessage} />;
  } else if (!isLoading && !error && tasks.length === 0) {
    errorOrEmptyContent = <Message message="No Task found" />;
  } else if (!isLoading && !error && tasks.length > 0) {
    content = tasks.map((task) => (
      <TaskCard
        key={task._id}
        _id={task._id || ""}
        title={task.title || ""}
        description={task.description || ""}
        status={task.status || "new"}
      />
    ));
  } else {
    errorOrEmptyContent = <Message message="No Task found" />;
  }
  return (
    <Container width="lg">
      <PageHeader title="All task" />
      <Card>
        <Card.CardBody padding="md">
          {tasks?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[20px] lg:gap-[25px] ">
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

export default AllTask;

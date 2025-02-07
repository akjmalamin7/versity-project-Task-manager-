import AnalyticsCard from "@/components/common/analyticsCard";
import Container from "@/components/common/container/Container";
import PageHeader from "@/components/common/pageHeader";
import { TaskCount } from "@/shared/redux/features/tasks/task.models";
import { useTaskCountQuery } from "@/shared/redux/features/tasks/taskApi";
import Card from "@/shared/ui/card";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";

const Dashboard = () => {
  const { data, error, isLoading } = useTaskCountQuery(undefined);
  const tasks = data?.data ?? [];
  let content = null;
  let messageContent = null;
  if (isLoading) {
    messageContent = <Loader type="fit" />;
  } else if (!isLoading && error) {
    const errorMessage =
      "data" in error && error.data && typeof error.data === "object"
        ? (error.data as { message?: string }).message || "Something went wrong"
        : "Something went wrong";

    messageContent = <Message message={errorMessage} />;
  } else if (!isLoading && !error && tasks.length === 0) {
    messageContent = <Message message="No Task found" />;
  } else if (!isLoading && !error && tasks.length > 0) {
    content = tasks.map((task: TaskCount) => (
      <AnalyticsCard key={task._id} count={task.count} _id={task._id || "new"} />
    ));
  } else {
    messageContent = <Message message="No Task found" />;
  }
  return (
    <Container width="md">
      <PageHeader title="Analytics" />
      <Card>
        <Card.CardBody padding="lg">
          {tasks?.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[25px]">
              {content}
            </div>
          ) : (
            <div className="py-[40px] relative">{messageContent}</div>
          )}
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default Dashboard;

import AnalyticsCard from "@/components/common/analyticsCard";
import Container from "@/components/common/container/Container";
import PageHeader from "@/components/common/pageHeader";
import { TaskCount } from "@/redux/features/tasks/task.models";
import { useTaskCountQuery } from "@/redux/features/tasks/taskApi";
import Card from "@/shared/ui/card";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";

const Dashboard = () => {
  const { data, error, isLoading } = useTaskCountQuery(undefined);
  const tasks = data?.data ?? [];
  let content = null;
  if (isLoading) {
    content = <Loader />;
  } else if (!isLoading && error) {
    const errorMessage =
      "data" in error && error.data && typeof error.data === "object"
        ? (error.data as { message?: string }).message || "Something went wrong"
        : "Something went wrong";

    content = <Message message={errorMessage} />;
  } else if (!isLoading && !error && tasks.length === 0) {
    content = <Message message="No Task found" />;
  } else if (!isLoading && !error && tasks.length > 0) {
    content = tasks.map((task: TaskCount) => (
      <AnalyticsCard key={task._id} count={task.count} _id={task._id || "new"} />
    ));
  } else {
    content = <Message message="No Task found" />;
  }
  return (
    <Container width="md">
      <PageHeader title="Analytics" />
      <Card>
        <Card.CardBody padding="lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[25px]">{content}</div>
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default Dashboard;

import Container from "@/components/common/container/Container";
import TaskCard from "@/components/common/taskCard/TaskCard";
import Card from "@/shared/ui/card";

const AllTask = () => {
  return (
    <Container width="md">
      
      <Card>
        <Card.CardBody padding="lg">
          <TaskCard title="demo" description="demo" status="new" />
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default AllTask;

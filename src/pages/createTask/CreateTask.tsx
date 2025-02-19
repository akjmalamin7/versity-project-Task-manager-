import Container from "@/components/common/container/Container"
import PageHeader from "@/components/common/pageHeader"
import CreateTaskForm from "@/components/pages/createTask"

const CreateTask = () => {
  return (
    <Container width="sm">
      <PageHeader title="Create task" />
      <CreateTaskForm/>
    </Container>
  )
}

export default CreateTask
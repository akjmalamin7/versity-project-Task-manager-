import Container from "@/components/common/container/Container"
import PageHeader from "@/components/common/pageHeader"
import UpdateTaskForm from "@/components/common/updateTaskForm"

const UpdateTask = () => {
  return (
    <Container width="sm">
        <PageHeader title="Update task" />
      <UpdateTaskForm/>
    </Container>
  )
}

export default UpdateTask
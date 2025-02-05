import { useDeleteTaskMutation } from "@/shared/redux/features/tasks/taskApi";
import Modal from "@/shared/ui/modal";
import Text from "@/shared/ui/text";
interface Props {
  getDeletedId?: string;
  onCancel: () => void;
}
const DeleteTask = ({ getDeletedId, onCancel }: Props) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const handleDelete = async () => {
    if (!getDeletedId) return; 
    try {
      await deleteTask(getDeletedId).unwrap();
      onCancel(); 
    } catch (err) {
      console.error(`Task deletion failed: ${err}`);
    }
  };

  return (
    <Modal
      title="Delete Task"
      submitButton="Delete"
      cancelButton="Cancel"
      loading={isLoading}
      disabled={isLoading}
      onOk={handleDelete}
      onCancel={onCancel}
    >
      <div className="py-[20px]">
        
        <Text color="white">Are you sure! Want to delete this <strong className="text-red-300">{getDeletedId}</strong> task!</Text>
      </div>
    </Modal>
  );
};

export default DeleteTask;

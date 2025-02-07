import { useDeleteTaskMutation } from "@/shared/redux/features/tasks/taskApi";
import Modal from "@/shared/ui/modal";
import Text from "@/shared/ui/text";
import { toast } from "react-toastify";
interface Props {
  title?:string;
  getDeletedId?: string;
  onCancel: () => void;
}
const DeleteTask = ({ getDeletedId,title, onCancel }: Props) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();
  const handleDelete = async () => {
    if (!getDeletedId) return; 
    try {
     const result =  await deleteTask(getDeletedId).unwrap();
     toast(result.message)
      onCancel(); 
    } catch (err) {
      console.error(`Task deletion failed: ${err}`);
    }
  };

  return (
    <Modal
      title={title}
      submitButton="Delete"
      cancelButton="Cancel"
      loading={isLoading}
      disabled={isLoading}
      onOk={handleDelete}
      onCancel={onCancel}
    >
      <div className="py-[20px]">
        
        <Text color="white">Are you sure! Want to delete this <strong className="text-red-300">{title}</strong> task!</Text>
      </div>
    </Modal>
  );
};

export default DeleteTask;

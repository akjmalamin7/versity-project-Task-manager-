import * as Yup from 'yup';

export const TASK_SCHEMA = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().optional(),
});
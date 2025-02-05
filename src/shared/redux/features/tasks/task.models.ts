export interface TaskModel{
  _id?:string;
  title:string;
  description:string;
  status?:string;
  createdDate?:string;
}
export interface TaskCount{
  _id:string;
  count:number;
}
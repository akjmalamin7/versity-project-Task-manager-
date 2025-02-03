export interface ProfileModels{
  firstName:string;
  lastName:string;
  email:string;
  mobile:string;
  photo?:string;
}
export interface ProfileData{
  data:ProfileModels[]
  message:string;
  status:string;
}
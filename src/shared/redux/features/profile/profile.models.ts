export interface UserSchema {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  photo?: string;  // `photo` কে optional করা হয়েছে
  password: string;
}
export interface ProfileModels{
  firstName:string;
  lastName:string;
  email:string;
  mobile:string;
  photo?:string;
  password:string;
}
export interface ProfileData{
  data:ProfileModels[]
  message:string;
  status:string;
}
export interface ProfileState {
  user:UserSchema | null
}
export const PROFILE_INITIAL_STATE:ProfileState ={
  user:{} as  UserSchema
}
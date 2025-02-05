export interface UserSchema {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  photo?: string;  // `photo` কে optional করা হয়েছে
  password: string;
}
export interface LoginData{
  email:string;
  password:string;
}
export interface AuthState{
  token:string | null;
  user: UserSchema | null
}
export const AUTH_INITIAL_STATE:AuthState = {
  token:null,
  user:{} as UserSchema
}
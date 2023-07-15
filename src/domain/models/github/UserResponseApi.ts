import { UserModel } from "./UserModel";

export interface  UsersResonseApi{
    total_count:number,
    incomplete_results:boolean,
    items:UserModel[],
}
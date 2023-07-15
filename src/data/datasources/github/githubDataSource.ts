import { UserModel } from "../../../domain/models/github/UserModel";
import { RepoModel } from "../../../domain/models/github/RepoModel";


export interface GithubDataSource{
    getUsers(name:string):Promise<UserModel[]>;
    getRepo(name:string):Promise<RepoModel[]>;
}
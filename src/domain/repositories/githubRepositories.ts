import { RepoModel } from './../models/github/RepoModel';
import { UserModel } from './../models/github/UserModel';


export interface githubRepositories{
    getUsers(name:string):Promise<UserModel[]>;
    getRepo(name:string):Promise<RepoModel[]>;
}
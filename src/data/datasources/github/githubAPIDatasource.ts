import { RepoModel } from './../../../domain/models/github/RepoModel';
import { UsersResonseApi } from '../../../domain/models/github/UserResponseApi';
import { GithubDataSource } from "./githubDataSource"
import {Http} from '../../../domain/services/http';

export class GithubApiDatasources implements GithubDataSource{
    async getUsers(name:string){
         const res = await Http.get<UsersResonseApi>(`search/users?q=${name}&page=1&per_page=5`)
         return res.data.items;
    }
    async getRepo(name:string){
        const res = await Http.get<RepoModel[]>(`users/${name}/repos`)
        return res.data
   }
}

 

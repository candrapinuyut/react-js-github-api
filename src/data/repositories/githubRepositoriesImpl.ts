import { RepoModel } from './../../domain/models/github/RepoModel';
import { GithubDataSource } from '../datasources/github/githubDataSource';
import { UserModel } from '../../domain/models/github/UserModel';
import { githubRepositories } from '../../domain/repositories/githubRepositories';

export class GithubRepositoriesImpl implements githubRepositories{
    datasources:GithubDataSource;

    constructor (datasources:GithubDataSource ){
        this.datasources = datasources;
    }
    async  getUsers(name:string): Promise<UserModel[]> {
        return await this.datasources.getUsers(name)
    }
    async getRepo(name:string): Promise<RepoModel[]> {
        return await this.datasources.getRepo(name)
    }
}
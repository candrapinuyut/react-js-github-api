import { GithubRepositoriesImpl } from '../../../data/repositories/githubRepositoriesImpl';
import { useQuery } from "@tanstack/react-query";
import { RepoModel } from '../../models/github/RepoModel';

export const useFetchGithubRepo = (repository: GithubRepositoriesImpl,name:string) => {
  const { data, isError,isFetched,isLoading,refetch } = useQuery<RepoModel[]>({
    queryKey: ["repo",name],
    queryFn: () => repository.getRepo(name),
    enabled:false,
  });

  //jika menggunakan parameter pencarian, gunakan isLoaing,jika tidak gunakan isFetching

  return {
    repo: data,
    isFetchGithubRepoLoading: isLoading,
    isFetchGithubRepoSuccess: isFetched,
    isFetchGithubRepoError: isError,
    refetch:refetch
  };
};
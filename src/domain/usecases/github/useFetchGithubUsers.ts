import { GithubRepositoriesImpl } from '../../../data/repositories/githubRepositoriesImpl';
import { useQuery } from "@tanstack/react-query";
import { UserModel } from '../../models/github/UserModel';

export const useFetchUsers = (repository: GithubRepositoriesImpl,name:string) => {
  const { data,isFetching, isError, isFetched,refetch } = useQuery<UserModel[]>({
    queryKey: ["users"],
    queryFn: () => repository.getUsers(name),
    enabled:false,
  });
  //jika menggunakan parameter pencarian, gunakan isLoading,jika tidak gunakan isFetching

  return {
    users: data,
    isFetchUsersLoading: isFetching,
    isFetchUsersSuccess: isFetched,
    isFetchUsersError: isError,
    refetch:refetch
  };
};
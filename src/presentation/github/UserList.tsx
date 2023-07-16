
 import { GithubRepositoriesImpl } from "../../data/repositories/githubRepositoriesImpl";
import { GithubApiDatasources } from "../../data/datasources/github/githubAPIDatasource";
import { useEffect } from "react";
import Icon from "../components/icons";
import UserRepo from "./usersRepo"; 
import { useFetchGithubRepo } from "../../domain/usecases/github/useFetchGithubRepo";
import Loading from "../components/Loading";
import {TypeUserListProps} from './types/UserListProps';

export function UserList(props:TypeUserListProps) {
    
    const {results,isOpenRepo,handleOpenRepo,name,isFetchUsersError,isFetchUsersLoading} = props;
  
    const {repo,isFetchGithubRepoLoading,refetch} =  useFetchGithubRepo(
        new GithubRepositoriesImpl(
          new GithubApiDatasources()
        ),isOpenRepo
    )
    useEffect(()=>{
        if(isOpenRepo){
            refetch()
        }
    },[isOpenRepo])

 
    return  name && (
        <>
            {
             !isFetchUsersLoading && results && results.length!=0 &&(
                 <div className='my-4'>Showing users of {name}</div>
             )
            }
            
            { isFetchUsersError && (<div>something error...</div>) }

            {
                !isFetchUsersLoading && results && name && results.length===0 && (
                <div className="w-full flex flex-row justify-end mt-2">
                    <div className="rounded p-4 bg-red-200 w-full">
                        <div className="flex flex-row justify-center">
                            <Icon name='face-frown' />
                            <span>
                                Sorry, the user you are looking for could not be found</span>
                        </div>
                    </div>
                </div>  
                )
            }
           { isFetchUsersLoading && (<div className="mt-2"><Loading/></div>)}
    
            {
            !isFetchUsersLoading  &&
            results?.map((e)=>(
              <>
                <div onClick={()=>handleOpenRepo(e.login)} className='items-group cursor-pointer  w-full'>
                <div className="border bg-slate-50 border-slate-80 shadow rounded-md p-4 w-full mb-2">
                        <div className="flex flex-row justify-between">
                            <span role='username' >{e.login}</span>
                            <Icon name={e.login!=isOpenRepo?'chevronDown':'chevronUp'} />
                        </div>
                    </div>
                </div>
                {
                     isOpenRepo==e.login && isFetchGithubRepoLoading?(
                        <>
                        <div className="w-full flex flex-row justify-end mt-2">
                            <div className="w-11/12">
                               <Loading />
                            </div>
                        </div>
                        </>
                    ):''
                }
               {
                    isOpenRepo==e.login && !isFetchGithubRepoLoading && repo && repo.length==0 && (
                        <div className="w-full flex flex-row justify-end mt-2">
                            <div className="rounded p-4 bg-red-200 w-11/12">
                                <div className="flex flex-col  items-end">
                                    <span>Sorry, this user doesn't have a repo</span>
                                </div>
                            </div>
                        </div>
                    )
                }
                
                {
                     isOpenRepo==e.login && !isFetchGithubRepoLoading ? 
                     repo && repo.length>0 && repo.map((row)=>(
                        <div className="flex flex-col items-end">
                             <UserRepo row={row} />
                        </div>
                    )):''
                }


               
          
                     
            
              </>
            ))
            } 
      
        </>
    )||(<div></div>)

}

import { useForm,SubmitHandler } from "react-hook-form";
import { GithubRepositoriesImpl } from "../../../data/repositories/githubRepositoriesImpl";
import { GithubApiDatasources } from "../../../data/datasources/github/githubAPIDatasource";
import { UserList } from "../../github/UserList"
import { useState } from "react";
import { useFetchUsers } from "../../../domain/usecases/github/useFetchGithubUsers";
 
type FormType = {
    name:string,
}
export function Github(){
    
    const { register, handleSubmit,watch, formState: { errors } } = useForm<FormType>(); 
    const [name,setName]=useState<string>('');
    const [isOpen,setIsOpen]= useState<string>('');

   const {users,isFetchUsersLoading,isFetchUsersSuccess,isFetchUsersError,refetch} =  useFetchUsers(
    new GithubRepositoriesImpl(
      new GithubApiDatasources
    ),watch('name')
   )
    const cariData:SubmitHandler<FormType> = (form:FormType):void=>{
        setName(form.name)
        refetch()
    }   
     
    const handleOpenRepo =(login:string):void=>
      setIsOpen((login===isOpen)?'':login)

    return(
        <>
         <div className="container mx-auto h-screen">
           <div className="w-full flex flex-row justify-center">
             <div className="form-control w-full p-4 md:w-8/12  lg:w-6/12  md:mt-4">
              <form  data-testid='main-form' onSubmit={handleSubmit(cariData)} className='w-full'>
                <div className="input-group w-full">
                  <input
                  data-testid='main-input'
                  disabled={isFetchUsersLoading?true:false}
                  type="text"
                 
                {...register('name',{
                    required:"please input of a github username",
                    maxLength:{
                      value:39,
                      message:'maximum of username lenghth is 39'
                    }
                  }
                 )}
                  placeholder="Search…" 


                  className="w-full input text-lg btn-md md:input-lg input-bordered input-info" />
                  <button 
                  data-testid='main-btn'
                  disabled={isFetchUsersLoading?true:false}
                  type='submit' className="btn bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-800  btn-md md:btn-lg btn-square">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                   
                </div>
          
                {
                  errors.name && (
                    <div data-testid='error' className="w-full mt-4 bg-red-200 p-2 text-red-600 rounded">
                      <p>{errors.name.message}</p>
                   </div>
                  )
                }
            
              </form>
         
              <UserList name={name} 
              results={users} 
              isFetchUsersLoading={isFetchUsersLoading}
              isFetchUsersSuccess={isFetchUsersSuccess}
              isFetchUsersError={isFetchUsersError}
              handleOpenRepo={handleOpenRepo}
              isOpenRepo={isOpen}
                />



             </div> 
           </div> 
        </div> 
  
        </>

    )
}
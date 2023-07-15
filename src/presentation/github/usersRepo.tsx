
const userRepo = (props:any) =>{
    return(
      <div className="border bg-slate-100 border-slate-200 shadow rounded-md p-4 w-11/12 mb-2">
        <div className='flex flex-row justify-between items-collapsed '>
              <div className='font-bold'>
                <span>{props.row.name}</span>  
              </div>
              <div className='flex flex-row items-center'>
                <span>{props.row.stargazers_count}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
            </div>
            <div className='text-start mt-2'>
              <p>
               {props.row.description}
            </p>
        </div>
      </div>
    )
}
export default userRepo;
type TypeUsers={
    login:string,
}
export interface TypeUserListProps{
    results:TypeUsers[]|undefined,
    name:string,
    isFetchUsersLoading:boolean,
    isFetchUsersSuccess:boolean,
    isFetchUsersError:boolean,
    handleOpenRepo:(name:string)=>void,
    isOpenRepo:string,
}
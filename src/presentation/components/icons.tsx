interface props {
    name:string,
}
const Icon =({name}:props)=>{
    const getIcon = () :string =>{
        let icons =[
            { name:'chevronUp',data:'M4.5 15.75l7.5-7.5 7.5 7.5'},
            { name:'chevronDown',data:'M19.5 8.25l-7.5 7.5-7.5-7.5'},
        ];
        const r:any= icons.find((e)=>e.name==name);
        return r.data;
    }
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={getIcon()} />
        </svg>
    )
}

export default Icon;
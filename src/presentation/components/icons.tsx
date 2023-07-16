interface props {
    name:string,
}
const Icon =({name}:props)=>{
    const getIcon = () :string =>{
        let icons =[
            { name:'chevronUp',data:'M4.5 15.75l7.5-7.5 7.5 7.5'},
            { name:'chevronDown',data:'M19.5 8.25l-7.5 7.5-7.5-7.5'},
            {name:'face-frown',data:'M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'}
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
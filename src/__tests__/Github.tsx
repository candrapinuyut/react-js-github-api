import axios from 'axios';
jest.mock('axios');

type RepoModel = {
    name:string,
    stargazers_count:number,
    description:string,
}
type UserModel = {
    login:string;
}

describe('api test',() => {
    it('Render the github page',()=>{
        const users:UserModel[]=[
            {login:'candrapinuyut'},
            {login:'candrapinuyut94'},
        ]
        const resp = {
            data:users,
        };
       //(axios.get as jest.Mock).mockResolvedValue(resp);
        (axios.get  as jest.Mock).mockImplementation(() => Promise.resolve(resp))

        let  user = axios.get('https://api.github.com/search/users?q=candrapin&page=1&per_page=5').then(resp => resp);
        return user.then(data =>{
           // expect(data).toEqual(users)
           expect(data).toEqual(resp)
        });
        
    })
    it('Render the github user repo',()=>{
  
        const repo:RepoModel[]=[
            {
                name:'algoritma',
                stargazers_count:1,
                description:'algoritma untuk melakukan  bypas terhadap kategori yang sama',
            },
            {
                name:'footbal-liga-info',
                stargazers_count:1,
                description:'algoritma untuk melakukan  bypas terhadap kategori yang sama',
            },
        ]
        const resp = {
            data:repo,
        };
       //(axios.get as jest.Mock).mockResolvedValue(resp);
        (axios.get  as jest.Mock).mockImplementation(() => Promise.resolve(resp))

        let  user = axios.get('https://api.github.com/users/candrapinuyut/repos').then(resp => resp);
        return user.then(data =>{
           // expect(data).toEqual(users)
           expect(data).toEqual(resp)
        });
        
    })
})
const nameNationalizeResponse = [
    {login:'candrapinuyut'},
    {login:'candrapinuyut94'},
]
  
  export default async function GetUsername(url:any) {
    if(url.startsWith('https://api.nationalize.io')) {
      return {
        ok: true,
        status: 200,
        json: async () => nameNationalizeResponse,
      };
    }
  
    throw new Error(`Unhandled request: ${url}`);
  }
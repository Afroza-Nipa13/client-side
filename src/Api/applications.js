export const myApplicationsPromise =(email,accessToken)=> { 
    
return fetch(`https://server-side-lake.vercel.app/applications?email=${email}`,{

    headers:{
        authorization:`Bearer ${accessToken}`
    }
}
).then(res=>res.json())}
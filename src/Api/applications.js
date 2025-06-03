export const myApplicationsPromise =(email,accessToken)=> { 
    
return fetch(`https://server-side-iscf44ope-afrozanipas-projects.vercel.app/applications?email=${email}`,{

    headers:{
        authorization:`Bearer ${accessToken}`
    }
}
).then(res=>res.json())}
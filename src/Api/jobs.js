import useAxiosToken from "../Hooks/useAxiosToken"

export const MyJobsPromise=(email,accessToken) =>{
    const axiosToken = useAxiosToken();
    console.log(axiosToken)
    return fetch(`https://server-side-lake.vercel.app/jobs/applications?email=${email}`,{
        headers: {
            authorization:`Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}
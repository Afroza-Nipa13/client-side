
import {
  createBrowserRouter,
  
} from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/jobdetails/JobDetails";
import JobApply from "../Pages/Jobapply/JobApply";
import PrivetProvider from "../Provider/PrivetProvider";
import MyApplications from "../Pages/My Application/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children:[
        { index:true, Component:Home },
        { path:'/register', Component:Register},
        { path:'/signin', Component:SignIn},
        { path:'/jobs/:id',
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
          Component:JobDetails},
          { path:'/jobapply/:id', element:<PrivetProvider>
            <JobApply></JobApply>
            </PrivetProvider>},
        { path:'/myApplications', element:<PrivetProvider>
          <MyApplications></MyApplications></PrivetProvider> },
          {

            path:'/addJob', element:<PrivetProvider>
              <AddJob></AddJob>
            </PrivetProvider>
          }
    ]
  },
]);



export default router;
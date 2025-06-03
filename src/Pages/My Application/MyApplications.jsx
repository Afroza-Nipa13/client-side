import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import Loading from '../Loader/Loading';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../Api/useApplicationApi';


const MyApplications = () => {
    const {user} = useAuth();
    const {myApplicationsPromise} = useApplicationApi()
    console.log('myapplication promise', myApplicationsPromise)
    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user?.email)}
                ></ApplicationList>

            </Suspense>
        </div>
    );
};

export default MyApplications;
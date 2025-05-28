import React, { Suspense } from 'react';
import ApplicationState from './ApplicationState';
import ApplicationList from './ApplicationList';
import Loading from '../Loader/Loading';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../Api/applications';

const MyApplications = () => {
    const {user} = useAuth();
    return (
        <div>
            <ApplicationState></ApplicationState>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user.email)}
                ></ApplicationList>

            </Suspense>
        </div>
    );
};

export default MyApplications;
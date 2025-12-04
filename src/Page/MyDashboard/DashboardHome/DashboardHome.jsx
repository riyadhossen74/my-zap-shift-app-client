import React from 'react';
import useRole from '../../../hook/useRole';
import Loader from '../../../Loader/Loader';
import AdminDashborad from '../AdminDashborad/AdminDashborad';
import RiderDashboard from '../RiderDashboard/RiderDashboard';
import UserDashborad from '../UserDashborad/UserDashborad';

const DashboardHome = () => {
    const {role, isLoading} = useRole()
    
    if(isLoading) {
        return <Loader></Loader>
    }
    if(role === 'admin'){
        return <AdminDashborad></AdminDashborad>
    } else if(role === 'rider'){
        return <RiderDashboard></RiderDashboard>
    }else{
        return <UserDashborad></UserDashborad>
    }

    
};

export default DashboardHome;
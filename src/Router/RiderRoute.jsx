import React from 'react';
import useRole from '../hook/useRole';
import useAuth from '../hook/useAuth';
import Loader from '../Loader/Loader';
import ForbiddenPage from '../ForbiddenPage/ForbiddenPage';

const RiderRoute = ({children}) => {
    const { role, isLoading } = useRole();
  const { loading } = useAuth();

  if (loading || isLoading) {
    return <Loader></Loader>;
  }
  if (role !== "rider") {
    return <ForbiddenPage></ForbiddenPage>;
  }

  return children;
};

export default RiderRoute;
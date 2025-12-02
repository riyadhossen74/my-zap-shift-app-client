import React from 'react';
import useAuth from '../../../hook/useAuth';
import useSecureAxios from '../../../hook/useSecureAxios';
import { useQuery } from '@tanstack/react-query';

const CompliedDeliveries = () => {
     const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const { data: parcels = [],  } = useQuery({
    queryKey: ["parcels", user.email, "driver_assign"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });
  const handlePayOut = parcel =>{
    if(parcel.senderDistrict === parcel.receiverDistrict){
        return parcel.cost * 0.8
    }else{
        return parcel.cost * 0.6
    }
  }
  console.log(parcels)
    return (
        <div>
            <h1>task complied{parcels.length}</h1>
             <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{handlePayOut(parcel)}</td>
                <td>
                  <button
                    // onClick={() => handleRiderOpenModal(parcel)}
                    className="bg-primary btn"
                  >
                    Pay out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default CompliedDeliveries;
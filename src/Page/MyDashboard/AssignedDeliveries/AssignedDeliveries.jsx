import React from "react";
import useAuth from "../../../hook/useAuth";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { data } from "react-router";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver-assign"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver-assign`
      );
      return res.data;
    },
  });
  console.log(parcels);
  const handleDelivery = (parcel) => {
    const statusInfo = { deliveryStatus: "rider-arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch()
          Swal.fire({
            title: "Success!",
            text: "Rider assigned successfully.",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h1>Assigned Deliveries{parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td className="flex gap-3.5">
                  <button
                    onClick={() => handleDelivery(parcel)}
                    className="btn btn-primary text-black"
                  >
                    Accept
                  </button>
                  <button className="btn btn-warning text-black">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;

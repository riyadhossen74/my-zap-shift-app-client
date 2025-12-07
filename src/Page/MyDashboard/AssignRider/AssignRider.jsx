import React, { useRef, useState } from "react";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";

const AssignRider = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const RiderRef = useRef();
  const axiosSecure = useSecureAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcel", "pending_pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });
console.log(parcels)
  const { data: rider = [], refetch: riderRefetch } = useQuery({
    queryKey: ["parcel", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`
      );
      return res.data;
    },
  });

  const handleRiderOpenModal = (parcel) => {
    console.log(parcel.senderDistrict);
    setSelectedParcel(parcel);
    RiderRef.current.showModal();
  };

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.email,
      riderName: rider.name,
      parcelId: selectedParcel._id,
      trackingId: selectedParcel.trackingId
    };
    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)

      .then((res) => {
        console.log(selectedParcel._id);
        console.log(res.data);
        if (res.data.modifiedCount) {
          RiderRef.current.close();
          refetch();
          riderRefetch()
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
      <h1 className="text-3xl my-10 text-center">
        assign a rider {parcels.length}{" "}
      </h1>
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
                <td>{parcel.senderDistrict}</td>
                <td>
                  <button
                    onClick={() => handleRiderOpenModal(parcel)}
                    className="bg-primary btn"
                  >
                    Find Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog ref={RiderRef} className="modal">
        <div className="modal-box">
          <h2>Rider {rider.length}</h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rider.map((assign, index) => (
                  <tr key={assign._id}>
                    <th>{index + 1}</th>
                    <td>{assign.name}</td>
                    <td>{assign.email}</td>
                    <td>
                      <button
                        onClick={() => handleAssignRider(assign)}
                        className=" btn btn-primary text-black"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRider;

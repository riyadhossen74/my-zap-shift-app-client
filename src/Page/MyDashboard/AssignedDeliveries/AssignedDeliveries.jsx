import React from "react";
import useAuth from "../../../hook/useAuth";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assign"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assign`
      );
      return res.data;
    },
  });
  console.log(parcels);
  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId,
    };
    const message = `parcel status update ${status.split("_").join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: message,
            icon: "success",
          });
        }
      });
  };

  //  const handleReject = (parcel) => {
  //   const statusInfo = { deliveryStatus: "pending-pickup" };
  //   axiosSecure
  //     .patch(`/parcels/${parcel._id}/status`, statusInfo)
  //     .then((res) => {
  //       if (res.data.modifiedCount) {
  //         refetch()
  //         Swal.fire({
  //           title: "Success!",
  //           text: "Rider rejected successfully.",
  //           icon: "success",
  //         });
  //       }
  //     });
  // };
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
              <th>Other Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver_assign" ? (
                    <>
                      <button
                        onClick={() =>
                          handleDeliveryStatusUpdate(parcel, "rider_arriving")
                        }
                        className="btn btn-primary mx-3.5 text-black"
                      >
                        Accept
                      </button>
                      <button
                        //  onClick={() => handleReject(parcel)}
                        className="btn btn-warning text-black"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <button
                      disabled
                      className="btn disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Confirmed
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_pickup")
                    }
                    className="btn btn-primary text-black"
                  >
                    Mark as Pickup
                  </button>
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="btn btn-primary mx-3.5 text-black"
                  >
                    Mark as delivered
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

export default AssignedDeliveries;

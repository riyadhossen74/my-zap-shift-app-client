import React from "react";
import useAuth from "../../hook/useAuth";
import useSecureAxios from "../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useSecureAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data ui
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  //  payment
  const handlePayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      SenderEmail: parcel.SenderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.assign(res.data.url);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>ParcelName</th>
              <th>Cost</th>
              <th>Payment status</th>
              <th>develavary status</th>
              <th>TrackingId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <button className="btn bg-green-700 btn-xs">paid</button>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-primary btn-xs text-black"
                    >
                      pay
                    </button>
                  )}
                </td>
                <td className="text-green-900">{parcel.deliveryStatus}</td>
                <td>
                  <Link to={`/parcel-track/${parcel.trackingId}`}>
                    {parcel.trackingId}
                  </Link>
                </td>
                <th>
                  <button className="btn btn-square hover:bg-primary">
                    <FaEdit></FaEdit>
                  </button>
                  <button className="btn btn-square mx-2 hover:bg-primary">
                    <IoIosEye />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <BsTrash3 />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;

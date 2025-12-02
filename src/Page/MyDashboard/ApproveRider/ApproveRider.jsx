import React from "react";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import { FaUserLargeSlash } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRider = () => {
  const axiosSecure = useSecureAxios();
  const { data: rider = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const upadtestatus = (rider, status) => {
    const updateInfo = {
      status: status,
      email: rider.email
    };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider has been ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    upadtestatus(rider, "approved");
  };
  const handlerejeced = (rider) => {
    upadtestatus(rider, "rejected");
  };

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
          axiosSecure.delete(`/riders/${id}`).then((res) => {
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Riders ({rider.length})</h2>

      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>

              <th className="p-3 border">Region</th>
              <th className="p-3 border">District</th>
              <th className="p-3 border">Bike</th>
              <th className="p-3 border">Application Status</th>
              <th className="p-3 border">Work Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {rider.map((rider, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border">{rider.name}</td>
                <td className="p-3 border">{rider.email}</td>

                <td className="p-3 border">{rider.riderRegion}</td>
                <td className="p-3 border">{rider.RiderDistrict}</td>
                <td className="p-3 border">
                  {rider.bikeModelYear}
                  <br />
                  <span className="text-sm text-gray-500">
                    {rider.bikeRegistrationNumber}
                  </span>
                </td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                      rider.status === "pending"
                        ? "bg-yellow-500"
                        : rider.status === "approved"
                        ? "bg-green-600"
                        : rider.status === "rejected"
                        ? "bg-red-600"
                        : "bg-gray-500" 
                    }`}
                  >
                    {rider.status}
                  </span>
                </td>
                <td className="p-3 border">
                  <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                      rider.workStatus === "available"
                        ? "bg-yellow-500"
                        : rider.status === "approved"
                        ? "bg-green-600"
                        : rider.status === "rejected"
                        ? "bg-red-600"
                        : "bg-gray-500" 
                    }`}
                  >
                    {rider.workStatus}
                  </span>
                </td>
                <td className="p-3 border">
                  <button
                  onClick={()=>handlerejeced(rider)}
                  className="btn ">
                    <FaUserLargeSlash />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn mx-5"
                  >
                    <FaUser />
                  </button>
                  <button onClick={()=>handleParcelDelete(rider._id)} className="btn">
                    <FaTrashAlt />
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

export default ApproveRider;

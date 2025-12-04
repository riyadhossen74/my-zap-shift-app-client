import { useQuery } from "@tanstack/react-query";
import React from "react";
import { data, useParams } from "react-router";
import useAxios from "../../../../hook/useAxios";

const TrackingParcel = () => {
  const { trackingId } = useParams();
  const axiosBase = useAxios();
  const { data: trackings = [] } = useQuery({
    queryKey: ["trackings", trackingId],
    queryFn: async () => {
      const res = await axiosBase.get(`/trackings/${trackingId}/logs`);
      return res.data;
    },
  });
  return (
   <div className="max-w-4xl mx-auto my-10 px-4">
  <h2 className="text-4xl font-bold text-center mb-6">Tracking ID: {trackingId}</h2>
  <p className="text-center text-gray-600 mb-8">Total logs: {trackings.length}</p>

  <div className="relative border-l-2 border-gray-300 ml-4">
    {trackings.map((track, ) => (
      <div key={track._id} className="mb-8 ml-6 relative">
        {/* Dot */}
        <span className="absolute -left-5 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></span>

        {/* Time */}
        <time className="text-sm text-gray-500">
          {new Date(track.createAt).toLocaleString()}
        </time>

        {/* Log Box */}
        <div className="mt-1 p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition">
          <p className="text-gray-800 font-medium">{track.details}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default TrackingParcel;

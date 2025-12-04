import React from "react";
import useSecureAxios from "../../../hook/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { Legend, Pie, PieChart, Tooltip } from "recharts";


const AdminDashborad = () => {
    const AxiosSucre = useSecureAxios()
    const {data: status = []} = useQuery ({
        queryKey: ['parcels-status-stats'],
        queryFn:async () => {
            const res = await AxiosSucre.get('/parcels/delivery-status/stats')
            return res.data
        }
    })
    const getPieChartData = data => {
        return data.map(item => {
           return { name: item.status, value: item.count}
        })
    }
  return (
  <div className="p-6 bg-gray-50 min-h-screen">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {status.map((stats) => (
      <div
        key={stats._id}
        className="bg-white shadow-lg rounded-xl p-5 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300"
      >
        {/* Icon */}
        <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-8 w-8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="text-gray-500 text-sm font-medium">{stats._id || "Unknown"}</div>

        {/* Count */}
        <div className="text-3xl font-bold text-gray-900 mt-1">{stats.count}</div>

        {/* Description */}
        <div className="text-gray-400 text-xs mt-2">Jan 1st - Feb 1st</div>
      </div>
    ))}
  </div>
 <div className="w-full h-full">
     <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={getPieChartData(status)}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
 </div>
</div>

  );
};

export default AdminDashborad;

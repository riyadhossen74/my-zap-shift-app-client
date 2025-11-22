import React from 'react';
import useSecureAxios from '../../../../hook/useSecureAxios';
import useAuth from '../../../../hook/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../Loader/Loader';

const PaymentHistory = () => {
    const axiosSecure = useSecureAxios()
    const {user} = useAuth()
    const {isLoading, data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?eamil=${user.email}`)
            return res.data
        }
    })
    if(isLoading) return <Loader></Loader>
       return (
       <div className="p-10 container mx-auto ">
<h2 className="text-3xl font-bold mb-6 text-gray-800">Payment History</h2>
<div className="bg-white rounded-2xl p-10 px-20  shadow-sm overflow-hidden ">
<table className="w-full text-left ">
<thead className="bg-gray-100 text-gray-700">
<tr>
<th className="p-4">Parcel Info</th>
<th className="p-4">Recipient Info</th>
<th className="p-4">Tracking Number</th>
<th className="p-4">Payment Info</th>
<th className="p-4">Action</th>
</tr>
</thead>


<tbody>
{payments?.map((item, index) => (
<tr
key={index}
className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
>
<td className="p-4 font-medium text-gray-800">
{item.parcelName || "Liquid Cleanser"}
</td>


<td className="p-4 text-gray-700">
<p className="font-semibold">{item.recipientName}</p>
<p>{item.name}</p>
<p>{item.recipientPhone}</p>
</td>


<td className="p-4 text-gray-700">{item.trackingId}</td>


<td className="p-4 text-gray-700">
৳ {item.amount} ({item.paymentStatus})
</td>


<td className="p-4">
<button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition font-medium text-gray-800">
View
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

export default PaymentHistory;
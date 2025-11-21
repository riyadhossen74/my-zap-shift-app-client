import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { BsSkipBackward } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useSecureAxios from "../../hook/useSecureAxios";
import useAuth from "../../hook/useAuth";

const Parcel = () => {
  const serviceCenter = useLoaderData();
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const duplicetRegion = serviceCenter.map((c) => c.region);
  const region = [...new Set(duplicetRegion)];
  console.log(region);
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByDistricts = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleParcelSubmit = (data) => {
    const isDocument = data.parcelType === "document";

    const isSameDistricts = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistricts ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistricts ? 110 : 150;
      } else {
        const minCharge = isSameDistricts ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistricts
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to ${cost} taka pay!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmed",
    }).then((result) => {
      if (result.isConfirmed) {
       
        // data base post
        axiosSecure
          .post("/parcels", data)
          .then((res) => {
            console.log("after post data in parcels", res.data);
            if (res.data.insertedId) {
               navigate('/dashboard/my-parcels')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your parcel has done payment now",
            showConfirmButton: false,
            timer: 1500,
          });
        }
          })
          .catch((error) => {
            console.log(error);
          });

        
      }
    });
    console.log("cost", cost, data);
  };

  return (
    <div className=" py-10 px-5">
      <div className="container mx-auto bg-white shadow-md rounded-3xl p-10 border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#03373D] mb-2">Add Parcel</h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6">Enter your parcel details</p>

        <form onSubmit={handleSubmit(handleParcelSubmit)}>
          {/* Document / Non-Document */}
          <div className="flex items-center gap-10 mb-10">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                value={"document"}
                type="radio"
                {...register("parcelType")}
                defaultChecked
              />
              Document
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                value={"Not-Document"}
                type="radio"
                {...register("parcelType")}
              />
              Not-Document
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="block mb-1 text-gray-600">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="w-full border rounded-lg px-4 py-2 border-gray-200"
                {...register("parcelName")}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className="w-full border rounded-lg px-4 py-2 border-gray-200"
                {...register("parcelWeight")}
              />
            </div>
          </div>

          {/* Sender & Receiver Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sender Details */}
            <div>
              <h2 className="text-xl font-semibold text-[#03373D] mb-4">
                Sender Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sender Name */}
                <div>
                  <label className="block mb-1 text-gray-600">
                    Sender Name
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Sender Name"
                    {...register("SenderName")}
                    defaultValue={user?.displayName}
                  />
                </div>
                {/* Sender Pickup Wire House */}
                <div>
                  <label className="block mb-1 text-gray-600">
                    Sender Pickup Wire House
                  </label>
                  <select
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("SenderWarehouse")}
                  >
                    <option>Select Wire House</option>
                    <option>Select Wire House2</option>
                    <option>Select Wire House3</option>
                  </select>
                </div>
                {/* Sender Address */}
                <div>
                  <label className="block mb-1 text-gray-600">Address</label>
                  <input
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Address"
                    {...register("SenderAddress")}
                  />
                </div>
                {/* Sender Email */}
                <div>
                  <label className="block mb-1 text-gray-600">
                    Sender Email
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    type="email"
                    placeholder="Sender Email"
                    {...register("SenderEmail")}
                    defaultValue={user?.email}
                  />
                </div>
                {/* Sender Region*/}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Your Region
                  </label>
                  <select
                    defaultValue="Select your region"
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("senderRegion")}
                  >
                    <option disabled={true}>Select your region</option>
                    {region.map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Sender District*/}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Your District
                  </label>
                  <select
                    defaultValue="Select your District"
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("senderDistrict")}
                  >
                    <option disabled={true}>Select your District</option>
                    {districtsByDistricts(senderRegion).map((d, index) => (
                      <option key={index} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Pickup Instruction */}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Pickup Instruction
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Pickup Instruction"
                    {...register("senderPickupInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h2 className="text-xl font-semibold text-[#03373D] mb-4">
                Receiver Details
              </h2>
              {/* Receiver Name*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-gray-600">
                    Receiver Name
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Receiver Name"
                    {...register("receiverName")}
                  />
                </div>
                {/* Receiver Delivery Wire House */}
                <div>
                  <label className="block mb-1 text-gray-600">
                    Receiver Delivery Wire House
                  </label>
                  <select
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("receiverWireHouse")}
                  >
                    <option>Select Wire House</option>
                    <option>Select Wire House1</option>
                    <option>Select Wire House2</option>
                  </select>
                </div>
                {/* Receiver Address*/}
                <div>
                  <label className="block mb-1 text-gray-600">
                    Receiver Address
                  </label>
                  <input
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Address"
                    {...register("receiverAddress")}
                  />
                </div>
                {/* Receiver Email No */}
                <div>
                  <label className=" block mb-1 text-gray-600">
                    Receiver Email No
                  </label>
                  <input
                    className="w-full  border rounded-lg px-4 py-2 border-gray-200"
                    type="email"
                    placeholder="Receiver  Email"
                    {...register("receiverEmail")}
                  />
                </div>
                {/* Receiver Region*/}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Receiver Region
                  </label>
                  <select
                    defaultValue="Select your region"
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("receiverRegion")}
                  >
                    <option disabled={true}>Select your region</option>
                    {region.map((r, index) => (
                      <option key={index} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Receiver District*/}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Receiver District
                  </label>
                  <select
                    defaultValue="Select your District"
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    {...register("receiverDistrict")}
                  >
                    <option disabled={true}>Select your District</option>
                    {districtsByDistricts(receiverRegion).map((d, index) => (
                      <option key={index} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Receiver  Delivery Instruction*/}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-600">
                    Delivery Instruction
                  </label>
                  <textarea
                    className="w-full border rounded-lg px-4 py-2 border-gray-200"
                    placeholder="Delivery Instruction"
                    {...register("receiverDeliveryInstruction")}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup time note */}
          <p className="mt-8 text-gray-500 text-sm">
            * PickUp Time 4pm–7pm Approx.
          </p>

          {/* Submit Button */}
          <button className="mt-6 bg-[#A5D63F] px-6 py-3 rounded-lg font-semibold text-[#03373D]">
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Parcel;

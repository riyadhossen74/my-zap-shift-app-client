import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const { userName, review: card, user_photoURL } = review;
  return (
    <div className="flex justify-center items-center p-6  ">
      {/* Clean Card Component */}
      <div className="card w-full max-w-lg bg-white rounded-2xl border border-gray-200 p-8">
        {/* Quote Section */}
        <div className="card-body p-0">
          <div className="text-6xl text-blue-200  mb-6">
            <FaQuoteLeft />
          </div>

          <p className="text-lg text-gray-700 italic mb-6">{card}</p>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-6"></div>

          {/* Author Info */}
          <div className="flex items-center mt-4">
            {/* Avatar */}

            <img
              className="w-14 h-14 bg-teal-600 rounded-full mr-4 flex items-center justify-center text-white text-xl font-bold"
              src={user_photoURL}
              alt=""
            />

            <div>
              <p className="text-xl font-semibold text-gray-900 leading-tight">
                {userName}
              </p>
              <p className="text-base text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;

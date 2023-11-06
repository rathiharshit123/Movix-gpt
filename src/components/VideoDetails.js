import React from "react";

const VideoDetails = ({ movieTitle, movieOverview }) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{movieTitle}</h1>
            <p className="text-lg py-6 w-1/4">{movieOverview}</p>
            <div className="flex">
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">▶ Play</button>

            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">More Info</button>

            </div>
        </div>
    );
};

export default VideoDetails;

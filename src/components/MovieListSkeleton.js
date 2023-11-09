import React from "react";
import ImageSkeleton from "./ImageSkeleton";

const MovieListSkeleton = () => {
    return (
        <div className="flex m-6 justify-between">
            <ImageSkeleton/>
            <ImageSkeleton/>
            <ImageSkeleton/>
            <ImageSkeleton/>
            <ImageSkeleton/>
            <ImageSkeleton/>
            
            
        </div>
    );
};

export default MovieListSkeleton;

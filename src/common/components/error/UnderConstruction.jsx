import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import underconstruction from './../../../assets/underconstruction.png';
export const UnderConstruction = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="text-green-500 opacity-50">UNDER CONSTRUCTION</div>
                <img className="mb-5 max-w-[558px]" src={ underconstruction } alt="" />
                <button className="bg-green-500 text-white px-4 py-2">Back</button>
            </div>
        </>
    );
};

import React from 'react';
import loader from './../../assets/loader.png'
export const Loader = () => {
    return (
        <>
            <div className="bg-white absolute w-screen h-screen flex justify-center items-center">
               <img className="animate-spin" src={loader} alt="" />
            </div>
        </>
    );
};

import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from './../../assets/loader.png'
export const Loader = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white absolute w-screen h-screen flex justify-center items-center">
               <img className="animate-spin" src={loader} alt="" />
            </div>
        </>
    );
};

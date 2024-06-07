import React, { useEffect } from 'react'
import DotLoader from "react-spinners/DotLoader";
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Transfer = () => {

    



    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 10000);
    })

    setTimeout(()=>{
        window.location.replace("/dashboard")
    }, 5000)

    return (

        <>
        <div className='bg-slate-200 h-screen'>
        <div className='flex h-96 items-center justify-center '>
                <div className=''>
                    <DotLoader
                        color={"#d63636"}
                        loading={loading}

                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
            <div className='ml-3 md:ml-64'>
            <h1 className=" font-bold text-3xl">PLEASE WAIT FOR YOUR TRANSACTION TO COMPLETE.....</h1>
            </div>
        </div>
           

        </>


    )
}

export default Transfer
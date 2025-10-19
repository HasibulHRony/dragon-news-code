import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>FindUs</h2>
            <div className=''>
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 justify-start  join-item"><FaFacebook></FaFacebook>Facebook </button>
                    <button className="btn bg-base-100 justify-start  join-item"><FaTwitter></FaTwitter>Tweeter</button>
                    <button className="btn bg-base-100 justify-start  join-item"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    )
}

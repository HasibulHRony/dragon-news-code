import React from 'react'
import swimmingImg from '../../assets/swimming.png'
import classRoom from '../../assets/class.png'
import playImg from '../../assets/playground.png'

export const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div>
                <img src={swimmingImg} alt="" />
                <img src={classRoom} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    )
}

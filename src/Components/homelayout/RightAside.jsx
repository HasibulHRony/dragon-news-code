import React from 'react'
import { SocialLogin } from './SocialLogin'
import { FindUs } from '../FindUs/FindUs'
import { Qzone } from '../Qzone/Qzone'

export const RightAside = () => {
  return (
    <div className='space-y-5'>
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Qzone></Qzone>
    </div>
  )
}

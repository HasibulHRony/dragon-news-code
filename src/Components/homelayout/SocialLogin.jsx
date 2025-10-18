import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>LogIn With</h2>
            <div className='space-y-3 mt-3'>
                <button className='btn btn-outline btn-secondary w-full'>Login With google <FcGoogle className='h-6 w-6'/></button>
                <button className='btn btn-outline btn-primary w-full'>Login With github <FaGithub className='h-6 w-6' /></button>
            </div>
        </div>
    )
}

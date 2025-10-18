import React from 'react'
import { useParams } from 'react-router'

export const CategoryNews = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>CategoryNews - {id}</div>
    )
}

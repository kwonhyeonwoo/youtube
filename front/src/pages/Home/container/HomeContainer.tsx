import React from 'react'
import Home from '../Home'
import { useGetUserProfileQuery } from '../../../api/tokenVerify-api'

const HomeContainer = () => {
    const { data } = useGetUserProfileQuery(undefined);
    console.log('data', data)
    return (
        <Home />
    )
}

export default HomeContainer
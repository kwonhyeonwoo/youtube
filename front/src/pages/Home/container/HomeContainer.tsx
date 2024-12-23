import React, { useEffect } from 'react'
import Home from '../Home'
import { useGetUserProfileQuery } from '../../../api/tokenVerify-api'
import { useDispatch } from 'react-redux';
import { SetUser } from '../../../store/auth/auth';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const { data } = useGetUserProfileQuery(undefined);
    useEffect(() => {
        if(data){
            dispatch(SetUser(data))
        }
    }, [data]);
    return (
        <Home />
    )
}

export default HomeContainer
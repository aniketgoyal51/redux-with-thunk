import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailSelector, userThunk } from '../redux/reducer'

function Display() {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(userThunk())
    },[])

    const userDetail= useSelector(detailSelector)

    return (
        <div>
            {userDetail.map((item,index)=>{
                return <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <hr />
                </div>
            })}
        </div>
    )
}

export default Display

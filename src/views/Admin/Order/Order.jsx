import React from 'react'
import OrderSearch from './OrderSearch'
import { FiberManualRecordRounded } from '@mui/icons-material'

const Order = () => {
    return (
        <div>
            <OrderSearch />
            <div className='grid grid-cols-2 p-3 mt-5'>
                <div className='shadow-md p-3'>
                    <div>
                        <FiberManualRecordRounded sx={{ fontSize: 13 }} className='text-green-500' />  <span className='text-gray-700 text-xs'>On route</span>
                        {/* <FiberManualRecordRounded sx={{ fontSize: 13 }} className='text-yellow-500' />  <span className='text-gray-700 text-xs'>Pending</span> */}
                        {/* <FiberManualRecordRounded sx={{ fontSize: 13 }} className='text-red-500' />  <span className='text-gray-700 text-xs'>Decline</span> */}
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Order

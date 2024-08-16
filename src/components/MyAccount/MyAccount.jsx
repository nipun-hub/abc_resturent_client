import React, { useContext, useState } from 'react'
import Drawer from '../Drawer/Drawer'
import { Close, Person } from '@mui/icons-material'
import { StoreContext } from '../../context/StoreContext'

const MyAccount = ({ isOpen, setIsOpen }) => {

    const { token, updateToken } = useContext(StoreContext);
    const [activeNav, setactiveNav] = useState('account')

    return (
        <div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='mt-10 mx-8 flex flex-col h-full '>
                    <h2 className='text-2xl text-center'><Person /> My Account</h2>
                    <hr className='w-full my-4' />
                    <h2 className='text-1xl text-center'>Hello {token.name}</h2>
                    <div className='grid grid-cols-3 mt-2 '>
                        <button
                            className={`m-2 text-white rounded-full py-1 px-3 ${activeNav == 'account' ? 'bg-red-500 hover:bg-red-400' : 'bg-gray-500 hover:bg-gray-300'}`}
                            onClick={() => setactiveNav('account')}>
                            Account
                        </button>
                        <button
                            className={`m-2 text-white rounded-full py-1 px-3 ${activeNav == 'history' ? 'bg-red-500 hover:bg-red-400' : 'bg-gray-400 hover:bg-gray-300'}`}
                            onClick={() => setactiveNav('history')}>
                            Order
                        </button>
                        <button
                            className={`m-2 text-white rounded-full py-1 px-3 ${activeNav == 'logout' ? 'bg-red-500 hover:bg-red-400' : 'bg-gray-400 hover:bg-gray-300'}`}
                            onClick={() => setactiveNav('logout')}>
                            Logout
                        </button>
                    </div>

                    {activeNav == "account" &&
                        <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                            <p className='text-xl font-semibold text-gray-300'>Account Details</p>
                            <div className='flex flex-col gap-5 px-10 my-3 w-full'>
                                <input type="text" placeholder='User name' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="email" placeholder='Email' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="tel" placeholder='mobile' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <input type="text" placeholder='Address' className='border-2 border-gray-200 rounded px-2 py-1 text-sm focus:outline-gray-300' />
                                <button className='bg-red-800 rounded text-white hover:bg-red-700 w-full h-10'>Save</button>
                            </div>
                        </div>
                    }

                    {activeNav == "history" &&
                        <div>
                            <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                                <p className='text-xl font-semibold text-gray-300'>Previous Orderss</p>
                                <div>
                                    <p>No Orders</p>
                                </div>
                            </div>
                        </div>
                    }

                    {activeNav == "logout" &&
                        updateToken('token', '')
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default MyAccount

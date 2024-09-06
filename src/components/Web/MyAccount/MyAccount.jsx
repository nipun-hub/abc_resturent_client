import React, { useContext, useEffect, useState } from 'react'
import { Close, LogoutRounded, Person, SearchOffRounded, Subject } from '@mui/icons-material'
import Drawer from '../../Common/Drawer/Drawer'
import { StoreContext } from '../../../context/StoreContext';
import ConformDelete from './ConformDelete';
import toast from 'react-hot-toast';
import { Button, ButtonGroup, Input, Tab, Tabs, TabsHeader, Textarea } from '@material-tailwind/react'
import { IconButton, Tooltip, Typography } from '@mui/material';
import { getUserId } from '../../../utils/Common/Notification';
import { createInquiry, getAllInquiryById } from '../../../services/Common/CommonService';
import { getAllOrderById } from '../../../services/web/WebService,jsx';

const MyAccount = ({ isOpen, setIsOpen }) => {

    const { token, resetToken } = useContext(StoreContext);
    const [activeNav, setActiveNav] = useState('Account')
    const [confirm, setConfirm] = useState(false)
    const [rerender, setRerender] = useState(false)

    const [inquiryList, setInquireList] = useState([])

    useEffect(() => {
        const userId = getUserId();
        getAllInquiryById(userId)
            .then(response => {
                setInquireList(response.content)
            })
    }, [rerender, isOpen])

    const [inquiry, setInquiry] = useState({
        subject: '',
        message: '',
    })

    const updateInquiry = (name, value) => {
        setInquiry(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        getAllOrderById(getUserId())
            .then(response => {
                console.log(response)
            })
    }, [])

    const handelOnSubmit = (e) => {
        e.preventDefault();
        const data = {
            "subject": inquiry.subject,
            "message": inquiry.message,
            "user": {
                "id": getUserId(),
            }
        }
        createInquiry(data)
            .then(response => {
                console.log(response)
                setRerender(prev => !prev)
            })
    }


    return (
        <div>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='mt-10 mx-8 flex flex-col max-h-full overflow-y-auto overflow-x-hidden '>
                    <h2 className='text-2xl text-center'><Person /> My Account</h2>
                    <hr className='w-full my-4' />
                    <h2 className='text-1xl text-center'>Hello {token.name}</h2>
                    <div className='flex mt-4'>
                        <Tabs value={activeNav} className='w-full pb-4 overflow-x-auto'>
                            <TabsHeader>
                                <Tab value={'Account'} onClick={() => setActiveNav("Account")}>Account</Tab>
                                <Tab value={'Order'} onClick={() => setActiveNav("Order")}>Order</Tab>
                                <Tab value={'Inquiry'} onClick={() => setActiveNav("Inquiry")}>Inquiry</Tab>
                            </TabsHeader>
                        </Tabs>
                        <div>
                            <Tooltip title="LogOut">
                                <IconButton onClick={() => setConfirm(true)}>
                                    <LogoutRounded className='text-red-300 hover:scale-110 duration-150' />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>

                    {activeNav == "Account" &&
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

                    {activeNav == "Order" &&
                        <div>
                            <div className='flex flex-col items-center w-full m-2 p-3 border-dashed  border-2 border-gray-300'>
                                <p className='text-xl font-semibold text-gray-300'>Previous Orders</p>
                                {/* <div>
                                    <p>No Orders</p>
                                </div> */}
                                <div>
                                    <p>Total Amount : 5000</p>
                                    <p>Order Type : kik</p>
                                    <p>Delivery date : </p>
                                </div>
                                <div className='flex flex-col gap-5'>

                                    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
                                        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGelwS_r9NTwaRf2xg6A_Zu-v7BqFZdkcrnlwACCNgcNEnpzTmwZzaA9xC5RAEon5smSU&usqp=CAU" alt="Woman's Face" />
                                        <div class="text-center space-y-2 sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg text-black font-semibold">
                                                    Product Name
                                                </p>
                                                <p class="text-slate-500 font-medium">
                                                    price
                                                </p>
                                            </div>
                                            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                                        </div>
                                    </div>
                                    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
                                        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGelwS_r9NTwaRf2xg6A_Zu-v7BqFZdkcrnlwACCNgcNEnpzTmwZzaA9xC5RAEon5smSU&usqp=CAU" alt="Woman's Face" />
                                        <div class="text-center space-y-2 sm:text-left">
                                            <div class="space-y-0.5">
                                                <p class="text-lg text-black font-semibold">
                                                    Product Name
                                                </p>
                                                <p class="text-slate-500 font-medium">
                                                    price
                                                </p>
                                            </div>
                                            <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                                        </div>
                                    </div>

                                </div>
                                <ButtonGroup color='red' className='mt-5 w-full'>
                                    <Button className='w-full'>Canal</Button>
                                </ButtonGroup>

                            </div>
                        </div>
                    }

                    {activeNav == "Inquiry" &&
                        <div>
                            <div className='flex flex-col items-center w-full my-2 p-3 border-dashed  border-2 border-gray-300'>
                                <p className='text-xl font-semibold text-green-400'>Send Inquiry</p>
                                <form onSubmit={handelOnSubmit} className='w-full flex flex-col gap-5 mt-5'>
                                    <Input label='Subject' onChange={(e) => updateInquiry('subject', e.target.value)} required />
                                    <Textarea label='Message' onChange={(e) => updateInquiry('message', e.target.value)} required></Textarea>
                                    <ButtonGroup color='red'>
                                        <Button type='submit' className='w-full'>Submit</Button>
                                    </ButtonGroup>
                                </form>
                            </div>
                            {
                                inquiryList.map((item, index) => (
                                    <div key={index} className='flex flex-col items-center w-full my-2 p-3 border-dashed  border-2 border-gray-300'>
                                        <p className='text-xl font-semibold text-green-400'>Response</p>
                                        {
                                            item.status == 'PENDING' &&
                                            <div className='w-full flex flex-col gap-5 mt-5 justify-center items-center'>
                                                <p className='text-gray-500'>Response is pending</p>
                                                <img src="https://cdn.dribbble.com/users/3765/screenshots/3619014/play.gif" width={100} alt="" />
                                                {/* <SearchOffRounded className='text-gray-300' sx={{ fontSize: '100px' }} /> */}
                                            </div>
                                        }
                                        {
                                            item.status == 'RESPONDED' &&
                                            <div className='w-full flex flex-col gap-5 mt-5 '>
                                                <div>
                                                    <p>Subject : </p>
                                                    <p className='ms-10 text-gray-500'>{item.subject}</p>
                                                </div>
                                                <div>
                                                    <p>Message : </p>
                                                    <p className='ms-10 text-gray-500'>{item.message}</p>
                                                </div>
                                                <div>
                                                    <p>Response : </p>
                                                    <p className='ms-10 text-gray-500'>{item.response}</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }

                    <ConformDelete open={confirm} close={() => setConfirm(false)} conformFunction={() => {
                        resetToken()
                        toast.success('Successfully log out.')
                    }}
                    />
                </div>
            </Drawer>
        </div>
    )
}

export default MyAccount

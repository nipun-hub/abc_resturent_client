import React, { useEffect } from 'react'
import { Dialog, Input, Option, Select, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { Hub } from '@mui/icons-material';

const categoryList = [
    {
        "id": "7f239c6c-25d2-4cc5-8b5f-0411caae4ac4",
        "categoryName": "Pitsa",
        "status": "ACTIVE"
    },
    {
        "id": "d9894258-6ce3-4f59-91bd-eece4d9c4100",
        "categoryName": "Hot",
        "status": "ACTIVE"
    }
];

const AddItemAlert = ({ open, close, data }) => {

    const [addItemData, setAddItemData] = useState({
        imageUrl: data ? data.imageUrl : '',
        itemName: data ? data.itemName : '',
        unitPrice: data ? data.unitPrice : '',
        category: data ? data.category : '',
        description: data ? data.description : '',
    })

    const updateSetAddItemData = (name, value) => {
        setAddItemData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handelImageUpload = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            updateSetAddItemData('imageUrl', reader.result)
        }
    }

    const handelSubmit = () => {
        console.log(!data ? 'insert' : 'update')
        console.log(addItemData)
    }

    return (
        // <DialogPop isOpen={open} close={close} >
        <Dialog size="sm" open={open} handler={close} className="p-4">
            {/* <div className="absolute bg-black opacity-60 inset-0 z-0"></div> */}
            <div className=" w-full p-10 bg-white rounded-xl z-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">{data ? 'Update item' : 'Add Item'}</h2>
                    {/* <p className="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p> */}
                </div>
                {/* <form className="mt-8 space-y-3"> */}
                <div className='md:flex gap-3'>
                    <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Item Name</label>
                        <Input value={addItemData.itemName} name='itemName' label='Item name' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 space-y-2 w-full md:w-1/2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Unit Price</label>
                        <Input value={addItemData.unitPrice} name='unitPrice' label='Unit price' color='blue-gray' className='before::outline-gray-300 text-s' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)} />
                    </div>
                </div>
                <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">Select Category</label>
                    <Select name='category' label="Select Category" color='blue-gray' onChange={(e) => updateSetAddItemData('category', e)} value={addItemData.category.categoryName || ''}>
                        {
                            categoryList.map((categoryItem, index) => (
                                <Option key={index} value={categoryItem.categoryName}>{categoryItem.categoryName}</Option>
                            ))
                        }
                    </Select>
                </div>
                <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">Description</label>
                    <Textarea value={addItemData.description} name='description' label='Description' color='blue-gray' onChange={(e) => updateSetAddItemData(e.target.name, e.target.value)}></Textarea>
                </div>
                <div className="grid grid-cols-1 space-y-2">
                    <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                            <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                                <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10 justify-center">
                                    <img className="has-mask h-36 object-center" src={addItemData.imageUrl ? addItemData.imageUrl : "https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"} alt="freebie image" />
                                </div>
                                <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                            </div>
                            <input name='image' type="file" className="hidden" onChange={(e) => handelImageUpload(e.target.files[0])} />
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
                        onClick={handelSubmit}
                    >
                        {data ? 'Update' : 'edit'}
                    </button>
                </div>
                {/* </form> */}
            </div>
        </Dialog>
    )
}

export default AddItemAlert

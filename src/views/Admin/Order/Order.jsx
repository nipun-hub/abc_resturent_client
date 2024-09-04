import * as React from 'react';
import { AddRounded, AdjustRounded, ArrowRightAltRounded, DeleteOutlineRounded, DriveFileRenameOutlineRounded, PlaylistAddCheckRounded, PlaylistAddRounded, PlaylistRemoveRounded, RemoveRedEyeRounded, VisibilityRounded } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { StoreContext } from '../../../context/StoreContext';
import { IconButton, Tooltip } from '@mui/material';
import Confirm from './Alert/Confirm';
import View from './Alert/View';

const columns = ["Name", 'Amount', 'Date', 'Type', 'Status', 'Action'];

const dataList = [

    {
        "id": "8612364d-dc4d-4c40-8a66-e5542e2a54ce",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "bec3cb3d-7555-4b41-95ed-fb662aa39c60",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "088a255e-0cad-49ef-afef-95a5575be213",
            "paymentDate": "2024-08-19T16:00:52.522015Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "b733414f-e795-4e8a-8182-e3b98c25ca17",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "b10249c9-334a-479a-90c2-f30e2009c85c",
                "quantity": 2,
                "item": null,
                "offer": {
                    "id": "bfe643d9-dd48-47f1-823a-2fc6c925d34f",
                    "offerName": "buru offer",
                    "description": "50% off on select items",
                    "offerUnitPrice": 150.0,
                    "imageUrl": "http://localhost:8080/api/uploads/63d89bb6-4eee-444c-88fc-8a3e49855fb2_menu_1.png",
                    "status": "ACTIVE",
                    "startDate": null,
                    "endDate": null,
                    "items": null
                }
            }
        ],
        "payment": {
            "id": "1965ee16-7838-4969-8a0d-d2a23a4a112f",
            "paymentDate": "2024-08-19T16:18:54.967518Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "a3e38e29-4804-4926-a9b4-16c752e114fe",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "8bd38954-1e61-4a9c-b271-0931e898d888",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "4ff74b3a-cd4c-4c7d-8d88-fe476265182f",
            "paymentDate": "2024-08-19T15:51:59.912593Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "6170ed5a-6812-4ff4-b728-cd3671bb535b",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "67b59a84-c104-466a-be08-a54b4c87d888",
                "quantity": 2,
                "item": null,
                "offer": {
                    "id": "bfe643d9-dd48-47f1-823a-2fc6c925d34f",
                    "offerName": "buru offer",
                    "description": "50% off on select items",
                    "offerUnitPrice": 150.0,
                    "imageUrl": "http://localhost:8080/api/uploads/63d89bb6-4eee-444c-88fc-8a3e49855fb2_menu_1.png",
                    "status": "ACTIVE",
                    "startDate": null,
                    "endDate": null,
                    "items": null
                }
            }
        ],
        "payment": {
            "id": "816bd910-3895-438b-a000-a99107b48d38",
            "paymentDate": "2024-09-02T16:55:10.624155Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "7a49613e-c049-448a-a044-f2d36b678521",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "cb124157-e868-4dc8-afca-d2c57fdb7c16",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "99f48ddd-9586-4121-8a38-156293475941",
            "paymentDate": "2024-08-19T16:16:28.091488Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "7d4328f5-63f1-44ad-afa9-1ef504610576",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "c0ee10bb-89f1-4b98-be44-289077913902",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "b121186e-83de-4e51-b890-226141730814",
            "paymentDate": "2024-08-19T16:08:21.219858Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "1a1a8a4e-58e9-4d9f-ba55-991b5ee3d380",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "903f12ff-bd94-432a-aa64-2ed5b3db6dea",
                "quantity": 2,
                "item": {
                    "id": "a57bd541-12c1-4a6c-b5c7-4ac013fe003a",
                    "itemName": "rice and curry",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/5460000c-6eb6-4215-a728-570573b2205c_menu_6.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "c28edd4f-4b19-4b32-b2d8-46c10cae5bfc",
            "paymentDate": "2024-09-02T16:57:12.491882Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "c307869a-9f96-4dca-be60-c2f450db4ab3",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "c3c1d798-927c-4fb1-9f97-7766dcd2dd7b",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "eee44b87-af0b-4d04-9ca6-1a68c134ae0c",
            "paymentDate": "2024-08-19T16:16:08.667032Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    },
    {
        "id": "e0862c58-eaf1-4f27-bbb8-3df96d4d7b2b",
        "orderDate": "2024-08-17T10:00:00Z",
        "orderType": "DINE_IN",
        "totalAmount": 120.5,
        "status": "PENDING",
        "user": {
            "id": "d89c593c-66f8-4ec6-babc-eec7d1922a2b",
            "fullName": "John gui",
            "email": "john.gui@example.com",
            "address": "Ayagama, Pimbura",
            "phone": "+123416573453",
            "password": null,
            "status": "ACTIVE",
            "role": "ADMIN"
        },
        "orderDetails": [
            {
                "id": "65f599a6-4c28-4b17-b6dc-97956384fd14",
                "quantity": 2,
                "item": {
                    "id": "0a1e8023-d645-4bc3-8be4-6ee294e927bd",
                    "itemName": "awwwww",
                    "description": "This is a sample description for the item. It should be between 5 and 200 characters.",
                    "rate": 0,
                    "unitPrice": 200.0,
                    "discountPercentage": 5.0,
                    "imageUrl": "http://localhost:8080/api/uploads/dcbd115b-78f9-48d3-a2ec-c247b479d0c3_food_1.png",
                    "status": "ACTIVE",
                    "category": {
                        "id": "62ea77f5-3ef9-47b7-885d-867e38efedfe",
                        "categoryName": "Hot",
                        "status": "ACTIVE"
                    }
                },
                "offer": null
            }
        ],
        "payment": {
            "id": "fd7808a4-58ab-466e-b334-2ac6c0c44100",
            "paymentDate": "2024-08-19T16:14:22.092433Z",
            "amount": 120.5,
            "paymentMethod": "ONLINE",
            "paymentStatus": "PAID"
        }
    }

]

export default function Category() {
    const { categoriesList } = React.useContext(StoreContext)
    const [rerender, setRerender] = React.useState(false);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [selectedData, setSelectedData] = React.useState([]);
    const [type, setType] = React.useState('')

    const [conformOpen, setConformOpen] = React.useState(false);
    const [viewOpen, serViewOpen] = React.useState(false);

    const handelConfirm = (type, id) => {
        setSelectedData(dataList.filter(item => item.id === id)[0])
        setType(type)
        setConformOpen(true)
    }
    const openViewAlert = (id) => {
        setSelectedData(dataList.filter(item => item.id === id)[0])
        serViewOpen(true);
    }

    // const [addCategoryOpen, setAddCategoryOpen] = React.useState(false);
    // const [deleteOpen, serDeleteOpen] = React.useState(false);
    // const [updateOpen, serUpdateOpen] = React.useState(false);

    // const closeAddCategoryAlert = () => { setAddCategoryOpen(false) }
    // const closeDeleteAlert = () => { serDeleteOpen(false) }
    // const closeUpdateAlert = () => { serUpdateOpen(false) }
    // const openConformAlert = (id) => {
    //     setSelectedCategoryData(categoriesList.filter(item => item.id === id)[0])
    //     serDeleteOpen(true)
    // }
    // const openUpdateAlert = (id) => {
    //     setSelectedCategoryData(categoriesList.filter(item => item.id === id)[0])
    //     serUpdateOpen(true);
    // }


    const [searchText, setSearchText] = React.useState()

    return (
        <>
            <View open={viewOpen} close={() => serViewOpen(false)} data={selectedData} />
            <Confirm
                open={conformOpen}
                close={() => setConformOpen(false)}
                type={type}
                data={selectedData ? selectedData : null}
                rerender={() => setRerender(prev => !prev)}
            />

            <Paper sx={{ overflow: 'hidden' }} className='mt-10 max-w-full me-0.5'>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <div class="w-full max-w-sm min-w-[200px]">
                                        <div class="relative flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-500">
                                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                            </svg>

                                            <input
                                                class="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                                placeholder="UI Kits, Dashboards..." onChange={(e) => setSearchText(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, col_id) => (
                                    <TableCell
                                        className='border-s-2 border-gray-200'
                                        key={col_id}
                                    >
                                        <p className='font-bold'>{column}</p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataList.filter(item => item.user.fullName.includes(searchText) || !searchText)
                                .map((row, rowId) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={rowId}>
                                            <TableCell className='border-s-2 border-gray-200 '>{row.user.fullName}</TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>{row.totalAmount}</TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>{new Date(row.orderDate).toLocaleDateString()}</TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>{row.orderType}</TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>
                                                {
                                                    row.status == "ACTIVE"
                                                        ? <div className='relative text-green-300 flex justify-center'>
                                                            <AdjustRounded className='animate-ping' sx={{ fontSize: 20 }} />
                                                            <AdjustRounded className='absolute ' sx={{ fontSize: 20 }} />
                                                        </div>
                                                        : (
                                                            row.status == 'PENDING' ?
                                                                <div className='relative text-yellow-300 flex justify-center'>
                                                                    <AdjustRounded className='animate-ping' sx={{ fontSize: 20 }} />
                                                                    <AdjustRounded className='absolute ' sx={{ fontSize: 20 }} />
                                                                </div>
                                                                :
                                                                <div className='relative text-red-300 flex justify-center'>
                                                                    <AdjustRounded className='animate-ping' sx={{ fontSize: 20 }} />
                                                                    <AdjustRounded className='absolute ' sx={{ fontSize: 20 }} />
                                                                </div>
                                                        )
                                                }
                                            </TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>
                                                <span className='flex justify-center gap-3'>
                                                    <span onClick={() => handelConfirm('CANCELLED', row.id)}>
                                                        <Tooltip title="CANCELLED">
                                                            <IconButton>
                                                                <PlaylistRemoveRounded className='text-red-300 hover:scale-110 duration-150' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </span>
                                                    {/* <span onClick={() => handelConfirm('accept', row.id)}>
                                                        <Tooltip title="Delete">
                                                            <IconButton>
                                                                <PlaylistAddRounded className='text-blue-300 hover:scale-110 duration-150' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </span> */}
                                                    <span onClick={() => handelConfirm('COMPLETED', row.id)}>
                                                        <Tooltip title="COMPLETED">
                                                            <IconButton>
                                                                <PlaylistAddCheckRounded className='text-green-300 hover:scale-110 duration-150' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </span>
                                                    <span onClick={() => openViewAlert(row.id)}>
                                                        <Tooltip title="Delete">
                                                            <IconButton>
                                                                <RemoveRedEyeRounded className='text-green-300 hover:scale-110 duration-150' />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </span>
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={categoriesList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >
        </>
    );
}
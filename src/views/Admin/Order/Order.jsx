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
import { IconButton, Tooltip } from '@mui/material';
import Confirm from './Alert/Confirm';
import View from './Alert/View';
import { getAllOrders } from '../../../services/admin/AdminService';

const columns = ["Name", 'Amount', 'Date', 'Type', 'Status', 'Action'];

export default function Category() {
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

    const [dataList, setDataList] = React.useState([])
    React.useEffect(() => {
        getAllOrders()
            .then(response => {
                setDataList(response.content)
            })
    }, [rerender])

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
                                                        <Tooltip title="View">
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
                    count={dataList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >
        </>
    );
}
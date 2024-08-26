import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { AddRounded, ArrowRightAltRounded } from '@mui/icons-material';
import AddStaffAlert from './AddStaffAlert/AddStaffAlert';

const columns = [
    {
        id: 'name',
        label: 'Name',
        minWidth: 170
    },
    {
        id: 'code',
        label: 'ISO\u00a0Code',
        minWidth: 100
    },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

export default function Staff() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <>
            <AddStaffAlert open={open} close={closeDialog} />
            <div className="flex gap-5 justify-center">
                <Card className="mt-6">
                    <CardBody className="flex  justify-center items-center ">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGiiQ9Bu543SlWXKdrcZyXdxGyyHOUeCmtwd4DFuc06U7z2WtM" width={100} alt="" />
                        <div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Register User - <span className="text-green-400">70</span>
                            </Typography>
                            <Typography>
                                Because it&apos;s about  motivating <br /> the doers.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400" onClick={() => setOpen(true)}>
                                Add item
                                <AddRounded />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>

                <Card className="mt-6">
                    <CardBody className="flex  justify-center items-center ">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGiiQ9Bu543SlWXKdrcZyXdxGyyHOUeCmtwd4DFuc06U7z2WtM" width={100} alt="" />
                        <div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Total Item - <span className="text-green-400">70</span>
                            </Typography>
                            <Typography>
                                Because it&apos;s about  motivating <br /> the doers.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400">
                                Learn More
                                <ArrowRightAltRounded />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>

                <Card className="mt-6">
                    <CardBody className="flex  justify-center items-center ">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGiiQ9Bu543SlWXKdrcZyXdxGyyHOUeCmtwd4DFuc06U7z2WtM" width={100} alt="" />
                        <div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Total Item - <span className="text-green-400">70</span>
                            </Typography>
                            <Typography>
                                Because it&apos;s about  motivating <br /> the doers.
                            </Typography>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2 bg-gray-400">
                                Learn More
                                <ArrowRightAltRounded />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>

            <Paper sx={{ width: '100%', overflow: 'hidden' }} className='mt-10'>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {/* {columns.map((column) => ( */}
                                <TableCell colSpan={5}>
                                    <div class="w-full max-w-sm min-w-[200px]">
                                        <div class="relative flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-500">
                                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                            </svg>

                                            <input
                                                class="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                                placeholder="UI Kits, Dashboards..."
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                                {/* ))} */}
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                    // style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}